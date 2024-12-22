export interface PassiveTreeData {
  introduction: {
    description: string;
    classLayout: string;
    preview: string;
  };
  nodeTypes: {
    name: string;
    description: string;
  }[];
  nodeCategories: {
    name: string;
    nodes: string[];
  }[];
  weaponGroupSystem: {
    description: string;
    points: string;
    howToAllocate: string;
    restrictions: string[];
    notes: string[];
  };
}

export const passiveTreeData: PassiveTreeData = {
  introduction: {
    description: '２代的12個職業，依照主要屬性分為６種類，全部由中心的６個方向出發。',
    classLayout: '每個職業的天賦樹起始點都位於中心區域的不同位置，反映該職業的主要屬性傾向。',
    preview: '鍵盤按下「Shift」或者搖桿按下（R3）可以顯示該天賦如何影響角色的防禦或傷害。較複雜條件計算的天賦無法預覽。'
  },

  nodeTypes: [
    {
      name: '能力點天賦',
      description: '過路點的５屬性值可以自選力量／敏捷／智慧'
    },
    {
      name: '小型天賦',
      description: '天賦群中比較小顆的天賦，例如暴擊率'
    },
    {
      name: '核心天賦',
      description: '天賦群中比較大顆的天賦，例如近期攻擊未暴擊，增加暴擊加成'
    },
    {
      name: '關鍵天賦',
      description: '天賦樹中最大顆的天賦，例如心靈昇華（MOM）、異靈之體（CI）'
    }
  ],

  nodeCategories: [
    {
      name: '中心區域（泛用天賦）',
      nodes: [
        '攻擊傷害、投射物傷害、法術傷害、召喚物傷害',
        '護甲%、閃避%、能量護盾%',
        '每秒生命恢復、魔力恢復率'
      ]
    },
    {
      name: '中層區域（專精天賦）',
      nodes: [
        '物理、火焰、冰冷、閃電、混沌傷害',
        '燃燒、冰緩、冰凍、感電、流血、中毒、護甲破壞、暈眩',
        '單手武器、雙手武器、雙持武器、持盾牌',
        '生命藥劑、魔力藥劑、護符',
        '能量護盾充能、偷取生命／魔力、補償生命／魔力'
      ]
    },
    {
      name: '外圍區域（極度專精天賦）',
      nodes: [
        '各武器、圖騰、召喚物限定天賦'
      ]
    }
  ],

  weaponGroupSystem: {
    description: '劇情章節的支線任務／頭目可以取得「武器組天賦點數」',
    points: '玩家天賦點總共有123點，其中「可作為」武器組天賦的有24點',
    howToAllocate: '滑鼠藉由右上方的「＜」，或者搖桿按住（Ａ／X）來配置武器組天賦',
    restrictions: [
      '「關鍵天賦」與「珠寶插槽」無法使用「武器組天賦」'
    ],
    notes: [
      '武器天賦組會隨著切換「武器組」而自動切換',
      '可搭配技能頁面設定技能給武器組施放，來自動切換'
    ]
  }
};
