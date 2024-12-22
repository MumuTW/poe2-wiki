import { BaseClass } from '../types/ascendancy';

export const classesData: BaseClass[] = [
  {
    id: 'marauder',
    name: '野蠻人',
    description: '力量型角色，專精於近戰和生命值',
    attributes: ['力量', '生命值', '近戰傷害'],
    ascendancies: [
      {
        id: 'juggernaut',
        name: '勇士',
        description: '專注於防禦和持久力',
        imageUrl: '/images/ascendancy/juggernaut.png',
        nodes: [
          {
            id: 'unbreakable',
            name: '堅不可摧',
            description: '增加物理傷害減免',
            stats: [
              '+5% 物理傷害減免',
              '+1000 護甲值',
              '受到的暴擊傷害降低 30%'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'duelist',
    name: '決鬥者',
    description: '力量和敏捷混合型角色，專精於近戰和閃避',
    attributes: ['力量', '敏捷', '近戰傷害'],
    ascendancies: [
      {
        id: 'gladiator',
        name: '衛士',
        description: '專注於格擋和流血傷害',
        imageUrl: '/images/ascendancy/gladiator.png',
        nodes: [
          {
            id: 'blood_in_the_eyes',
            name: '血染雙眼',
            description: '增加流血傷害和格擋率',
            stats: [
              '+25% 流血傷害',
              '+15% 格擋率',
              '對流血目標造成 20% 額外傷害'
            ]
          }
        ]
      }
    ]
  }
];

export default classesData;
