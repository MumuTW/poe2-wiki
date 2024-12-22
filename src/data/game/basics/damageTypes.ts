export interface DamageType {
  name: string;
  description: string;
  baseProperties: string[];
  nonDamageAilments?: {
    name: string;
    description: string;
    notes: string[];
  }[];
  damageAilments?: {
    name: string;
    description: string;
    notes: string[];
  }[];
  damageBoosts?: {
    name: string;
    description: string;
    notes: string[];
  }[];
}

export const enemyResistanceIcons = {
  description: "敵方血條右下方的「火焰、冰冷、閃電、混沌、護甲」小圖示：",
  notes: [
    "金色代表高抗性、白色代表有抗性、紅色代表弱點。",
    "護甲呈現金色時，如不進行「護甲破壞」，物理傷害會很低。"
  ]
};

export const damageConversion = {
  description: "傷害轉換時，僅使用最終傷害進行計算。",
  example: "例如物理轉閃電，僅套用閃電傷害%，物理傷害不會參與計算。"
};

export const attackTypes = {
  name: "攻擊",
  description: "使用軍用武器或空手進行的攻擊皆為攻擊。",
  notes: [
    "軍用武器不包含「法杖、長杖、權杖」。",
    "不包含技能後續產生的「投射物」，例如「撼敵之掌」。",
    "「打擊」指定一名敵人。",
    "「重擊」指定一個範圍。"
  ]
};

export const projectileTypes = {
  name: "投射物",
  description: "投射物分為「攻擊」與「法術」，端看技能寶石的標籤為哪一種。"
};

export const spellTypes = {
  name: "法術",
  description: "法術並沒有限制武器種類皆可使用。",
  notes: [
    "法術傷害不受軍用武器「附加#至#OO傷害」影響。",
    "法術傷害不受手套、戒指「攻擊附加#至#OO傷害」影響。"
  ]
};

export const thornDamage = {
  name: "荊棘",
  description: "「荊棘」傷害有別於１代的反射傷害，屬於一個擁有實際數值的傷害類型。",
  notes: [
    "即便格擋傷害，仍然可以觸發荊棘傷害。",
    "可透過「身體護甲」、「盾牌」、「腰帶」獲得荊棘詞綴。",
    "可藉由天賦提升「荊棘傷害」、「荊棘暴擊機率」、「荊棘暴擊加成」。",
    "當玩家「被近戰擊中」時會對對方「造成荊棘傷害」。",
    "這與自己承受的傷害無關，但玩家仍須自己擁有生存手段。",
    "「殞皇之冠」可以使「投射物傷害」、「法術傷害」也能給對方施加「荊棘傷害」。",
    "「薔薇眼罩」可以增加「荊棘暴擊率」。"
  ]
};

export const damageTypes: DamageType[] = [
  {
    name: "物理傷害",
    description: "基礎物理傷害類型",
    baseProperties: [
      "會受到「護甲」減低承受傷害；傷害越大，減傷越少。"
    ],
    nonDamageAilments: [
      {
        name: "暈眩",
        description: "有機率造造成「暈眩」。",
        notes: [
          "「物理傷害」與「近戰傷害」各有50%更多機會造成暈眩。",
          "此兩機率採相乘計算。",
          "怪物暈眩玩家的機率不受近戰傷害加成。",
          "暈眩時會累計「沉重暈眩」值，計量條滿時進入沉重暈眩。",
          "「物理傷害」與「近戰傷害」各有50%更多沉重暈眩累計值。",
          "沉重暈眩時視為「禁錮」。",
          "玩家不會受到「沉重暈眩」。"
        ]
      }
    ],
    damageAilments: [
      {
        name: "流血",
        description: "需有機率造成流血異常狀態詞綴效果。",
        notes: [
          "對「生命」造成「擊中物理傷害」時才能造成流血。",
          "傷害穿透「能量護盾」，直接對「生命」造成傷害。",
          "傷害為「擊中物理傷害」的15%／每秒，持續5秒。",
          "目標移動後會「加劇」，額外造成100%流血傷害。",
          "「加劇」流血後，不會因為停下腳步而恢復。",
          "可藉由「感電」等負面狀態提升傷害。",
          "不受「護甲破壞」等增加「擊中」傷害的詞綴影響。"
        ]
      },
      {
        name: "中毒",
        description: "需有機率造成中毒異常狀態詞綴效果。",
        notes: [
          "傷害穿透「能量護盾」，直接對「生命」造成傷害。",
          "傷害為「擊中物理傷害」與「擊中混沌傷害」加總的20%／每秒。",
          "可藉由「感電」等負面狀態提升傷害。",
          "不受「護甲破壞」、「穿透抗性」等增加「擊中」傷害的詞綴影響。"
        ]
      }
    ],
    damageBoosts: [
      {
        name: "壓碎",
        description: "降低15%「物理傷害減免」。",
        notes: []
      },
      {
        name: "鎮壓",
        description: "使目標的「物理傷害減免」部分數值失效，無法超過總值。",
        notes: []
      },
      {
        name: "護甲破壞",
        description: "降低敵方的「護甲」，最低為0。",
        notes: [
          "對普通怪物有3倍效果、對魔法怪物有2倍效果。",
          "降低至0時，「完全破壞護甲」會持續12秒。"
        ]
      }
    ]
  },
  {
    name: "元素傷害",
    description: "元素傷害包含「火焰」、「冰冷」、「閃電」。",
    baseProperties: [
      "會受到「抗性」減免承受傷害百分比。"
    ],
    nonDamageAilments: [
      {
        name: "冰緩",
        description: "所有「擊中冰冷傷害」可以造成冰緩，最高50%。",
        notes: [
          "過低的傷害不會造成冰緩。",
          "冰緩會降低「行動速度」，包含攻擊、施放與移動速度。",
          "與其他「緩速效果」相乘計算。",
          "魔法／稀有／傳奇敵人承受15%／30%／50%更少緩速效果。",
          "每一名額外玩家，效果額外減少10%。"
        ]
      },
      {
        name: "冰凍",
        description: "所有「擊中冰冷傷害」的「傷害累積」異常狀態。",
        notes: [
          "累計達到門檻後將造成冰凍，「禁錮」4秒。"
        ]
      },
      {
        name: "感電",
        description: "所有「擊中閃電傷害」有機率造成感電，會受到20%額外傷害。",
        notes: [
          "閃電傷害越高，感電機率越高。",
          "感電增加的額外傷害，在傷害計算完成後才進行乘算。",
          "感電可套用至持續傷害的額外增傷。"
        ]
      },
      {
        name: "觸電",
        description: "透過特定技能或效果所造成的「傷害累計」異常狀態。",
        notes: [
          "累計達到門檻後將造成觸電，「禁錮」5秒。"
        ]
      }
    ],
    damageAilments: [
      {
        name: "燃燒",
        description: "所有「擊中火焰傷害」有機率造成點燃。",
        notes: [
          "火焰傷害越高，點燃機率越高。",
          "傷害為「擊中火焰傷害」的25%，持續4秒。",
          "可藉由「感電」等負面狀態提升傷害。",
          "不受「穿透抗性」等增加「擊中」傷害的詞綴影響。"
        ]
      }
    ],
    damageBoosts: [
      {
        name: "穿透抗性",
        description: "可降低敵方的「抗性」數值。",
        notes: [
          "敵方抗性最低為0。",
          "「穿透」只影響「擊中」傷害。"
        ]
      },
      {
        name: "曝曬",
        description: "可降低敵方20%「抗性」數值，持續數秒。",
        notes: [
          "抗性最低為0。",
          "同時可存在「不同屬性」的曝曬。",
          "「相同屬性」的曝曬只取效果最高值。"
        ]
      },
      {
        name: "易碎",
        description: "對易碎敵人的「擊中」增加6%暴擊率，持續4秒。",
        notes: []
      }
    ]
  },
  {
    name: "混沌傷害",
    description: "混沌傷害類型",
    baseProperties: [
      "混沌傷害對能量護盾能造成2倍的削減。",
      "會受到「混沌抗性」減免承受傷害百分比。"
    ],
    damageAilments: [
      {
        name: "中毒",
        description: "需有機率造成中毒異常狀態詞綴效果。",
        notes: [
          "傷害穿透「能量護盾」，直接對「生命」造成傷害。",
          "傷害為「擊中物理傷害」與「擊中混沌傷害」加總的20%／每秒。",
          "可藉由「感電」等負面狀態提升傷害。",
          "不受「穿透抗性」等增加「擊中」傷害的詞綴影響。"
        ]
      }
    ],
    damageBoosts: [
      {
        name: "穿透抗性",
        description: "可降低敵方的「抗性」數值。",
        notes: [
          "敵方抗性最低為0。",
          "「穿透」只影響「擊中」傷害。"
        ]
      },
      {
        name: "凋零",
        description: "每層增加5%承受的「混沌傷害」，最多10層。",
        notes: [
          "效果可套用至「擊中傷害」與「持續傷害」。"
        ]
      }
    ]
  }
];

export const damageConversionNote = {
  description: "額外提醒：傷害經過轉換屬性後，增加傷害詞綴僅套用至最終傷害的屬性。"
};
