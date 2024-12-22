import axios from 'axios';
import { sha256 } from 'crypto-js';

interface DataSource {
  url: string;
  name: string;
  lastChecked: Date;
  hash: string;
}

interface ValidationResult {
  isValid: boolean;
  lastChecked: Date;
  differences?: string[];
  source: string;
}

export class DataValidator {
  private static sources: DataSource[] = [
    {
      url: 'https://poe2db.tw/tw/skills',
      name: 'skills',
      lastChecked: new Date(),
      hash: ''
    },
    {
      url: 'https://poe2db.tw/tw/uniques',
      name: 'uniques',
      lastChecked: new Date(),
      hash: ''
    }
  ];

  private static async fetchContent(url: string): Promise<string> {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error fetching content from ${url}:`, error);
      throw error;
    }
  }

  private static generateHash(content: string): string {
    return sha256(content).toString();
  }

  private static async validateSource(source: DataSource): Promise<ValidationResult> {
    try {
      const content = await this.fetchContent(source.url);
      const newHash = this.generateHash(content);
      
      const isValid = source.hash === '' || source.hash === newHash;
      source.hash = newHash;
      source.lastChecked = new Date();

      return {
        isValid,
        lastChecked: source.lastChecked,
        source: source.name
      };
    } catch (error) {
      return {
        isValid: false,
        lastChecked: source.lastChecked,
        differences: [`Error validating ${source.name}: ${error.message}`],
        source: source.name
      };
    }
  }

  public static async validateAll(): Promise<ValidationResult[]> {
    const results = await Promise.all(
      this.sources.map(source => this.validateSource(source))
    );
    return results;
  }

  public static getLastChecked(sourceName: string): Date | null {
    const source = this.sources.find(s => s.name === sourceName);
    return source ? source.lastChecked : null;
  }
}

// 資料介面定義
export interface GameData {
  version: string;
  lastUpdated: Date;
  source: string;
}

export interface SkillData extends GameData {
  name: string;
  type: string;
  tags: string[];
  description: string;
  stats: string[];
  levelRequirement: number;
}

export interface UniqueData extends GameData {
  name: string;
  type: string;
  stats: string[];
  requirements: {
    level: number;
    attributes?: {
      strength?: number;
      dexterity?: number;
      intelligence?: number;
    };
  };
}

// 資料管理器
export class DataManager {
  private static instance: DataManager;
  private data: Map<string, GameData[]>;

  private constructor() {
    this.data = new Map();
  }

  public static getInstance(): DataManager {
    if (!DataManager.instance) {
      DataManager.instance = new DataManager();
    }
    return DataManager.instance;
  }

  public async updateData(type: string, newData: GameData[]): Promise<void> {
    // 驗證資料來源
    const validationResults = await DataValidator.validateAll();
    const sourceValidation = validationResults.find(r => r.source === type);

    if (!sourceValidation?.isValid) {
      console.warn(`Data validation failed for ${type}`);
      return;
    }

    this.data.set(type, newData);
  }

  public getData(type: string): GameData[] {
    return this.data.get(type) || [];
  }

  public getLastUpdate(type: string): Date | null {
    return DataValidator.getLastChecked(type);
  }
}
