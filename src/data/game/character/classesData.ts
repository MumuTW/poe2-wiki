export interface Attribute {
  str?: number;
  dex?: number;
  int?: number;
}

export interface StartingStats {
  life: number;
  mana: number;
  attributes: Attribute;
}

export interface ClassSkill {
  name: string;
  level: number;
  description: string;
}

export interface AscendancyNode {
  name: string;
  description: string;
  stats: string[];
  isKeystone?: boolean;
  isNotable?: boolean;
  requiredPoints?: number;
}

export interface AscendancyPath {
  name: string;
  englishName: string;
  description: string;
  playstyle: string;
  nodes: AscendancyNode[];
  details: string[];
}

export interface GameClass {
  name: string;
  englishName: string;
  description: string;
  startingStats: StartingStats;
  startingSkills: ClassSkill[];
  ascendancies: AscendancyPath[];
  playstyle: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  recommendedForNewPlayers: boolean;
  isEarlyAccess: boolean;
  weaponType: string;
}

export const classes: GameClass[] = [
  {
    name: '戰士',
    englishName: 'Warrior',
    description: '戰士是純力量型職業，專精於使用錘類武器進行近戰戰鬥。',
    startingStats: {
      life: 85,
      mana: 30,
      attributes: {
        str: 20,
        dex: 8,
        int: 8
      }
    },
    startingSkills: [
      {
        name: '錘擊',
        level: 1,
        description: '使用錘類武器進行強力打擊。'
      }
    ],
    ascendancies: [
      {
        name: '重擊專精',
        englishName: 'Heavy Slams',
        description: '專注於重擊和地面震擊，造成巨大的範圍傷害。',
        playstyle: '重擊型，適合喜歡大範圍打擊的玩家。',
        nodes: [],
        details: [
          '重擊造成巨大傷害',
          '使用錘子震擊地面',
          '造成地面裂痕'
        ]
      },
      {
        name: '控制專精',
        englishName: 'Stuns and Knockback',
        description: '專精於擊暈和擊退效果，控制敵人的移動。',
        playstyle: '控制型，適合喜歡控場的玩家。',
        nodes: [],
        details: [
          '擊暈敵人',
          '將敵人擊退',
          '將敵人擊倒在地'
        ]
      },
      {
        name: '防禦專精',
        englishName: 'Defences',
        description: '專注於防禦和生存能力，提高抗性和格擋。',
        playstyle: '防禦型，適合喜歡穩健戰鬥的玩家。',
        nodes: [],
        details: [
          '使用重甲抵禦小傷害',
          '用盾牌格擋大型攻擊',
          '利用龐大生命值承受剩餘傷害'
        ]
      }
    ],
    playstyle: [
      '強大的近戰戰鬥能力',
      '專精錘類武器',
      '具有優秀的生存能力'
    ],
    difficulty: 'Easy',
    recommendedForNewPlayers: true,
    isEarlyAccess: true,
    weaponType: '錘'
  },
  {
    name: '傭兵',
    englishName: 'Mercenary',
    description: '傭兵是力量和敏捷混合型職業，專精於使用十字弓進行遠程攻擊。',
    startingStats: {
      life: 75,
      mana: 35,
      attributes: {
        str: 15,
        dex: 15,
        int: 8
      }
    },
    startingSkills: [
      {
        name: '十字弓射擊',
        level: 1,
        description: '使用十字弓進行精準的遠程攻擊。'
      }
    ],
    ascendancies: [
      {
        name: '彈藥專精',
        englishName: 'Ammunition',
        description: '專精於各種十字弓彈藥的運用。',
        playstyle: '戰術型，適合喜歡靈活應變的玩家。',
        nodes: [],
        details: [
          '切換不同類型的十字弓彈藥',
          '適應敵人的行為模式',
          '利用敵人的弱點'
        ]
      },
      {
        name: '元素彈藥',
        englishName: 'Elemental Rounds',
        description: '專注於元素彈藥的運用。',
        playstyle: '元素型，適合喜歡元素傷害的玩家。',
        nodes: [],
        details: [
          '使用寒冰彈凍結敵人',
          '使用火焰彈點燃敵人',
          '釋放連鎖閃電彈'
        ]
      },
      {
        name: '靈活射程',
        englishName: 'Versatile Range',
        description: '專精於適應不同戰鬥距離。',
        playstyle: '全能型，適合喜歡靈活戰鬥的玩家。',
        nodes: [],
        details: [
          '適應敵人的行為',
          '遠距離狙擊',
          '近距離反擊'
        ]
      }
    ],
    playstyle: [
      '精準的遠程攻擊能力',
      '專精十字弓',
      '力量和敏捷的完美結合'
    ],
    difficulty: 'Medium',
    recommendedForNewPlayers: false,
    isEarlyAccess: true,
    weaponType: '十字弓'
  },
  {
    name: '遊俠',
    englishName: 'Ranger',
    description: '遊俠是純敏捷型職業，專精於使用弓箭進行遠程攻擊。',
    startingStats: {
      life: 70,
      mana: 35,
      attributes: {
        str: 8,
        dex: 20,
        int: 8
      }
    },
    startingSkills: [
      {
        name: '箭矢射擊',
        level: 1,
        description: '使用弓箭進行快速的遠程攻擊。'
      }
    ],
    ascendancies: [
      {
        name: '遠程專精',
        englishName: 'Long Range',
        description: '專注於遠距離射擊和精準打擊。',
        playstyle: '遠程型，適合喜歡保持距離的玩家。',
        nodes: [],
        details: [
          '遠距離射箭',
          '在敵人接近前擊殺',
          '保持安全距離'
        ]
      },
      {
        name: '敏捷專精',
        englishName: 'Agility',
        description: '專注於移動中射擊和靈活操作。',
        playstyle: '機動型，適合喜歡高機動性的玩家。',
        nodes: [],
        details: [
          '移動中射擊',
          '跳過敵人',
          '迅速脫離危險'
        ]
      },
      {
        name: '群體控制',
        englishName: 'Crowd Control',
        description: '專注於控制敵人移動和範圍控制。',
        playstyle: '控制型，適合喜歡控場的玩家。',
        nodes: [],
        details: [
          '減緩敵人速度',
          '凍結敵人',
          '阻止敵人接近'
        ]
      }
    ],
    playstyle: [
      '高速的遠程攻擊能力',
      '專精弓箭',
      '卓越的迴避能力'
    ],
    difficulty: 'Medium',
    recommendedForNewPlayers: false,
    isEarlyAccess: true,
    weaponType: '弓'
  },
  {
    name: '武僧',
    englishName: 'Monk',
    description: '武僧是敏捷和智慧混合型職業，專精於使用細杖或空手戰鬥。',
    startingStats: {
      life: 70,
      mana: 45,
      attributes: {
        str: 8,
        dex: 15,
        int: 15
      }
    },
    startingSkills: [
      {
        name: '武術打擊',
        level: 1,
        description: '使用武術技巧進行近身攻擊。'
      }
    ],
    ascendancies: [
      {
        name: '快速打擊',
        englishName: 'Quick Strikes',
        description: '專注於高速連擊和持續輸出。',
        playstyle: '連擊型，適合喜歡快速攻擊的玩家。',
        nodes: [],
        details: [
          '無盡的連續攻擊',
          '持續施加壓力',
          '不間斷的打擊'
        ]
      },
      {
        name: '靈活移動',
        englishName: 'Mobility',
        description: '專注於戰場機動性和閃避能力。',
        playstyle: '機動型，適合喜歡靈活戰鬥的玩家。',
        nodes: [],
        details: [
          '穿梭於敵群中',
          '閃避危險',
          '快速接近目標'
        ]
      },
      {
        name: '連擊系統',
        englishName: 'Combos',
        description: '專注於蓄力和釋放強力終結技。',
        playstyle: '連擊型，適合喜歡技能連招的玩家。',
        nodes: [],
        details: [
          '積累能量',
          '釋放毀滅性終結技',
          '強力連擊組合'
        ]
      }
    ],
    playstyle: [
      '靈活的近戰戰鬥能力',
      '專精細杖或空手戰鬥',
      '兼具攻擊和法術能力'
    ],
    difficulty: 'Hard',
    recommendedForNewPlayers: false,
    isEarlyAccess: true,
    weaponType: '細杖/空手'
  },
  {
    name: '女巫',
    englishName: 'Witch',
    description: '女巫是純智慧型職業，專精於使用法杖或權杖施放法術。',
    startingStats: {
      life: 60,
      mana: 55,
      attributes: {
        str: 8,
        dex: 8,
        int: 20
      }
    },
    startingSkills: [
      {
        name: '暗影箭',
        level: 1,
        description: '發射暗影能量進行遠程攻擊。'
      }
    ],
    ascendancies: [
      {
        name: '死靈召喚',
        englishName: 'Minions',
        description: '專注於召喚不死大軍和操控死靈。',
        playstyle: '召喚型，適合喜歡管理召喚物的玩家。',
        nodes: [],
        details: [
          '召喚不死大軍',
          '指揮亡靈軍團',
          '控制死靈僕從'
        ]
      },
      {
        name: '混沌魔法',
        englishName: 'Chaos Magic',
        description: '專注於瘟疫和衰弱詛咒。',
        playstyle: '詛咒型，適合喜歡持續傷害的玩家。',
        nodes: [],
        details: [
          '釋放瘟疫',
          '施加衰弱效果',
          '造成緩慢而痛苦的死亡'
        ]
      },
      {
        name: '骨系魔法',
        englishName: 'Osteomancy',
        description: '專注於骨系魔法和快速傷害。',
        playstyle: '骨系法師，適合喜歡快速施法的玩家。',
        nodes: [],
        details: [
          '控制骨刺生長',
          '快速致命的魔法',
          '骨系法術掌控'
        ]
      }
    ],
    playstyle: [
      '強大的法術傷害能力',
      '專精法杖和權杖',
      '深奧的魔法知識'
    ],
    difficulty: 'Medium',
    recommendedForNewPlayers: false,
    isEarlyAccess: true,
    weaponType: '法杖/權杖'
  },
  {
    name: '女術士',
    englishName: 'Sorceress',
    description: '女術士是純智慧型職業，專精於使用長杖施放強大法術。',
    startingStats: {
      life: 60,
      mana: 55,
      attributes: {
        str: 8,
        dex: 8,
        int: 20
      }
    },
    startingSkills: [
      {
        name: '奧術箭',
        level: 1,
        description: '發射奧術能量進行遠程攻擊。'
      }
    ],
    ascendancies: [
      {
        name: '火焰法術',
        englishName: 'Fire Spells',
        description: '專注於火焰魔法和爆炸效果。',
        playstyle: '火焰法師，適合喜歡範圍傷害的玩家。',
        nodes: [],
        details: [
          '製造大規模爆炸',
          '點燃敵人',
          '觀察敵人燃燒'
        ]
      },
      {
        name: '寒冰法術',
        englishName: 'Cold Spells',
        description: '專注於寒冰魔法和控制效果。',
        playstyle: '寒冰法師，適合喜歡控制型法術的玩家。',
        nodes: [],
        details: [
          '減緩敵人速度',
          '凍結敵人',
          '控制敵人移動'
        ]
      },
      {
        name: '閃電法術',
        englishName: 'Lightning Spells',
        description: '專注於閃電魔法和連鎖效果。',
        playstyle: '閃電法師，適合喜歡連鎖傷害的玩家。',
        nodes: [],
        details: [
          '釋放連鎖閃電',
          '電擊敵人造成更高傷害',
          '閃電彈跳效果'
        ]
      }
    ],
    playstyle: [
      '強大的元素法術能力',
      '專精長杖',
      '精通時空魔法'
    ],
    difficulty: 'Hard',
    recommendedForNewPlayers: false,
    isEarlyAccess: true,
    weaponType: '長杖'
  }
];

export const getClassByName = (name: string): GameClass | undefined => {
  return classes.find(c => c.name === name || c.englishName === name);
};

export const getAscendancyByName = (className: string, ascendancyName: string): AscendancyPath | undefined => {
  const gameClass = getClassByName(className);
  return gameClass?.ascendancies.find(a => a.name === ascendancyName);
};
