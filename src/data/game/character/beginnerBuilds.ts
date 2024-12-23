export interface BuildStep {
  level: number;
  description: string;
  skills: string[];
  equipment: string[];
  passives: string[];
}

export interface BeginnerBuild {
  id: string;
  name: string;
  class: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  playstyle: string;
  progression: BuildStep[];
  tips: string[];
}

export const beginnerBuilds: BeginnerBuild[] = [
  {
    id: 'cyclone-slayer',
    name: '旋風斬屠戮者',
    class: '決鬥者',
    description: '使用旋風斬的近戰build，適合新手入門',
    difficulty: 'easy',
    playstyle: '近戰範圍傷害',
    progression: [
      {
        level: 1,
        description: '開局配置',
        skills: ['重擊', '雙重打擊'],
        equipment: ['任意近戰武器', '生命藥劑'],
        passives: ['力量', '生命']
      }
    ],
    tips: [
      '保持移動來避免傷害',
      '優先提升武器物理傷害',
      '注意保持足夠的生命值'
    ]
  }
];
