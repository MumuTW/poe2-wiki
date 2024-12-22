interface NPC {
  name: string;
  location: string;
  description: string;
  services: string[];
}

interface Workbench {
  name: string;
  description: string;
  functions: string[];
}

export const npcs: NPC[] = [
  {
    name: "艾瓦",
    location: "高地神塔庇護所（過去）",
    description: "賭博與交易NPC",
    services: [
      "提供賭博服務",
      "可以進行物品交易"
    ]
  }
];

export const workbenches: Workbench[] = [
  {
    name: "重鑄台",
    description: "用於重新鑄造物品，改變物品的詞綴或數值。",
    functions: [
      "3換1升級地圖鑰匙",
      "重鑄物品詞綴",
      "改變物品數值"
    ]
  }
];

export const npcSystemDescription = {
  description: "城鎮中的NPC提供各種服務，包括交易、賭博、任務等。某些NPC需要通過特定任務解鎖。",
  notes: [
    "部分NPC會隨著劇情發展改變位置",
    "解鎖NPC可能需要完成支線任務"
  ]
};

export const workbenchSystemDescription = {
  description: "工作台提供各種物品製作與改造功能，是裝備升級的重要工具。",
  notes: [
    "工作台功能需要消耗特定通貨",
    "某些工作台功能需要通過任務解鎖"
  ]
};
