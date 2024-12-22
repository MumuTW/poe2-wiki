import { Story } from '../../../types/story';

export const storyData: Story = {
  setting: '在一個充滿魔法與危險的世界中，玩家將扮演一位流放者，踏上尋找真相與救贖的旅程。',
  total_acts: 10,
  current_acts: 3,
  estimated_time: '完整主線預計需要 20-25 小時',
  1: {
    number: 1,
    title: '流放之路',
    summary: '玩家從流放者的身份開始，在荒涼的海岸醒來，必須學習基本生存技能並探索這片危險的土地。',
    recommended_level: {
      start: 1,
      end: 10
    },
    tips: [
      '注意收集和裝備適合的裝備，提高生存能力',
      '善用技能組合，建立有效的戰鬥策略',
      '與NPC對話獲取重要信息和任務'
    ],
    areas: [
      {
        name: '荒涼海岸',
        description: '一片被遺棄的海岸線，充滿著危險的生物和其他流放者。',
        level: 1,
        monsters: [
          '殭屍漫遊者',
          '海岸蟹',
          '流放者餘黨'
        ],
        tips: [
          '初期要小心應對多個敵人',
          '可以在海邊找到一些有用的物資'
        ]
      },
      {
        name: '泥沼地',
        description: '潮濕的沼澤地帶，藏匿著許多危險生物。',
        level: 4,
        monsters: [
          '沼澤巨蛙',
          '毒蛇',
          '泥沼爬行者'
        ],
        tips: [
          '注意毒素傷害',
          '地形會減緩移動速度'
        ]
      }
    ],
    main_quests: [
      {
        name: '求生之路',
        description: '在荒涼的海岸找到基本的生存物資和武器。',
        objectives: [
          '找到一把武器',
          '擊敗10個殭屍',
          '到達第一個安全營地'
        ],
        rewards: [
          {
            name: '初學者護甲套裝',
            description: '一套基礎的護甲，提供基本的防護能力'
          },
          {
            name: '技能寶石',
            description: '你的第一個技能寶石，可以學習基礎攻擊技能'
          }
        ],
        tips: [
          '優先尋找武器',
          '避免同時對抗多個敵人'
        ]
      }
    ],
    side_quests: [
      {
        name: '遺失的補給',
        description: '幫助營地居民找回被搶走的補給品。',
        objectives: [
          '找到補給箱',
          '消滅盜賊首領',
          '運回補給品'
        ],
        rewards: [
          {
            name: '生存背包',
            description: '增加物品欄位空間'
          }
        ],
        tips: [
          '盜賊首領較為強大，建議達到3級再挑戰'
        ]
      }
    ],
    bosses: [
      {
        name: '希爾洛克',
        location: '海岸洞穴',
        level: 8,
        difficulty: '簡單',
        phases: [
          {
            phase: 1,
            description: '基本攻擊模式',
            mechanics: [
              {
                name: '潮汐衝擊',
                description: '釋放大範圍水屬性攻擊',
                damage_type: '水屬性',
                counter_strategy: '保持距離，等待技能結束後反擊'
              }
            ],
            tips: [
              '注意觀察boss的動作預兆',
              '保持適當距離'
            ]
          }
        ],
        rewards: [
          {
            item: '海潮之心',
            description: '增加水屬性抗性的護身符'
          }
        ],
        preparation: [
          '準備治療藥水',
          '裝備適當的護甲',
          '學習閃避技巧'
        ]
      }
    ]
  }
};
