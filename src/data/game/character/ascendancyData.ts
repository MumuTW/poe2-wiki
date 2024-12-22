export interface AscendancyNode {
  name: string;
  description?: string;
}

export interface Ascendancy {
  name: string;
  mainAttribute: string;
  description: string;
  imageUrl: string;
  nodes: AscendancyNode[];
}

export interface BaseClass {
  name: string;
  attributes: string[];
  ascendancies: Ascendancy[];
}

export const classesData: BaseClass[] = [
  {
    name: "戰士",
    attributes: ["力量"],
    ascendancies: [
      {
        name: "戰爭使者",
        mainAttribute: "力量",
        description: "戰爭使者提供獨特的遊戲風格，結合近戰戰鬥與戰吼和圖騰召喚。這個職業在對付首領時表現出色，因為圖騰可以吸引仇恨並造成傷害，讓玩家專注於閃避攻擊和最大化輸出。",
        imageUrl: "/images/ascendancy/warbringer.jpg",
        nodes: [
          { name: "鐵砧之重" },
          { name: "爆裂衝擊" },
          { name: "玉之傳承" },
          { name: "應答之召" },
          { name: "木牆" },
          { name: "倫利的訓練" },
          { name: "龜甲護符" },
          { name: "戰吼者之鳴" },
          { name: "巨狼嚎叫" }
        ]
      },
      {
        name: "泰坦",
        mainAttribute: "力量",
        description: "泰坦是一個擅長重擊和擊暈敵人的坦克職業。這個昇華職業著重於強大而緩慢的攻擊和高度的防禦能力。對於喜歡慢節奏遊戲風格並享受重擊帶來的滿足感的玩家來說是絕佳選擇。",
        imageUrl: "/images/ascendancy/titan.jpg",
        nodes: [
          { name: "石膚" },
          { name: "破土者" },
          { name: "先祖賦能" },
          { name: "巨大容量" },
          { name: "魁梧體型" },
          { name: "碾壓衝擊" },
          { name: "驚人力量" },
          { name: "神秘血脈" }
        ]
      }
    ]
  },
  {
    name: "女術者",
    attributes: ["智慧"],
    ascendancies: [
      {
        name: "風暴編織者",
        mainAttribute: "智慧",
        description: "風暴編織者是一個專注於元素傷害、暴擊和異常狀態的施法者。通過利用靈魂寶石等新機制，風暴編織者可以在電擊、點燃和暴擊時觸發強大效果。",
        imageUrl: "/images/ascendancy/stormweaver.jpg",
        nodes: [
          { name: "肅清之風" },
          { name: "風暴召喚者" },
          { name: "雨舞者" },
          { name: "重雪" },
          { name: "凜冬塑造者" },
          { name: "二次打擊" },
          { name: "風暴塑造者" },
          { name: "恆久強風" },
          { name: "意志力量" },
          { name: "風暴之心" }
        ]
      },
      {
        name: "時空幻術師",
        mainAttribute: "智慧",
        description: "時空幻術師是流亡黯道2中的一個全新職業，利用遊戲的時間操縱機制來控制戰場。這個職業提供了一種全新而創新的戰鬥方式，擁有時間凍結和時間裂隙等能力，可以進行戰略性遊戲和強大的連招。",
        imageUrl: "/images/ascendancy/chronomancer.jpg",
        nodes: [
          { name: "時光重現" },
          { name: "無束重演" },
          { name: "終極指令" },
          { name: "沙中足跡" },
          { name: "流沙沙漏" },
          { name: "時刻巔峰" },
          { name: "循環心跳" },
          { name: "急流" }
        ]
      }
    ]
  },
  {
    name: "傭兵",
    attributes: ["力量", "敏捷"],
    ascendancies: [
      {
        name: "女巫獵人",
        mainAttribute: "力量/敏捷",
        description: "女巫獵人是一個專門獵殺惡魔和不死生物的強大職業。這個職業在首次打擊時能造成巨大傷害，並提供強大的清圖速度和元素傷害減免。",
        imageUrl: "/images/ascendancy/witchhunter.jpg",
        nodes: [
          { name: "武器大師" },
          { name: "無情殺手" },
          { name: "審判者" },
          { name: "獵巫者" },
          { name: "無慈悲" },
          { name: "強迫儀式" },
          { name: "祭儀淨化" },
          { name: "狂熱審判" }
        ]
      },
      {
        name: "古靈軍團",
        mainAttribute: "力量/敏捷",
        description: "古靈軍團是一個獨特的昇華職業，可以將寶石直接嵌入自己的身體。通過利用屬性和寶石品質、等級和顏色，這個職業可以創建具有增強傷害和生存能力的強大構建。",
        imageUrl: "/images/ascendancy/gemling.jpg",
        nodes: [
          { name: "晶化潛能" },
          { name: "植入寶石" },
          { name: "進階奧術" },
          { name: "整合效率" },
          { name: "寶石鑲嵌" },
          { name: "奧術注入" },
          { name: "適應能力" },
          { name: "強化效果" }
        ]
      }
    ]
  },
  {
    name: "僧侶",
    attributes: ["敏捷", "智慧"],
    ascendancies: [
      {
        name: "施法者",
        mainAttribute: "敏捷/智慧",
        description: "施法者允許僧侶掌握元素力量，獲得強大的元素能力和異常狀態增強效果。這個近戰專注的職業利用元素傷害和異常狀態來造成顯著傷害並觸發強大效果。",
        imageUrl: "/images/ascendancy/invoker.jpg",
        nodes: [
          { name: "以恩典引導我..." },
          { name: "...並保護我免受傷害" },
          { name: "信仰是一種選擇" },
          { name: "我即暴風雪..." },
          { name: "我即雷霆..." },
          { name: "...我將狂怒" },
          { name: "靈魂永恆湧現" },
          { name: "粉碎我的敵人..." },
          { name: "...將他們驅散於風中" }
        ]
      },
      {
        name: "夏烏拉侍僧",
        mainAttribute: "敏捷/智慧",
        description: "夏烏拉侍僧允許僧侶擁抱黑暗，用靈魂換取黑暗力量。這條路徑提供了一種獨特的遊戲風格，專注於暗影傷害和夏烏拉賦予的黑暗力量操縱。",
        imageUrl: "/images/ascendancy/acolyte.jpg",
        nodes: [
          { name: "貪婪疑問" },
          { name: "吞噬質疑" },
          { name: "夏烏拉的贈禮" },
          { name: "現實撕裂" },
          { name: "清醒夢境" },
          { name: "清明夢境" },
          { name: "擁抱黑暗" },
          { name: "虛空之握" },
          { name: "內在寂靜" }
        ]
      }
    ]
  },
  {
    name: "遊俠",
    attributes: ["敏捷"],
    ascendancies: [
      {
        name: "銳眼",
        mainAttribute: "敏捷",
        description: "銳眼昇華職業為遠程戰鬥愛好者提供熟悉的遊戲風格。這個職業專注於提高攻擊速度、移動速度、傷害和投射物操縱。",
        imageUrl: "/images/ascendancy/deadeye.jpg",
        nodes: [
          { name: "貪婪" },
          { name: "驚險追逐" },
          { name: "鷹眼" },
          { name: "投射物近戰專精" },
          { name: "近距離射擊" },
          { name: "遠距射擊" },
          { name: "無盡彈藥" },
          { name: "精準射擊" },
          { name: "聚風" },
          { name: "風之守護" }
        ]
      },
      {
        name: "追獵者",
        mainAttribute: "敏捷",
        description: "追獵者是一個專注於藥劑操縱和中毒傷害的獨特職業。追獵者能夠使敵人的最大中毒堆疊數量翻倍，這使其成為中毒流派最強大的職業。",
        imageUrl: "/images/ascendancy/pathfinder.jpg",
        nodes: [
          { name: "連鎖化學" },
          { name: "持久藥劑" },
          { name: "傳染污染" },
          { name: "壓倒性毒性" },
          { name: "釀造藥劑" },
          { name: "流血藥劑" },
          { name: "爆炸藥劑" },
          { name: "粉碎藥劑" },
          { name: "雷霆藥劑" },
          { name: "劇毒藥劑" },
          { name: "旅者智慧" },
          { name: "奔襲突擊" },
          { name: "無情追擊" }
        ]
      }
    ]
  },
  {
    name: "女巫",
    attributes: ["智慧"],
    ascendancies: [
      {
        name: "血法師",
        mainAttribute: "智慧",
        description: "血法師是生命和能量操縱的大師。通過堆疊生命值和利用防禦，血法師可以顯著提高他們的攻擊能力，創造強大而持久的構建。",
        imageUrl: "/images/ascendancy/bloodmage.jpg",
        nodes: [
          { name: "血魔法" },
          { name: "活力虹吸" },
          { name: "開放傷口" },
          { name: "血刺" },
          { name: "血腥尖刺" },
          { name: "撕裂血肉" },
          { name: "緊握傷口" },
          { name: "深紅之力" }
        ]
      },
      {
        name: "獄火師",
        mainAttribute: "智慧",
        description: "獄火師是一個專注於火焰傷害的強大施法者。這個職業可以召喚忠誠的地獄犬伙伴並變身為惡魔形態，獲得增加的傷害和機動性。",
        imageUrl: "/images/ascendancy/infernalist.jpg",
        nodes: [
          { name: "改變血肉" },
          { name: "貝達特的凝視" },
          { name: "貝達特的意志" },
          { name: "貝達特之手" },
          { name: "惡魔附身" },
          { name: "掌控黑暗" },
          { name: "火焰契約" },
          { name: "烈焰使者" },
          { name: "沸騰之軀" },
          { name: "忠誠地獄犬" },
          { name: "咧嘴焚燒" }
        ]
      }
    ]
  }
];
