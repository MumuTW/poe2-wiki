// 資料來源：https://poe2db.tw/tw/skills
export interface Skill {
  name: string;
  type: 'attack' | 'spell' | 'support' | 'aura' | 'curse';
  tags: string[];
  description: string;
  stats: {
    base: string[];
    quality: string[];
    perLevel: string[];
  };
  requirements: {
    level: number;
    attributes?: {
      str?: number;
      dex?: number;
      int?: number;
    };
  };
  gemColor: 'red' | 'green' | 'blue' | 'white';
  classes: string[];
  isVaalVersion?: boolean;
}

export const skills: Skill[] = [
  {
    name: '火球術',
    type: 'spell',
    tags: ['法術', '投射物', '火焰', 'AoE'],
    description: '釋放一顆火球，對敵人造成火焰傷害並產生爆炸效果。',
    stats: {
      base: [
        '基礎火焰傷害: 14-22',
        '施放時間: 0.75 秒',
        '爆炸範圍: 9',
        '暴擊率: 6%'
      ],
      quality: [
        '每 1% 品質增加 1% 法術傷害',
        '每 1% 品質增加 0.5% 暴擊率'
      ],
      perLevel: [
        '每級增加 8-12 基礎火焰傷害',
        '每級增加 2% 效果範圍'
      ]
    },
    requirements: {
      level: 1,
      attributes: {
        int: 14
      }
    },
    gemColor: 'blue',
    classes: ['女巫', '女術士', '武僧']
  },
  {
    name: '閃電打擊',
    type: 'spell',
    tags: ['法術', '閃電', '範圍'],
    description: '召喚一道閃電打擊目標區域，造成閃電傷害。',
    stats: {
      base: [
        '基礎閃電傷害: 18-28',
        '施放時間: 0.8 秒',
        '範圍: 12',
        '暴擊率: 5%'
      ],
      quality: [
        '每 1% 品質增加 1% 法術傷害',
        '每 1% 品質增加 1% 施放速度'
      ],
      perLevel: [
        '每級增加 10-15 基礎閃電傷害',
        '每級增加 1% 範圍效果'
      ]
    },
    requirements: {
      level: 1,
      attributes: {
        int: 16
      }
    },
    gemColor: 'blue',
    classes: ['女巫', '女術士']
  },
  {
    name: '閃電箭矢',
    type: 'attack',
    tags: ['攻擊', '投射物', '閃電'],
    description: '射出帶有閃電能量的箭矢，對敵人造成閃電傷害。',
    stats: {
      base: [
        '基礎閃電傷害: 1-38',
        '攻擊速度: 100% 基礎',
        '暴擊率: 5%'
      ],
      quality: [
        '每 1% 品質增加 1% 攻擊速度'
      ],
      perLevel: [
        '每級增加 1-3 基礎閃電傷害'
      ]
    },
    requirements: {
      level: 1,
      attributes: {
        dex: 12
      }
    },
    gemColor: 'green',
    classes: ['遊俠']
  },
  {
    name: '毒蛇打擊',
    type: 'attack',
    tags: ['攻擊', '近戰', '混沌'],
    description: '使用匕首進行快速打擊，造成物理傷害並附加混沌傷害。',
    stats: {
      base: [
        '基礎物理傷害: 112% 武器傷害',
        '附加 15-23 混沌傷害',
        '攻擊速度: 115% 基礎',
        '暴擊率: 5%'
      ],
      quality: [
        '每 1% 品質增加 0.5% 攻擊速度',
        '每 1% 品質增加 1% 混沌傷害'
      ],
      perLevel: [
        '每級增加 1-2 混沌傷害',
        '每級增加 1% 物理傷害'
      ]
    },
    requirements: {
      level: 1,
      attributes: {
        dex: 20
      }
    },
    gemColor: 'green',
    classes: ['盜賊']
  },
  {
    name: '召喚骷髏',
    type: 'spell',
    tags: ['法術', '召喚', '不死族'],
    description: '召喚骷髏戰士為你作戰。',
    stats: {
      base: [
        '可同時存在最多 3 個骷髏',
        '骷髏擁有 100% 增加的生命值',
        '骷髏造成 100% 增加的傷害',
        '施放時間: 1.0 秒'
      ],
      quality: [
        '每 1% 品質使召喚物獲得 1% 增加的最大生命值',
        '每 1% 品質使召喚物獲得 1% 增加的傷害'
      ],
      perLevel: [
        '每級使召喚物獲得 5% 增加的最大生命值',
        '每級使召喚物獲得 3% 增加的傷害'
      ]
    },
    requirements: {
      level: 2,
      attributes: {
        int: 26
      }
    },
    gemColor: 'blue',
    classes: ['死靈法師']
  },
  {
    name: '熊之狂怒',
    type: 'spell',
    tags: ['法術', '變形', '持續時間'],
    description: '變形為熊形態，增加物理傷害和生命值。',
    stats: {
      base: [
        '增加 25% 物理傷害',
        '增加 20% 最大生命值',
        '持續時間: 6 秒',
        '冷卻時間: 8 秒'
      ],
      quality: [
        '每 1% 品質增加 1% 物理傷害',
        '每 1% 品質增加 0.5% 最大生命值'
      ],
      perLevel: [
        '每級增加 2% 物理傷害',
        '每級增加 1% 最大生命值'
      ]
    },
    requirements: {
      level: 4,
      attributes: {
        str: 30
      }
    },
    gemColor: 'red',
    classes: ['德魯伊']
  },
  {
    name: '神聖之盾',
    type: 'spell',
    tags: ['法術', '防禦', '持續時間'],
    description: '創造一個神聖護盾，吸收傷害並反射部分傷害給攻擊者。',
    stats: {
      base: [
        '吸收 100-150 傷害',
        '反射 20% 受到的傷害',
        '持續時間: 4 秒',
        '冷卻時間: 6 秒'
      ],
      quality: [
        '每 1% 品質增加 1% 吸收量',
        '每 1% 品質增加 0.5% 反射傷害'
      ],
      perLevel: [
        '每級增加 50-75 吸收量',
        '每級增加 1% 反射傷害'
      ]
    },
    requirements: {
      level: 4,
      attributes: {
        str: 20,
        int: 20
      }
    },
    gemColor: 'white',
    classes: ['聖騎士']
  },
  {
    name: '元素淨化',
    type: 'aura',
    tags: ['光環', '元素', '防禦'],
    description: '釋放光環效果，提高周圍友軍的元素抗性。',
    stats: {
      base: [
        '增加 15% 所有元素抗性',
        '保留 35% 魔力',
        '光環範圍: 36'
      ],
      quality: [
        '每 1% 品質增加 1% 光環效果範圍'
      ],
      perLevel: [
        '每級增加 1% 元素抗性',
        '每級增加 1 光環範圍'
      ]
    },
    requirements: {
      level: 10,
      attributes: {
        int: 30
      }
    },
    gemColor: 'blue',
    classes: ['全部']
  },
  {
    name: '多重打擊',
    type: 'support',
    tags: ['輔助', '攻擊'],
    description: '使支援的攻擊技能同時攻擊多個目標。',
    stats: {
      base: [
        '支援技能同時攻擊 2 個額外目標',
        '支援技能造成 30% 較少傷害',
        '魔力消耗倍率: 160%'
      ],
      quality: [
        '每 1% 品質減少 0.5% 傷害減少量'
      ],
      perLevel: [
        '每級增加 1% 傷害'
      ]
    },
    requirements: {
      level: 8,
      attributes: {
        dex: 25
      }
    },
    gemColor: 'green',
    classes: ['全部']
  },
  {
    name: '元素增幅',
    type: 'support',
    tags: ['輔助', '元素', '法術'],
    description: '增加支援技能的元素傷害，但增加魔力消耗。',
    stats: {
      base: [
        '支援技能造成 40% 更多元素傷害',
        '魔力消耗倍率: 140%'
      ],
      quality: [
        '每 1% 品質增加 0.5% 元素傷害'
      ],
      perLevel: [
        '每級增加 1% 元素傷害'
      ]
    },
    requirements: {
      level: 8,
      attributes: {
        int: 25
      }
    },
    gemColor: 'blue',
    classes: ['全部']
  },
  {
    name: '增加暴擊傷害輔助',
    type: 'support',
    tags: ['輔助', '暴擊'],
    description: '輔助技能有更高的暴擊傷害倍率。',
    stats: {
      base: [
        '增加 30% 暴擊傷害倍率',
        '魔力消耗倍率: 140%'
      ],
      quality: [
        '每 1% 品質增加 0.5% 暴擊傷害'
      ],
      perLevel: [
        '每級增加 2% 暴擊傷害倍率'
      ]
    },
    requirements: {
      level: 8,
      attributes: {
        int: 25
      }
    },
    gemColor: 'blue',
    classes: ['全部']
  },
  {
    name: '活力光環',
    type: 'aura',
    tags: ['光環', '生命'],
    description: '釋放光環效果，增加周圍友軍的生命回復速度。',
    stats: {
      base: [
        '每秒回復 1.5% 生命',
        '保留 25% 魔力',
        '光環範圍: 30'
      ],
      quality: [
        '每 1% 品質增加 1% 光環效果'
      ],
      perLevel: [
        '每級增加 0.1% 生命回復速度',
        '每級增加 1 光環範圍'
      ]
    },
    requirements: {
      level: 4,
      attributes: {
        str: 20
      }
    },
    gemColor: 'red',
    classes: ['聖騎士']
  },
  {
    name: '毒 газа箭',
    type: 'attack',
    tags: ['投射物', '混沌', '中毒', 'AoE'],
    description: '用巨大的毒氣雲毒害你的敵人。',
    stats: {
      base: [
        '基礎混沌傷害: 5-20',
        '攻擊速度: 80% 基礎',
        '暴擊率: 5%'
      ],
      quality: [
        '每 1% 品質增加 1% 攻擊速度',
        '每 1% 品質增加 1% 混沌傷害'
      ],
      perLevel: [
        '每級增加 1-2 基礎混沌傷害'
      ]
    },
    requirements: {
      level: 1,
      attributes: {
        dex: 12
      }
    },
    gemColor: 'green',
    classes: ['遊俠']
  }
];

export const skillTypes = [
  { id: 'all', name: '全部' },
  { id: 'attack', name: '攻擊' },
  { id: 'spell', name: '法術' },
  { id: 'support', name: '輔助' },
  { id: 'aura', name: '光環' },
  { id: 'curse', name: '詛咒' }
];
