export interface Trial {
  id: string;
  name: string;
  location: string;
  description: string;
  rewards?: string[];
}

export interface Progress {
  step: number;
  description: string;
  requirements?: string[];
}

export interface BaseClass {
  id: string;
  name: string;
  description: string;
  attributes: string[];
  ascendancies: Ascendancy[];
}

export interface AscendancyNode {
  id: string;
  name: string;
  description: string;
  stats: string[];
  isKeystone?: boolean;
  isNotable?: boolean;
}

export interface Ascendancy {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  nodes: AscendancyNode[];
}

export interface AscendancyClass {
  baseClass: BaseClass;
  ascendancies: Ascendancy[];
}
