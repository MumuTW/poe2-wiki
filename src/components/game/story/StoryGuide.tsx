import React, { useState } from 'react';
import { storyData } from '../../../data/game/story';
import { Act, Area, Quest, QuestReward, Boss, BossPhase, BossMechanic, BossReward } from '../../../types/story';

interface StoryGuideProps {
  className?: string;
}

const StoryGuide: React.FC<StoryGuideProps> = ({ className }) => {
  const [selectedAct, setSelectedAct] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<'overview' | 'areas' | 'quests' | 'bosses'>('overview');

  // 確保 campaignData 存在並且是數組
  const acts = Object.values(storyData).filter((value): value is Act => 
    typeof value === 'object' && value !== null && 'number' in value
  );
  const currentAct = acts.find(act => act.number === selectedAct) || acts[0];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">劇情概覽</h3>
        <p className="text-gray-300">{currentAct.overview}</p>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">重要提示</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {currentAct.tips.map((tip: string, index: number) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderAreas = () => (
    <div className="space-y-6">
      {currentAct.areas.map((area: Area, index: number) => (
        <div key={index} className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">{area.name}</h3>
          <p className="text-gray-300 mb-4">{area.description}</p>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">常見怪物:</h4>
            <ul className="list-disc list-inside text-gray-300">
              {area.monsters.map((monster: string, idx: number) => (
                <li key={idx}>{monster}</li>
              ))}
            </ul>
          </div>

          {area.tips && area.tips.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">區域提示:</h4>
              <ul className="list-disc list-inside text-gray-300">
                {area.tips.map((tip: string, idx: number) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderQuests = () => (
    <div className="space-y-6">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">主線任務</h3>
        {currentAct.main_quests.map((quest: Quest, index: number) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 mb-4">
            <h4 className="text-xl font-bold mb-2">{quest.name}</h4>
            <p className="text-gray-300 mb-4">{quest.description}</p>
            
            <div className="mb-4">
              <h5 className="font-semibold mb-2">任務目標:</h5>
              <ul className="list-disc list-inside text-gray-300">
                {quest.objectives.map((objective: string, idx: number) => (
                  <li key={idx}>{objective}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h5 className="font-semibold mb-2">任務獎勵:</h5>
              <ul className="list-disc list-inside text-gray-300">
                {quest.rewards.map((reward: QuestReward, idx: number) => (
                  <li key={idx}>
                    <span className="font-semibold">{reward.name}</span> - {reward.description}
                  </li>
                ))}
              </ul>
            </div>

            {quest.tips && quest.tips.length > 0 && (
              <div>
                <h5 className="font-semibold mb-2">任務提示:</h5>
                <ul className="list-disc list-inside text-gray-300">
                  {quest.tips.map((tip: string, idx: number) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">支線任務</h3>
        {currentAct.side_quests.map((quest: Quest, index: number) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 mb-4">
            <h4 className="text-xl font-bold mb-2">{quest.name}</h4>
            <p className="text-gray-300 mb-4">{quest.description}</p>
            
            <div className="mb-4">
              <h5 className="font-semibold mb-2">任務目標:</h5>
              <ul className="list-disc list-inside text-gray-300">
                {quest.objectives.map((objective: string, idx: number) => (
                  <li key={idx}>{objective}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-2">任務獎勵:</h5>
              <ul className="list-disc list-inside text-gray-300">
                {quest.rewards.map((reward: QuestReward, idx: number) => (
                  <li key={idx}>
                    <span className="font-semibold">{reward.name}</span> - {reward.description}
                  </li>
                ))}
              </ul>
            </div>

            {quest.tips && quest.tips.length > 0 && (
              <div>
                <h5 className="font-semibold mb-2">任務提示:</h5>
                <ul className="list-disc list-inside text-gray-300">
                  {quest.tips.map((tip: string, idx: number) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderBosses = () => (
    <div className="space-y-6">
      {currentAct.bosses.map((boss: Boss, index: number) => (
        <div key={index} className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">{boss.name}</h3>
          <div className="flex items-center mb-4">
            <img src={boss.image} alt={boss.name} className="w-16 h-16 rounded-full mr-4" />
            <p className="text-gray-300">{boss.description}</p>
          </div>

          <div className="space-y-4">
            {boss.phases.map((phase: BossPhase, idx: number) => (
              <div key={idx} className="border-t border-gray-700 pt-4">
                <h4 className="font-semibold mb-2">階段 {phase.phase}</h4>
                <p className="text-gray-300 mb-4">{phase.description}</p>

                <div className="mb-4">
                  <h5 className="font-semibold mb-2">技能機制:</h5>
                  {phase.mechanics.map((mechanic: BossMechanic, mechIdx: number) => (
                    <div key={mechIdx} className="mb-2">
                      <p className="font-semibold text-gray-300">{mechanic.name}</p>
                      <p className="text-gray-400 mb-1">{mechanic.description}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h5 className="font-semibold mb-2">戰鬥提示:</h5>
                  <ul className="list-disc list-inside text-gray-300">
                    {phase.tips.map((tip: string, tipIdx: number) => (
                      <li key={tipIdx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">掉落物品:</h4>
            <ul className="list-disc list-inside text-gray-300">
              {boss.rewards.map((reward: BossReward, rewardIdx: number) => (
                <li key={rewardIdx}>
                  <span className="font-semibold">{reward.item}</span> - {reward.description}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold mb-2">準備事項:</h4>
            <ul className="list-disc list-inside text-gray-300">
              {boss.preparation.map((prep: string, prepIdx: number) => (
                <li key={prepIdx}>{prep}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`space-y-8 ${className}`}>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">劇情指南</h2>

        <div className="flex flex-wrap gap-4">
          {acts.map((act: Act) => (
            <button
              key={act.number}
              className={`px-4 py-2 rounded-lg font-semibold ${
                selectedAct === act.number ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
              onClick={() => setSelectedAct(act.number)}
            >
              Act {act.number}
            </button>
          ))}
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            selectedTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
          }`}
          onClick={() => setSelectedTab('overview')}
        >
          劇情概覽
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            selectedTab === 'areas' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
          }`}
          onClick={() => setSelectedTab('areas')}
        >
          區域
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            selectedTab === 'quests' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
          }`}
          onClick={() => setSelectedTab('quests')}
        >
          任務
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            selectedTab === 'bosses' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
          }`}
          onClick={() => setSelectedTab('bosses')}
        >
          首領
        </button>
      </div>

      {selectedTab === 'overview' && renderOverview()}
      {selectedTab === 'areas' && renderAreas()}
      {selectedTab === 'quests' && renderQuests()}
      {selectedTab === 'bosses' && renderBosses()}
    </div>
  );
};

export default StoryGuide;
