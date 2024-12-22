export interface BeginnerBuild {
  class: string;
  englishName: string;
  buildName: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  playstyle: string;
  advantages: string[];
  keySkills: string[];
  gearFocus: {
    weapon: string;
    armor: string;
    accessories: string[];
  };
  leveling: string[];
}

export const beginnerBuilds: BeginnerBuild[] = [
  {
    class: '戰士',
    englishName: 'Warrior',
    buildName: '重擊震地流',
    difficulty: 'Easy',
    playstyle: '近戰重擊型，專注於使用錘類武器進行大範圍打擊',
    advantages: [
      '裝備需求簡單',
      '生存能力強',
      '技能機制直觀',
      '適合新手入門'
    ],
    keySkills: [
      '重擊',
      '地震打擊',
      '堅韌吼叫'
    ],
    gearFocus: {
      weapon: '雙手錘或單手錘+盾',
      armor: '重甲裝備，注重生命和護甲值',
      accessories: [
        '生命戒指',
        '抗性護身符',
        '力量腰帶'
      ]
    },
    leveling: [
      '優先提升生命值',
      '選擇力量和防禦天賦',
      '裝備盡量選擇紅色插槽'
    ]
  },
  {
    class: '傭兵',
    englishName: 'Mercenary',
    buildName: '元素十字弓流',
    difficulty: 'Easy',
    playstyle: '遠程攻擊型，使用元素彈藥進行多重打擊',
    advantages: [
      '安全的攻擊距離',
      '元素傷害多樣性',
      '清圖速度快',
      '容易上手'
    ],
    keySkills: [
      '多重射擊',
      '元素箭矢',
      '迴避翻滾'
    ],
    gearFocus: {
      weapon: '高物理傷害的十字弓',
      armor: '中型護甲，平衡生命和迴避',
      accessories: [
        '攻擊速度戒指',
        '元素傷害護身符',
        '敏捷腰帶'
      ]
    },
    leveling: [
      '平衡生命值和傷害',
      '優先提升敏捷和力量',
      '注意元素抗性的配置'
    ]
  },
  {
    class: '遊俠',
    englishName: 'Ranger',
    buildName: '多重箭矢流',
    difficulty: 'Easy',
    playstyle: '遠程速攻型，使用弓箭進行快速且精準的攻擊',
    advantages: [
      '高移動速度',
      '攻擊速度快',
      '容易找到裝備',
      '適合單體和群體'
    ],
    keySkills: [
      '多重箭矢',
      '閃電箭',
      '迅捷步伐'
    ],
    gearFocus: {
      weapon: '高攻速的弓',
      armor: '輕甲裝備，注重迴避',
      accessories: [
        '暴擊戒指',
        '命中護身符',
        '敏捷腰帶'
      ]
    },
    leveling: [
      '優先提升攻擊速度',
      '選擇敏捷和暴擊天賦',
      '保持高移動速度'
    ]
  },
  {
    class: '武僧',
    englishName: 'Monk',
    buildName: '連擊武術流',
    difficulty: 'Medium',
    playstyle: '近戰連擊型，結合武術和法術進行快速連擊',
    advantages: [
      '攻擊速度快',
      '機動性強',
      '技能組合豐富',
      '適合進階玩家'
    ],
    keySkills: [
      '連環打擊',
      '真氣衝擊',
      '迴風掌'
    ],
    gearFocus: {
      weapon: '細杖或空手',
      armor: '混合護甲，平衡防禦',
      accessories: [
        '攻擊速度戒指',
        '法術傷害護身符',
        '敏捷和智慧腰帶'
      ]
    },
    leveling: [
      '平衡攻擊和法術傷害',
      '提升敏捷和智慧',
      '注重技能連攜'
    ]
  },
  {
    class: '女巫',
    englishName: 'Witch',
    buildName: '死靈召喚流',
    difficulty: 'Easy',
    playstyle: '召喚型，專注於召喚不死生物進行戰鬥',
    advantages: [
      '安全的戰鬥方式',
      '召喚物承擔傷害',
      '裝備需求不高',
      '適合新手'
    ],
    keySkills: [
      '召喚骷髏',
      '召喚殭屍',
      '骨甲術'
    ],
    gearFocus: {
      weapon: '法杖或權杖',
      armor: '能量護盾裝備',
      accessories: [
        '召喚物生命戒指',
        '法力回復護身符',
        '智慧腰帶'
      ]
    },
    leveling: [
      '優先提升召喚物數量',
      '選擇召喚和防禦天賦',
      '保持法力充足'
    ]
  },
  {
    class: '女術士',
    englishName: 'Sorceress',
    buildName: '元素連鎖流',
    difficulty: 'Medium',
    playstyle: '法術型，使用元素法術進行範圍傷害',
    advantages: [
      '高範圍傷害',
      '元素效果豐富',
      '清圖效率高',
      '適合法師愛好者'
    ],
    keySkills: [
      '火球術',
      '冰凍脈衝',
      '閃電鏈'
    ],
    gearFocus: {
      weapon: '長杖',
      armor: '能量護盾裝備',
      accessories: [
        '法術傷害戒指',
        '元素穿透護身符',
        '智慧腰帶'
      ]
    },
    leveling: [
      '優先提升法術傷害',
      '選擇元素和暴擊天賦',
      '注意法力管理'
    ]
  }
];

export const buildingTips = {
  general: [
    '新手玩家建議先選擇難度為 Easy 的配裝',
    '優先提升生存屬性，再考慮傷害提升',
    '確保元素抗性達到上限',
    '準備足夠的藥劑',
    '選擇適合自己操作習慣的技能'
  ],
  gearing: [
    '優先選擇有生命和抗性的裝備',
    '確保武器屬性符合主要技能需求',
    '配戴適合自己等級的裝備',
    '注意裝備的插槽顏色和連結'
  ],
  leveling: [
    '跟隨主線任務推進',
    '定期更新裝備',
    '保持等級接近當前區域',
    '合理分配天賦點數'
  ]
};
