export {
  campaignData,
  campaignOverview,
  type CampaignOverview,
  type Act,
  type SubArea,
  type Quest,
  type BossFight,
  type ImportantItem,
  type SecretLocation,
  type QuestReward,
  type BossMechanic,
  type BossPhase,
  type BossReward,
  type BuildRecommendation,
  type CampaignData
} from './campaignData';

export interface AtlasBasicsData {
  title: string;
  description: string;
  basicRules: {
    rules: string[];
  };
  mapKeys: {
    description: string[];
  };
  miniMechanics: {
    name: string;
    description: string;
    details?: string[];
  }[];
  atlasTalents: {
    categories: {
      name: string;
      points: string;
      requirements: string[];
    }[];
  };
  majorMechanics: {
    name: string;
    description: string;
    rewards: {
      title: string;
      items: string[];
    };
    boss?: {
      access: string;
      rewards: string;
    };
  }[];
  endgameBosses: {
    progression: string[];
    difficulty: {
      level: string;
      description: string;
    }[];
  };
  tips: string[];
}

export const atlasBasicsData: AtlasBasicsData = {
  title: "輿圖系統指南",
  description: "輿圖系統是遊戲的終局內容，提供豐富的探索和挑戰機會。",
  basicRules: {
    rules: [
      "輿圖系統在完成主線劇情後解鎖",
      "每張輿圖都有獨特的地形和怪物組合",
      "輿圖等級會影響掉落物品的品質",
      "可以通過天賦點數來增強輿圖收益"
    ]
  },
  mapKeys: {
    description: [
      "鑰匙可以從特定怪物和寶箱中獲得",
      "不同等級的鑰匙開啟不同難度的地圖",
      "可以在交易所與其他玩家交換鑰匙",
      "某些特殊鑰匙可以開啟挑戰首領的地圖"
    ]
  },
  miniMechanics: [
    {
      name: "怪物強化",
      description: "通過天賦點數增加怪物難度和獎勵",
      details: [
        "增加怪物生命值",
        "提高怪物傷害",
        "增加精英怪物出現率"
      ]
    },
    {
      name: "寶藏系統",
      description: "特殊寶箱和隱藏獎勵",
      details: [
        "探索地圖尋找寶藏",
        "完成特定條件解鎖寶箱",
        "獲得稀有物品和貨幣"
      ]
    }
  ],
  atlasTalents: {
    categories: [
      {
        name: "探索增強",
        points: "最多可分配 10 點",
        requirements: [
          "增加地圖掉落數量",
          "提高稀有物品出現率",
          "增加經驗值獲取"
        ]
      },
      {
        name: "戰鬥增強",
        points: "最多可分配 15 點",
        requirements: [
          "增加怪物數量",
          "提高精英怪物出現率",
          "增加首領掉落"
        ]
      }
    ]
  },
  majorMechanics: [
    {
      name: "深淵挑戰",
      description: "探索危險的深淵地圖，面對強大的敵人",
      rewards: {
        title: "深淵獎勵",
        items: [
          "深淵專屬裝備",
          "大量通貨",
          "稀有寶石"
        ]
      },
      boss: {
        access: "需要收集深淵碎片來開啟",
        rewards: "擊敗首領可獲得特殊獎勵"
      }
    },
    {
      name: "虛空探索",
      description: "在不穩定的虛空地圖中尋找珍貴的資源",
      rewards: {
        title: "虛空獎勵",
        items: [
          "虛空精華",
          "特殊改造物",
          "虛空碎片"
        ]
      }
    }
  ],
  endgameBosses: {
    progression: [
      "完成主線任務解鎖基礎輿圖",
      "收集足夠的地圖碎片",
      "挑戰守門者解鎖高級輿圖",
      "收集首領碎片開啟終局挑戰"
    ],
    difficulty: [
      {
        level: "普通",
        description: "適合初次接觸輿圖系統的玩家"
      },
      {
        level: "進階",
        description: "需要優質裝備和熟練的技術"
      },
      {
        level: "專家",
        description: "極具挑戰性，建議組隊挑戰"
      }
    ]
  },
  tips: []
};

export interface AtlasTreeData {
  title: string;
  description: string;
  towerSystem: {
    title: string;
    description: string;
    tabletUsage: string;
    tips: string[];
  };
  survival: {
    title: string;
    description: string;
    requirements: {
      name: string;
      description: string;
    }[];
    tips: string[];
  };
}

export const atlasTreeData: AtlasTreeData = {
  title: "輿圖天賦樹",
  description: "輿圖天賦樹是一個強大的系統，讓你自訂終局遊戲的體驗。",
  towerSystem: {
    title: "塔樓系統",
    description: "塔樓系統是輿圖中的一個重要機制，可以增強你的角色能力。",
    tabletUsage: "使用石板來解鎖和升級塔樓效果。",
    tips: [
      "優先解鎖對你的構建有幫助的塔樓",
      "注意塔樓之間的協同效果",
      "定期檢查新解鎖的塔樓選項"
    ]
  },
  survival: {
    title: "生存指南",
    description: "在輿圖中生存需要合理的配置和策略。",
    requirements: [
      {
        name: "生命值",
        description: "確保有足夠的生命值來承受傷害"
      },
      {
        name: "抗性",
        description: "維持元素抗性和混沌抗性上限"
      }
    ],
    tips: [
      "時刻保持警惕，特別是在高階輿圖中",
      "準備多個防禦層級",
      "根據地圖詞綴調整策略"
    ]
  }
};
