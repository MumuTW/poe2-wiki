interface Translation {
  english: string;
  chinese: string;
  category: string;
  notes?: string;
}

export const translations: Translation[] = [
  // Website
  { english: "PoE2DB", chinese: "流亡2編年史", category: "網站" },
  { english: "Stash Tab Sales", chinese: "倉庫頁特賣", category: "網站" },
  
  // Items
  { english: "All Gem", chinese: "全部寶石", category: "物品" },
  { english: "All Unique", chinese: "全部傳奇", category: "物品" },
  { english: "Skill Gems", chinese: "技能寶石", category: "物品" },
  { english: "Support Gems", chinese: "輔助寶石", category: "物品" },
  { english: "Spirit Gems", chinese: "精神寶石", category: "物品" },
  { english: "One Handed Weapons", chinese: "單手武器", category: "物品" },
  { english: "Claws", chinese: "爪", category: "物品" },
  { english: "Daggers", chinese: "匕首", category: "物品" },
  { english: "Wands", chinese: "法杖", category: "物品" },
  { english: "One Hand Swords", chinese: "單手劍", category: "物品" },
  { english: "One Hand Axes", chinese: "單手斧", category: "物品" },
  { english: "One Hand Maces", chinese: "單手錘", category: "物品" },
  { english: "Sceptres", chinese: "權杖", category: "物品" },
  { english: "Spears", chinese: "長矛", category: "物品" },
  { english: "Flails", chinese: "連枷", category: "物品" },

  // Quest System
  { english: "Quest", chinese: "任務", category: "任務系統" },
  { english: "Reward", chinese: "獎勵", category: "任務系統" },
  { english: "Monster", chinese: "怪物", category: "任務系統" },
  { english: "Passive Point", chinese: "天賦點", category: "任務系統" },
  { english: "Keystone", chinese: "天賦樹", category: "任務系統" },
  { english: "Notable", chinese: "可選天賦", category: "任務系統" },
  { english: "Passive Skill Tree", chinese: "天賦樹", category: "任務系統" },
  { english: "Part 1", chinese: "第 1 部", category: "任務系統" },
  { english: "Act 1", chinese: "第 1 章", category: "任務系統" },
  { english: "Act 2", chinese: "第 2 章", category: "任務系統" },
  { english: "Act 3", chinese: "第 3 章", category: "任務系統" },
  { english: "Act 7", chinese: "第 7 章", category: "任務系統" },
  { english: "Act 8", chinese: "第 8 章", category: "任務系統" },
  { english: "Act 9", chinese: "第 9 章", category: "任務系統" },
  { english: "Act 10", chinese: "第 10 章", category: "任務系統" },

  // Classes
  { english: "Warrior", chinese: "戰士", category: "職業" },
  { english: "Mercenary", chinese: "傭兵", category: "職業" },
  { english: "Ranger", chinese: "遊俠", category: "職業" },
  { english: "Monk", chinese: "武僧", category: "職業" },
  { english: "Witch", chinese: "女巫", category: "職業" },
  { english: "Sorceress", chinese: "女術士", category: "職業" },
  
  // Ascendancies
  { english: "Heavy Slams", chinese: "重擊專精", category: "昇華", notes: "戰士昇華" },
  { english: "Stuns and Knockback", chinese: "控制專精", category: "昇華", notes: "戰士昇華" },
  { english: "Defences", chinese: "防禦專精", category: "昇華", notes: "戰士昇華" },
  
  { english: "Ammunition", chinese: "彈藥專精", category: "昇華", notes: "傭兵昇華" },
  { english: "Elemental Rounds", chinese: "元素彈藥", category: "昇華", notes: "傭兵昇華" },
  { english: "Versatile Range", chinese: "靈活射程", category: "昇華", notes: "傭兵昇華" },
  
  { english: "Long Range", chinese: "遠程專精", category: "昇華", notes: "遊俠昇華" },
  { english: "Agility", chinese: "敏捷專精", category: "昇華", notes: "遊俠昇華" },
  { english: "Crowd Control", chinese: "群體控制", category: "昇華", notes: "遊俠昇華" },
  
  { english: "Quick Strikes", chinese: "快速打擊", category: "昇華", notes: "武僧昇華" },
  { english: "Mobility", chinese: "靈活移動", category: "昇華", notes: "武僧昇華" },
  { english: "Combos", chinese: "連擊系統", category: "昇華", notes: "武僧昇華" },
  
  { english: "Minions", chinese: "死靈召喚", category: "昇華", notes: "女巫昇華" },
  { english: "Chaos Magic", chinese: "混沌魔法", category: "昇華", notes: "女巫昇華" },
  { english: "Osteomancy", chinese: "骨系魔法", category: "昇華", notes: "女巫昇華" },
  
  { english: "Fire Spells", chinese: "火焰法術", category: "昇華", notes: "女術士昇華" },
  { english: "Cold Spells", chinese: "寒冰法術", category: "昇華", notes: "女術士昇華" },
  { english: "Lightning Spells", chinese: "閃電法術", category: "昇華", notes: "女術士昇華" },
  
  // Common Game Terms
  { english: "Skills", chinese: "技能", category: "遊戲術語" },
  { english: "Crafting", chinese: "製作", category: "遊戲術語" },
  { english: "Level", chinese: "等級", category: "遊戲術語" },
  { english: "Experience", chinese: "經驗值", category: "遊戲術語" },
  { english: "Inventory", chinese: "背包", category: "遊戲術語" },
  { english: "Equipment", chinese: "裝備", category: "遊戲術語" },
  { english: "Quest", chinese: "任務", category: "遊戲術語" },
  { english: "Trial", chinese: "試煉", category: "遊戲術語" },
  { english: "Ascendancy", chinese: "昇華", category: "遊戲術語" },
  { english: "Passive Tree", chinese: "天賦樹", category: "遊戲術語" },
  
  // Stats
  { english: "Strength", chinese: "力量", category: "屬性" },
  { english: "Dexterity", chinese: "敏捷", category: "屬性" },
  { english: "Intelligence", chinese: "智慧", category: "屬性" },
  { english: "Life", chinese: "生命", category: "屬性" },
  { english: "Mana", chinese: "魔力", category: "屬性" },
  { english: "Energy Shield", chinese: "能量護盾", category: "屬性" },
  { english: "Armour", chinese: "護甲", category: "屬性" },
  { english: "Evasion", chinese: "閃避", category: "屬性" },
  
  // Combat Terms
  { english: "Physical Damage", chinese: "物理傷害", category: "戰鬥" },
  { english: "Fire Damage", chinese: "火焰傷害", category: "戰鬥" },
  { english: "Cold Damage", chinese: "冰冷傷害", category: "戰鬥" },
  { english: "Lightning Damage", chinese: "閃電傷害", category: "戰鬥" },
  { english: "Chaos Damage", chinese: "混沌傷害", category: "戰鬥" },
  { english: "Critical Strike", chinese: "暴擊", category: "戰鬥" },
  { english: "Block", chinese: "格擋", category: "戰鬥" },
  { english: "Dodge", chinese: "閃避", category: "戰鬥" },
  
  // Item Quality
  { english: "Normal", chinese: "普通", category: "物品品質" },
  { english: "Magic", chinese: "魔法", category: "物品品質" },
  { english: "Rare", chinese: "稀有", category: "物品品質" },
  { english: "Unique", chinese: "傳奇", category: "物品品質" },
  
  // 輿圖系統
  { english: "Atlas", chinese: "輿圖", category: "輿圖系統" },
  { english: "Map Key", chinese: "地圖鑰匙", category: "輿圖系統" },
  { english: "Waystone", chinese: "威石", category: "輿圖系統" },
  { english: "Breach", chinese: "裂痕", category: "輿圖系統" },
  { english: "Ritual", chinese: "祭祀", category: "輿圖系統" },
  { english: "Delirium", chinese: "譫妄", category: "輿圖系統" },
  { english: "Expedition", chinese: "探險", category: "輿圖系統" },
  { english: "Precursor's Tower", chinese: "先驅者高塔", category: "輿圖系統" },
  { english: "Tablet", chinese: "碑牌", category: "輿圖系統" },
  { english: "Pinnacle Boss", chinese: "巔峰頭目", category: "輿圖系統" },
  { english: "Precursor's Vessel", chinese: "先行者之器", category: "輿圖系統" },
  { english: "Strongbox", chinese: "保險箱", category: "輿圖系統" },
  { english: "Essence", chinese: "精髓", category: "輿圖系統" },
  { english: "Corruption", chinese: "腐化", category: "輿圖系統" },
  { english: "Atlas Passive", chinese: "輿圖天賦", category: "輿圖系統" },
  { english: "Breach Ring", chinese: "裂痕戒指", category: "輿圖系統" },
  { english: "Catalyst", chinese: "催化劑", category: "輿圖系統" },
  { english: "Tribute", chinese: "貢品", category: "輿圖系統" },
  { english: "Harbinger", chinese: "預兆", category: "輿圖系統" },
  { english: "Distilled Emotion", chinese: "精煉情緒", category: "輿圖系統" },
  { english: "Logbook", chinese: "探險日誌", category: "輿圖系統" },
  { english: "Sun Artifact", chinese: "豔陽文物", category: "輿圖系統" },
  { english: "Order Artifact", chinese: "秩序文物", category: "輿圖系統" },
  { english: "Dark Sickle", chinese: "黑暗血鐮", category: "輿圖系統" },
  { english: "Broken Circle", chinese: "破碎之環", category: "輿圖系統" },
  { english: "Crisis Fragment", chinese: "危機碎片", category: "輿圖系統" },
  { english: "Burning Monument", chinese: "燃燒豐碑", category: "輿圖系統" }
];

export const currencyTranslations = [
  { english: "Blacksmith's Whetstone", chinese: "磨刀石" },
  { english: "Arcanist's Etcher", chinese: "奧術蝕刻師" },
  { english: "Sacred Water", chinese: "聖水" },
  { english: "Orb of Augmentation", chinese: "增幅石" },
  { english: "Vaal Orb", chinese: "瓦爾寶珠" },
  { english: "Scroll of Wisdom", chinese: "知識卷軸" },
  { english: "Djinn Barya", chinese: "巴里亞" },
  { english: "Inscribed Ultimatum", chinese: "銘刻石板" },
  { english: "Cowardly Fate", chinese: "懦弱命運" },
  { english: "Deadly Fate", chinese: "致命命運" },
  { english: "Victorious Fate", chinese: "勝利命運" }
];

export interface GameTerm {
  term: string;
  translation: string;
  description?: string;
}

export interface CurrencyTerm extends GameTerm {
  value: number; // 以崇高石(Exalted Orb)為基準的價值
  usage: string[];
}

export const currencyTerms: CurrencyTerm[] = [
  {
    term: "Transmutation Orb",
    translation: "增幅石",
    description: "將普通物品變為魔法物品",
    value: 0.001,
    usage: [
      "用於將白色(普通)裝備升級為藍色(魔法)裝備",
      "常用於製作初期裝備"
    ]
  },
  {
    term: "Alchemy Orb",
    translation: "點金石",
    description: "將普通物品變為稀有物品",
    value: 0.01,
    usage: [
      "用於將白色裝備直接升級為黃色(稀有)裝備",
      "適合用在有好詞綴的白色裝備上"
    ]
  },
  {
    term: "Regal Orb",
    translation: "富豪石",
    description: "將魔法物品升級為稀有物品",
    value: 0.05,
    usage: [
      "用於將藍色裝備升級為黃色裝備",
      "常用於製作高階裝備"
    ]
  },
  {
    term: "Exalted Orb",
    translation: "崇高石",
    description: "為稀有物品添加新的詞綴",
    value: 1,
    usage: [
      "遊戲中主要的高價值通貨",
      "用於為黃色裝備添加新詞綴",
      "常用作交易貨幣單位(1e = 1崇高石)"
    ]
  }
];

export interface EquipmentGuide {
  category: string;
  title: string;
  description: string;
  tips: string[];
  methods: {
    name: string;
    description: string;
    steps: string[];
    materials: string[];
    notes: string[];
  }[];
}

export const equipmentGuides: EquipmentGuide[] = [
  {
    category: "武器",
    title: "新手武器提升指南",
    description: "武器是提升角色戰力的第一優先選擇。本指南將介紹幾種有效的武器獲取和升級方式。",
    tips: [
      "建議每10級更換一次武器",
      "優先關注武器的基礎傷害和攻擊速度",
      "注意武器是否符合當前技能需求"
    ],
    methods: [
      {
        name: "商人購買法",
        description: "通過NPC商人直接購買裝備是最直接的方式",
        steps: [
          "每完成一個任務後回到城鎮",
          "檢查裝備商人的商品列表",
          "關注黃色(稀有)裝備"
        ],
        materials: [],
        notes: [
          "第三章的「叢林遺跡」和「感染荒地」營地中的商人也可能出售好裝備",
          "商人商品會定期刷新"
        ]
      },
      {
        name: "點金升級法",
        description: "使用點金石升級優質白裝",
        steps: [
          "尋找帶有優質詞綴的白色裝備(如+1技能等級)",
          "使用點金石升級為黃色裝備",
          "可選擇使用崇高石繼續升級"
        ],
        materials: [
          "點金石",
          "崇高石(可選)"
        ],
        notes: [
          "優先選擇已有技能加成的白裝",
          "有裝備插槽更好"
        ]
      },
      {
        name: "藍裝進階法",
        description: "通過增幅石和富豪石逐步升級",
        steps: [
          "找到優質藍色裝備",
          "使用增幅石獲得第二條詞綴",
          "使用富豪石升級為黃色裝備",
          "可使用崇高石繼續升級"
        ],
        materials: [
          "增幅石",
          "富豪石",
          "崇高石(可選)"
        ],
        notes: [
          "適合自帶高品質詞綴的藍裝",
          "成本較高，建議用於優質基底"
        ]
      }
    ]
  }
];
