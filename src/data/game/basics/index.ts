export * from './gameBasics';
export * from './damageTypes';
export * from './npcData';

export interface DamageType {
  id: string;
  name: string;
  description: string;
}

export const damageTypes: DamageType[] = [
  {
    id: 'physical',
    name: '物理傷害',
    description: '由武器和物理技能造成的基礎傷害類型。'
  },
  {
    id: 'fire',
    name: '火焰傷害',
    description: '燃燒敵人並可能造成點燃效果。'
  },
  {
    id: 'cold',
    name: '冰冷傷害',
    description: '凍結敵人並降低其移動和攻擊速度。'
  }
];
