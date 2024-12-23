export * from './translationData';

export interface Translation {
  id: string;
  english: string;
  chinese: string;
  category: string;
  notes?: string;
}

export const translations: Translation[] = [
  {
    id: 'life',
    english: 'Life',
    chinese: '生命',
    category: '基礎屬性',
    notes: '角色的基礎生存屬性'
  },
  {
    id: 'mana',
    english: 'Mana',
    chinese: '魔力',
    category: '基礎屬性',
    notes: '用於施放技能的資源'
  },
  {
    id: 'strength',
    english: 'Strength',
    chinese: '力量',
    category: '主要屬性',
    notes: '影響物理傷害和裝備需求'
  }
];
