export interface PatchNote {
  version: string;
  date: string;
  title: string;
  keyTakeaways: string[];
  notableSkillChanges: string[];
  sections: {
    title: string;
    content: string[];
  }[];
}

export const patchNotesData: PatchNote[] = [
  {
    version: "0.1.0e",
    date: "December 18, 2024",
    title: "Early Access Patch Notes",
    keyTakeaways: [
      "Cheaper Passive Point Respecs, especially at higher levels",
      "Trial of the Sekhemas difficulty reduced, particularly for melee builds",
      "Endgame resistance caps are now easier to achieve",
      "Chaos damage in higher Waystones reduced",
      "Volatile Crystals death effect removed temporarily",
      "Siphons Flask Charges Modifier fixed to drain 10x slower",
      "Endgame survivability improved overall",
      "Breach monster density reduced",
      "Chain-freezing bosses effectiveness reduced",
      "Various skill buffs introduced instead of nerfs"
    ],
    notableSkillChanges: [
      "New Exposure Support Gems changes enable more build diversity",
      "Skeletal Arsonists received ~30% damage nerf via increased spirit cost",
      "Frenzy Charge generation significantly improved",
      "Armour Explosion chain explosion capability removed",
      "Pathfinder's Concoction Skills received major numerical buffs",
      "Supercharged Slam partially restored after initial hotfix nerf",
      "Two new support gems added for melee and minion builds"
    ],
    sections: [
      {
        title: "General Improvements and Changes",
        content: [
          "Added fast-travel between Checkpoints within areas",
          "Reduced Passive Point Respec costs by 40-50%",
          "Added right-click shortcut for skills advanced information",
          "Added gamepad Flask comparison feature",
          "Added Chance Shards to Currency Exchange",
          "Added Guild Hideout travel button at Waypoints"
        ]
      },
      {
        title: "Endgame and Monster Balance",
        content: [
          "Removed additional elemental resistance penalties in higher tier Maps",
          "Reduced Monster Critical Strike bonus damage by 40%",
          "Reduced Chaos Damage scaling in Endgame",
          "Nerfed various dangerous monster abilities and modifiers",
          "Reduced Breach encounter monster density",
          "Improved various boss fight mechanics"
        ]
      },
      {
        title: "Trial of the Sekhamas Improvements",
        content: [
          "Added distance-based Honour Damage scaling",
          "Fixed Damage over Time bugs affecting Honour",
          "Improved various boss mechanics and visual telegraphing",
          "Added Honour mechanic keyword hover functionality"
        ]
      }
    ]
  }
];
