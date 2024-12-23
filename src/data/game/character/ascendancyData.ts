export interface Ascendancy {
  id: string;
  name: string;
  description: string;
  nodes: {
    id: string;
    name: string;
    description: string;
    stats: string[];
  }[];
}

export const ascendancies: Ascendancy[] = [
  {
    id: 'slayer',
    name: '屠戮者',
    description: '專精於物理傷害和生命偷取的昇華職業',
    nodes: [
      {
        id: 'endless-hunger',
        name: '無盡渴望',
        description: '生命偷取效果永不停止',
        stats: ['生命偷取效果持續時間無限']
      }
    ]
  }
];
