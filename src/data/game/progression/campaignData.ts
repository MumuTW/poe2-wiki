export interface SecretLocation {
  name: string;
  description: string;
  requirements?: string[];
  rewards: string[];
  tips: string[];
}

export interface SubArea {
  name: string;
  description: string;
  level: number;
  monsters: string[];
  secrets?: SecretLocation[];
  tips: string[];
}

export interface QuestReward {
  name: string;
  type: '技能寶石' | '裝備' | '藥劑' | '通貨' | '其他';
  description: string;
}

export interface Quest {
  name: string;
  description: string;
  objectives: string[];
  rewards: QuestReward[];
  tips: string[];
}

export interface BossMechanic {
  name: string;
  description: string;
  damage_type: string;
  counter_strategy: string;
}

export interface BossPhase {
  phase: number;
  description: string;
  mechanics: BossMechanic[];
  tips: string[];
}

export interface BossReward {
  item: string;
  description: string;
}

export interface BossFight {
  name: string;
  location: string;
  level: number;
  difficulty: '簡單' | '中等' | '困難';
  phases: BossPhase[];
  rewards: BossReward[];
  preparation: string[];
}

export interface ImportantItem {
  name: string;
  location: string;
  usage: string;
}

export interface Act {
  number: number;
  title: string;
  summary: string;
  recommended_level: {
    start: number;
    end: number;
  };
  areas: SubArea[];
  main_quests: Quest[];
  side_quests: Quest[];
  bosses: BossFight[];
  important_items: ImportantItem[];
  tips: string[];
}

export interface BuildRecommendation {
  class_name: string;
  build_name: string;
  playstyle: string;
  main_skills: string[];
  advantages: string[];
  disadvantages: string[];
  leveling_tips: string[];
}

export interface CampaignOverview {
  total_acts: number;
  current_acts: number;
  setting: string;
  estimated_time: string;
  recommended_builds: BuildRecommendation[];
}

export const campaignOverview: CampaignOverview = {
  total_acts: 6,
  current_acts: 3,
  setting: "流放之路2的故事發生在第一代的20年後",
  estimated_time: "早期測試版本約需25小時完成3章節內容",
  recommended_builds: [
    {
      class_name: "女巫(Witch)",
      build_name: "生命堆疊召喚師(Life Stacker Infernalist)",
      playstyle: "召喚火焰生物輔助",
      main_skills: [
        "火焰召喚物",
        "生命光環",
        "召喚物增益"
      ],
      advantages: [
        "遊戲體驗平順",
        "容錯率高",
        "裝備需求低",
        "適合新手"
      ],
      disadvantages: [
        "前期傷害較低",
        "需要適應召喚物AI",
        "部分技能寶石較難取得"
      ],
      leveling_tips: [
        "優先提升生命值",
        "保持召喚物增益技能持續",
        "使用火焰增傷輔助寶石"
      ]
    },
    {
      class_name: "武僧(Monk)",
      build_name: "連擊流(Flow State)",
      playstyle: "快速連擊近戰",
      main_skills: [
        "連擊",
        "衝刺打擊",
        "迴旋踢"
      ],
      advantages: [
        "操作流暢",
        "移動速度快",
        "單體傷害高"
      ],
      disadvantages: [
        "需要近身戰鬥",
        "防禦較脆弱",
        "技能連段要求較高"
      ],
      leveling_tips: [
        "注意走位和閃避",
        "保持連擊層數",
        "優先提升攻速"
      ]
    },
    {
      class_name: "遊俠(Ranger)",
      build_name: "箭雨射手(Rain of Arrows)",
      playstyle: "範圍弓箭攻擊",
      main_skills: [
        "箭雨",
        "閃避射擊",
        "標記射擊"
      ],
      advantages: [
        "安全距離遠",
        "清怪速度快",
        "裝備容易取得"
      ],
      disadvantages: [
        "生存能力較低",
        "需要良好走位",
        "對裝備品質要求高"
      ],
      leveling_tips: [
        "保持安全距離",
        "優先提升弓箭傷害",
        "注意閃避技能CD"
      ]
    },
    {
      class_name: "戰士(Warrior)",
      build_name: "震地衝擊(Ground Slam)",
      playstyle: "重型武器範圍攻擊",
      main_skills: [
        "震地衝擊",
        "戰吼",
        "跳躍猛擊"
      ],
      advantages: [
        "生存能力強",
        "裝備需求低",
        "技能操作簡單"
      ],
      disadvantages: [
        "攻擊速度慢",
        "位移能力較差",
        "後期傷害瓶頸"
      ],
      leveling_tips: [
        "優先提升物理傷害",
        "保持戰吼增益",
        "注意武器更新"
      ]
    }
  ]
};

export type CampaignData = Act[];

export const campaignData: CampaignData = [
  {
    number: 1,
    title: "第一章：流放之路",
    summary: "在這個章節中，玩家將開始他們的冒險之旅。從最初的海灘開始，逐步探索這片陌生的土地。",
    recommended_level: {
      start: 1,
      end: 12
    },
    areas: [
      {
        name: "破碎海灘",
        description: "你的冒險從這裡開始。這是一片荒涼的海灘，到處都是船隻的殘骸。",
        level: 1,
        monsters: [
          "殭屍",
          "海盜",
          "螃蟹"
        ],
        tips: [
          "注意收集初始裝備",
          "盡量清理小怪獲得經驗"
        ]
      }
    ],
    main_quests: [
      {
        name: "求生之路",
        description: "在破碎海灘上尋找生存的方法，並找到通往第一個安全區域的路。",
        objectives: [
          "在海灘上收集基礎裝備",
          "擊敗第一個小頭目",
          "找到通往營地的路"
        ],
        rewards: [
          {
            name: "技能寶石",
            type: "技能寶石",
            description: "獲得你的第一個技能寶石"
          }
        ],
        tips: [
          "優先使用撿到的裝備，不要太在意品質",
          "記得及時補充生命藥劑"
        ]
      }
    ],
    side_quests: [],
    bosses: [
      {
        name: "希爾洛克",
        location: "破碎海灘",
        level: 2,
        difficulty: "簡單",
        phases: [
          {
            phase: 1,
            description: "基礎戰鬥階段",
            mechanics: [
              {
                name: "重擊",
                description: "使用大棒進行重擊",
                damage_type: "物理",
                counter_strategy: "注意觀察動作前搖，提前躲避"
              }
            ],
            tips: [
              "保持距離",
              "注意回血"
            ]
          }
        ],
        rewards: [
          {
            item: "破損的護甲",
            description: "一件基礎防具"
          }
        ],
        preparation: [
          "準備足夠的生命藥劑",
          "確保裝備完整耐久度"
        ]
      }
    ],
    important_items: [
      {
        name: "生命藥劑",
        location: "破碎海灘",
        usage: "恢復生命值，戰鬥中必備"
      }
    ],
    tips: [
      "多收集裝備和藥劑",
      "不要著急推進，慢慢練級",
      "注意躲避敵人的攻擊"
    ]
  }
];
