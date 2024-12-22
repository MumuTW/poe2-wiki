export interface RecommendedLevel {
  start: number;
  end: number;
}

export interface Area {
  name: string;
  description: string;
  level: number;
  monsters: string[];
  tips?: string[];
}

export interface QuestReward {
  name: string;
  description: string;
}

export interface Quest {
  name: string;
  description: string;
  objectives: string[];
  rewards: QuestReward[];
  tips?: string[];
}

export interface BossMechanic {
  name: string;
  description: string;
  damage_type: string;
  counter_strategy: string;
}

export interface BossPhase {
  phase: number;
  description: string;
  mechanics: BossMechanic[];
  tips: string[];
}

export interface BossReward {
  item: string;
  description: string;
}

export interface Boss {
  name: string;
  location: string;
  level: number;
  difficulty: string;
  phases: BossPhase[];
  rewards: BossReward[];
  preparation: string[];
}

export interface Act {
  number: number;
  title: string;
  summary: string;
  recommended_level: RecommendedLevel;
  tips: string[];
  areas: Area[];
  main_quests: Quest[];
  side_quests: Quest[];
  bosses: Boss[];
}

export interface StoryData {
  setting: string;
  total_acts: number;
  current_acts: number;
  estimated_time: string;
  [key: number]: Act;
}

export type Story = StoryData & { [key: number]: Act };
