export interface AscendancyGuide {
  title: string;
  description: string;
  earlyAccessNote: string;
  howToUnlock: {
    title: string;
    description: string;
    trials: {
      name: string;
      act: number;
      description: string;
      available: boolean;
    }[];
  };
  unlockProgress: {
    stage: number;
    points: number[];
    requirement: string;
    description: string;
  }[];
}

export const ascendancyGuide: AscendancyGuide = {
  title: '昇華系統指南',
  description: '完成昇華試煉可以讓你選擇一個昇華職業並獲得額外的昇華天賦點數。在遊戲過程中有多個試煉隱藏在各處，你可以選擇在其中獲得昇華職業和額外的天賦點數。昇華是強大的、定義build的子職業，它會給予你一個額外的天賦樹來分配昇華天賦點數。在流亡黯道 2 中，你的build由你的角色職業和昇華職業的組合來定義。每個職業（EA中為6個）都有3個昇華選擇（EA中為2個）。',
  
  earlyAccessNote: '流亡黯道 2 目前處於搶先體驗階段，這意味著包括昇華試煉在內的系統都在快速開發中。建議關注本頁面以獲取最新更新。',
  
  howToUnlock: {
    title: '如何獲得昇華',
    description: '目前有3個昇華試煉，你可以通過任意一個試煉來解鎖昇華職業。要完成昇華，你必須找到任務鑰匙道具，前往試煉入口，然後通過挑戰並擊敗最終boss。首次完成任意昇華試煉將解鎖你的昇華職業並獲得2點昇華天賦點數。',
    trials: [
      {
        name: '塞克瑪斯的試煉',
        act: 2,
        description: '一個類Roguelike的地下城，包含各種挑戰房間和boss。每個房間都有不同的挑戰，如陷阱、敵人波次或限時挑戰。',
        available: true
      },
      {
        name: '混沌試煉',
        act: 3,
        description: '在瓦爾叢林中的混沌神殿中進行。你需要克服一系列連續的挑戰，然後擊敗隨機boss。',
        available: true
      },
      {
        name: '未知試煉',
        act: 4,
        description: '目前尚未實裝，將在第4章加入遊戲。',
        available: false
      }
    ]
  },
  
  unlockProgress: [
    {
      stage: 1,
      points: [1, 2],
      requirement: '完成第2章的塞克瑪斯試煉（通過巴爾巴拉的巴里亞任務）',
      description: '解鎖昇華職業並獲得首兩點昇華點數'
    },
    {
      stage: 2,
      points: [3, 4],
      requirement: '完成第3章的混沌試煉（通過奇美拉銘刻石板任務）',
      description: '獲得第三和第四點昇華點數'
    },
    {
      stage: 3,
      points: [5, 6],
      requirement: '完成60+等級的塞克瑪斯試煉（3層）或75+等級的混沌試煉（10輪）',
      description: '獲得第五和第六點昇華點數'
    },
    {
      stage: 4,
      points: [7, 8],
      requirement: '完成75+等級的塞克瑪斯試煉（4層）並擊敗終極boss，或完成75+等級的混沌試煉（10輪）並使用三個命運碎片開啟終極boss',
      description: '獲得最後兩點昇華點數'
    }
  ]
};

// 特殊提示
export const specialNotes = {
  skipAct2Trial: '雖然可以跳過第2章的塞克瑪斯試煉，直到第3章才在混沌試煉中獲得首個昇華點數，但這會讓你在整個第2章都沒有昇華能力，不建議這樣做。',
  
  endgameKeys: {
    level60: '60+等級的巴里亞可以在第3章殘酷難度（第6章）結束後獲得，或在任何終局威石（第1階以上）地圖中獲得。',
    level75: '75+等級的巴里亞和銘刻石板可以在終局威石（第8階以上）地圖或類似等級的活動中獲得。你也可以通過與其他玩家交易獲得這些終局試煉鑰匙。'
  }
};
