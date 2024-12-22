import React from 'react';
import { Trial, Progress } from '../../../types/ascendancy';

const AscendancyGuide: React.FC = () => {
  const trials: Trial[] = [
    {
      id: 'trial1',
      name: '第一試煉',
      location: '監獄',
      description: '完成監獄中的試煉',
      rewards: ['技能點數 +1']
    },
    // Add more trials...
  ];

  const progressSteps: Progress[] = [
    {
      step: 1,
      description: '在監獄中找到試煉入口',
      requirements: ['角色等級 > 10']
    },
    // Add more steps...
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">升華試煉指南</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">試煉概述</h2>
        {trials.map((trial) => (
          <div key={trial.id} className="mb-8">
            <h3 className="text-xl font-semibold mb-2">{trial.name}</h3>
            <p className="text-gray-300 mb-2">{trial.description}</p>
            <p className="text-gray-400">位置：{trial.location}</p>
            {trial.rewards && trial.rewards.length > 0 && (
              <div className="mt-2">
                <h4 className="font-medium mb-1">獎勵：</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {trial.rewards.map((reward, idx) => (
                    <li key={idx}>{reward}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">完成步驟</h2>
        {progressSteps.map((progress) => (
          <div key={progress.step} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">第 {progress.step} 步</h3>
            <p className="text-gray-300">{progress.description}</p>
            {progress.requirements && progress.requirements.length > 0 && (
              <div className="mt-2">
                <h4 className="font-medium mb-1">需求：</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {progress.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">注意事項</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>建議在進入試煉前先提升抗性</li>
          <li>準備足夠的藥水和傳送卷軸</li>
          <li>可以先觀察機關運作規律再行動</li>
          <li>記得在完成試煉後與凱旋女神對話</li>
        </ul>
      </section>
    </div>
  );
};

export default AscendancyGuide;
