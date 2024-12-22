export interface AtlasTreeData {
  introduction: {
    description: string;
    earlyAccessNote: string;
  };
  progression: {
    title: string;
    description: string;
    tips: string[];
  };
  waystoneSystem: {
    title: string;
    description: string;
    sustain: {
      early: string;
      advanced: string;
      tips: string[];
    };
    bossStrategy: {
      description: string;
      tips: string[];
    };
  };
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
  endgameActivities: {
    name: string;
    difficulty: '低' | '中' | '高' | '極高';
    rewards: '低' | '中' | '高' | '極高';
    description: string;
  }[];
}

export const atlasTreeData: AtlasTreeData = {
  introduction: {
    description: '輿圖天賦樹是流亡黯道2終局遊戲的重要組成部分，它能提供更多戰利品和威石獎勵。',
    earlyAccessNote: '目前遊戲處於搶先體驗階段，輿圖系統仍在持續開發中。我們會及時更新本指南以反映最新變化。'
  },

  progression: {
    title: '輿圖任務進程',
    description: '到達終局遊戲後，首要目標是推進你的輿圖任務（災變的覺醒）。完成任務可以獲得輿圖天賦點數，用於增加地圖掉落和威石獲取。',
    tips: [
      '任務追蹤器會顯示需要運行的地圖等級',
      '如果你在硬核模式或角色較弱，可以選擇在藏身處地圖中使用高階威石',
      '藏身處地圖相對安全，且稀有怪物密集，適合快速推進輿圖任務'
    ]
  },

  waystoneSystem: {
    title: '威石系統',
    description: '威石是開啟和提升地圖等級的關鍵道具',
    sustain: {
      early: '多莉亞尼會出售低等級威石，所以你永遠不會缺少1階威石',
      advanced: '高階威石的持續獲取主要依賴首領地圖。首領幾乎總是會掉落相同或更高等級的威石',
      tips: [
        '6階以上的威石需要在天賦樹中選擇「威石發現時有X%機率提升一階」的天賦',
        '可以在重鑄台將3個相同等級的威石合成為高一階的威石',
        '使用低階威石在首領地圖間移動，保存高階威石用於首領戰'
      ]
    },
    bossStrategy: {
      description: '首領地圖是獲取高階威石的最佳來源',
      tips: [
        '濕地和林地地圖各有2個首領，可以存到15階威石時再使用',
        '非首領地圖只需完成目標（通常是擊殺所有稀有怪物）即可離開'
      ]
    }
  },

  towerSystem: {
    title: '塔樓系統',
    description: '塔樓本身不提供太多戰利品，但是可以放置先驅石板',
    tabletUsage: '不要害怕在塔樓使用石板。多個石板的詞綴效果可以疊加，使用得越多獲得的石板也越多',
    tips: [
      '解鎖塔樓後立即使用石板，周圍地圖會立即獲得石板詞綴加成',
      '同一張地圖不能被多次輻照，但物品數量和祕寶箱機率可以疊加',
      '除非你在進行進階策略，否則不要延遲使用石板'
    ]
  },

  survival: {
    title: '生存指南',
    description: '11階以上的地圖極其危險。死亡會失去使用的威石，且地圖上的圖標（包括首領）會消失',
    requirements: [
      {
        name: '元素抗性',
        description: '火焰、冰冷、閃電抗性必須達到75%（或以上）'
      },
      {
        name: '混沌抗性',
        description: '6階威石需要40-50%混沌抗性，11階以上需要接近75%'
      }
    ],
    tips: [
      '先完成地圖目標，再處理終局活動（裂隙、儀式等）',
      '終局活動不是完成地圖目標的必要條件',
      '混沌傷害對能量護盾造成雙倍傷害，務必提高混沌抗性'
    ]
  },

  endgameActivities: [
    {
      name: '裂隙',
      difficulty: '極高',
      rewards: '極高',
      description: '極其危險但回報豐厚。適合擅長清理大量怪物的配裝，如果無法快速清理會被輕易壓制'
    },
    {
      name: '譫妄',
      difficulty: '中',
      rewards: '低',
      description: '難度可控，離譫妄之鏡越遠怪物越強，但可隨時取消。獎勵主要是蒸餾精華和模擬碎片'
    },
    {
      name: '遠征',
      difficulty: '低',
      rewards: '中',
      description: '難度可自行控制，產生適量怪物並掉落優質物品。特別適合自製裝備聯盟，因為遠征通貨可用於製作裝備'
    },
    {
      name: '儀式',
      difficulty: '高',
      rewards: '高',
      description: '類似裂隙，容易被怪物淹沒。可能獲得優質稀有物品、通貨，運氣好時可得到價值不菲的「國王召見」'
    }
  ]
};
