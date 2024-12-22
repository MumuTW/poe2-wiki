import React from 'react';
import { campaignData, CampaignOverview, Act, SubArea, Quest, BossFight, ImportantItem } from '../../../data/game/progression';

interface Quest {
  name: string;
  description: string;
  objectives: string[];
  rewards: string[];
  tips: string[];
}

interface Act {
  title: string;
  summary: string;
  areas: SubArea[];
  main_quests: Quest[];
  bosses: BossFight[];
  important_items: ImportantItem[];
  tips: string[];
}

interface SubArea {
  name: string;
  description: string;
  monsters: string[];
  tips: string[];
}

interface BossFight {
  name: string;
  location: string;
  level: number;
  difficulty: string;
  phases: string[];
  rewards: string[];
  preparation: string[];
}

interface ImportantItem {
  name: string;
  location: string;
  usage: string;
}

const campaignOverview: CampaignOverview = {
  total_acts: 6,
  current_acts: 3,
  setting: "流放之路2的故事發生在第一代的20年後",
  estimated_time: "早期測試版本約需25小時完成3章節內容",
  recommended_builds: []
};

const CampaignGuide: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Campaign Guide</h1>
      <p className="mb-4">{campaignOverview.setting}</p>
      <p className="mb-4">Estimated time: {campaignOverview.estimated_time}</p>
      {campaignData.map((act: Act, index: number) => (
        <div key={index} className="mb-8 border p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2">
            {act.title}
          </h2>
          <p className="mb-4">{act.summary}</p>
          <h3 className="text-lg font-semibold mb-2">Areas</h3>
          <ul className="mb-4">
            {act.areas.map((area: SubArea, areaIndex: number) => (
              <li key={areaIndex} className="mb-2">
                <span className="font-medium">{area.name}:</span> {area.description}
                <ul className="ml-4 list-disc">
                  {area.monsters.map((monster: string, monsterIndex: number) => (
                    <li key={monsterIndex}>{monster}</li>
                  ))}
                </ul>
                <ul className="ml-4 list-disc">
                  {area.tips.map((tip: string, tipIndex: number) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mb-2">Main Quests</h3>
          <ul className="mb-4">
            {act.main_quests.map((quest: Quest, questIndex: number) => (
              <li key={questIndex} className="mb-2">
                <span className="font-medium">{quest.name}:</span> {quest.description}
                <ul className="ml-4 list-disc">
                  {quest.objectives.map((objective: string, objIndex: number) => (
                    <li key={objIndex}>{objective}</li>
                  ))}
                </ul>
                <ul className="ml-4 list-disc">
                  {quest.rewards.map((reward: string, rewardIndex: number) => (
                    <li key={rewardIndex}>{reward}</li>
                  ))}
                </ul>
                <ul className="ml-4 list-disc">
                  {quest.tips.map((tip: string, tipIndex: number) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mb-2">Bosses</h3>
          <ul className="mb-4">
            {act.bosses.map((boss: BossFight, bossIndex: number) => (
              <li key={bossIndex} className="mb-2">
                <span className="font-medium">{boss.name}:</span> {boss.location} (Level: {boss.level}, Difficulty: {boss.difficulty})
                <ul className="ml-4 list-disc">
                  {boss.phases.map((phase: string, phaseIndex: number) => (
                    <li key={phaseIndex}>{phase}</li>
                  ))}
                </ul>
                <ul className="ml-4 list-disc">
                  {boss.rewards.map((reward: string, rewardIndex: number) => (
                    <li key={rewardIndex}>{reward}</li>
                  ))}
                </ul>
                <ul className="ml-4 list-disc">
                  {boss.preparation.map((prep: string, prepIndex: number) => (
                    <li key={prepIndex}>{prep}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mb-2">Important Items</h3>
          <ul className="mb-4">
            {act.important_items.map((item: ImportantItem, itemIndex: number) => (
              <li key={itemIndex}>
                <span className="font-medium">{item.name}:</span> {item.location} - {item.usage}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mb-2">Tips</h3>
          <ul className="ml-4 list-disc">
            {act.tips.map((tip: string, tipIndex: number) => (
              <li key={tipIndex}>{tip}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CampaignGuide;
