export interface PassiveNode {
  id: string;
  name: string;
  description: string;
  position: {
    x: number;
    y: number;
  };
  type: 'normal' | 'notable' | 'keystone';
  stats: string[];
}

export interface PassiveConnection {
  source: string;
  target: string;
}

export const passiveTreeData = {
  nodes: [] as PassiveNode[],
  connections: [] as PassiveConnection[]
};
