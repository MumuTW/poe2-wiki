// 基礎類型定義
export interface GameClass {
  id: string;
  name: string;
  description: string;
  playstyle: string;
  difficulty: string;
  ascendancies: {
    name: string;
    description: string;
  }[];
}

export interface Skill {
  id: string;
  name: string;
  type: string;
  description: string;
  mechanics: string[];
  tags: string[];
}

// 基礎數據
export const classes: GameClass[] = [
  {
    id: "barbarian",
    name: "野蠻人",
    description: "強大的近戰戰士，專精於使用重型武器和憤怒技能。",
    playstyle: "近戰攻擊型",
    difficulty: "入門",
    ascendancies: [
      {
        name: "狂戰士",
        description: "專注於高爆發傷害和生命偷取"
      },
      {
        name: "酋長",
        description: "增強吶喊技能和團隊增益"
      }
    ]
  }
];

export const skills: Skill[] = [
  {
    id: "cleave",
    name: "劈砍",
    type: "攻擊",
    description: "使用近戰武器進行大範圍揮擊，對前方敵人造成傷害。",
    mechanics: [
      "可以使用斧頭或劍",
      "擊中多個敵人",
      "基礎物理傷害"
    ],
    tags: ["攻擊", "近戰", "範圍"]
  }
];

export { type Ascendancy } from './ascendancyData';
