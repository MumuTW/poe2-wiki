export interface AscendancyTrial {
  id: string;
  name: string;
  description: string;
  act: number;
  location: string;
  requirements: string[];
}

export interface AscendancyGuide {
  description: string;
  howToUnlock: {
    description: string;
    trials: AscendancyTrial[];
  };
  benefits: string[];
  tips: string[];
}

export const ascendancyGuide: AscendancyGuide = {
  description: "昇華系統是一個強大的角色特殊化機制",
  howToUnlock: {
    description: "完成試煉迷宮來解鎖昇華點數",
    trials: [
      {
        id: "trial1",
        name: "初始試煉",
        description: "通過第一個試煉迷宮",
        act: 3,
        location: "監獄",
        requirements: ["角色等級 > 20"]
      }
    ]
  },
  benefits: [
    "獲得強大的昇華天賦",
    "解鎖特殊的遊戲機制",
    "增強角色的獨特性"
  ],
  tips: [
    "優先完成所有試煉",
    "仔細規劃昇華路線",
    "配合主天賦樹做選擇"
  ]
};
