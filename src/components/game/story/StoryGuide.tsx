import React, { useState } from 'react';
import { storyData } from '../../../data/game/story';

interface StoryGuideProps {
  className?: string;
}

const StoryGuide: React.FC<StoryGuideProps> = () => {
  const [selectedAct, setSelectedAct] = useState(1);
  const [selectedTab, setSelectedTab] = useState<'overview' | 'areas' | 'quests' | 'bosses'>('overview');

  // 確保 campaignData 存在並且是數組
  const acts = Array.isArray(storyData) ? storyData : [];
  const currentAct = acts.find(act => act.number === selectedAct) || acts[0];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{currentAct.title}</h2>
        <p className="text-gray-300 mb-4">{currentAct.summary}</p>
        <div className="flex items-center text-gray-300">
          <span className="mr-2">建議等級:</span>
          <span className="font-semibold">{currentAct.recommended_level.start} - {currentAct.recommended_level.end}</span>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">重要提示</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {currentAct.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderAreas = () => (
    <div className="space-y-6">
      {currentAct.areas.map((area, index) => (
        <div key={index} className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">{area.name}</h3>
          <p className="text-gray-300 mb-4">{area.description}</p>
          
          <div className="mb-4">
            <span className="text-gray-400">區域等級: </span>
            <span className="font-semibold">{area.level}</span>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">常見怪物:</h4>
            <ul className="list-disc list-inside text-gray-300">
              {area.monsters.map((monster, idx) => (
                <li key={idx}>{monster}</li>
              ))}
            </ul>
          </div>

          {area.tips && (
            <div>
              <h4 className="font-semibold mb-2">區域提示:</h4>
              <ul className="list-disc list-inside text-gray-300">
                {area.tips.map((tip, idx) => (
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
        {currentAct.main_quests.map((quest, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 mb-4">
            <h4 className="text-xl font-bold mb-2">{quest.name}</h4>
            <p className="text-gray-300 mb-4">{quest.description}</p>
            
            <div className="mb-4">
              <h5 className="font-semibold mb-2">任務目標:</h5>
              <ul className="list-disc list-inside text-gray-300">
                {quest.objectives.map((objective, idx) => (
                  <li key={idx}>{objective}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h5 className="font-semibold mb-2">任務獎勵:</h5>
              <ul className="list-disc list-inside text-gray-300">
                {quest.rewards.map((reward, idx) => (
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
                  {quest.tips.map((tip, idx) => (
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
        {currentAct.side_quests.map((quest, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 mb-4">
            <h4 className="text-xl font-bold mb-2">{quest.name}</h4>
            <p className="text-gray-300 mb-4">{quest.description}</p>
            
            <div className="mb-4">
              <h5 className="font-semibold mb-2">任務目標:</h5>
              <ul className="list-disc list-inside text-gray-300">
                {quest.objectives.map((objective, idx) => (
                  <li key={idx}>{objective}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-2">任務獎勵:</h5>
              <ul className="list-disc list-inside text-gray-300">
                {quest.rewards.map((reward, idx) => (
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
                  {quest.tips.map((tip, idx) => (
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
      {currentAct.bosses.map((boss, index) => (
        <div key={index} className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">{boss.name}</h3>
          <div className="flex items-center mb-4">
            <span className="text-gray-400 mr-4">位置: {boss.location}</span>
            <span className="text-gray-400 mr-4">等級: {boss.level}</span>
            <span className="text-gray-400">難度: {boss.difficulty}</span>
          </div>

          <div className="space-y-4">
            {boss.phases.map((phase, idx) => (
              <div key={idx} className="border-t border-gray-700 pt-4">
                <h4 className="font-semibold mb-2">階段 {phase.phase}</h4>
                <p className="text-gray-300 mb-4">{phase.description}</p>

                <div className="mb-4">
                  <h5 className="font-semibold mb-2">技能機制:</h5>
                  {phase.mechanics.map((mechanic, mechIdx) => (
                    <div key={mechIdx} className="mb-2">
                      <p className="font-semibold text-gray-300">{mechanic.name}</p>
                      <p className="text-gray-400 mb-1">{mechanic.description}</p>
                      <p className="text-gray-400">傷害類型: {mechanic.damage_type}</p>
                      <p className="text-gray-400">應對策略: {mechanic.counter_strategy}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h5 className="font-semibold mb-2">戰鬥提示:</h5>
                  <ul className="list-disc list-inside text-gray-300">
                    {phase.tips.map((tip, tipIdx) => (
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
              {boss.rewards.map((reward, rewardIdx) => (
                <li key={rewardIdx}>
                  <span className="font-semibold">{reward.item}</span> - {reward.description}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold mb-2">準備事項:</h4>
            <ul className="list-disc list-inside text-gray-300">
              {boss.preparation.map((prep, prepIdx) => (
                <li key={prepIdx}>{prep}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-100 mb-8">主線劇情指南</h1>

      {/* 章節選擇 */}
      <div className="mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <div className="text-sm text-gray-600">
            <p>• {storyData.setting}</p>
            <p>• 完整版本將包含 {storyData.total_acts} 章節內容</p>
            <p>• 目前開放 {storyData.current_acts} 章節</p>
            <p>• {storyData.estimated_time}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {storyData.map((act) => (
            <button
              key={act.number}
              className={`px-4 py-2 rounded-lg font-semibold ${
                selectedAct === act.number ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
              onClick={() => setSelectedAct(act.number)}
            >
              第{act.number}章
            </button>
          ))}
        </div>
      </div>

      {/* 標籤選擇 */}
      <div className="flex flex-wrap gap-4 mb-8">
        {(['overview', 'areas', 'quests', 'bosses'] as const).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab === 'overview' && '概覽'}
            {tab === 'areas' && '區域'}
            {tab === 'quests' && '任務'}
            {tab === 'bosses' && 'Boss'}
          </button>
        ))}
      </div>

      {/* 內容顯示 */}
      <div className="mt-8">
        {selectedTab === 'overview' && renderOverview()}
        {selectedTab === 'areas' && renderAreas()}
        {selectedTab === 'quests' && renderQuests()}
        {selectedTab === 'bosses' && renderBosses()}
      </div>
    </div>
  );
};

export default StoryGuide;
