import React from 'react';
import { atlasTreeData } from '../../../data/game/progression';

const AtlasTree: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">輿圖天賦樹指南</h1>

        {/* 搶先體驗提示 */}
        <div className="bg-yellow-900 bg-opacity-50 p-4 rounded-lg mb-8">
          <p className="text-yellow-200">{atlasTreeData.introduction.earlyAccessNote}</p>
        </div>

        {/* 基礎介紹 */}
        <section className="mb-12 bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">基礎介紹</h2>
          <p className="text-gray-300">{atlasTreeData.introduction.description}</p>
        </section>

        {/* 輿圖任務進程 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{atlasTreeData.progression.title}</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <p className="text-gray-300 mb-4">{atlasTreeData.progression.description}</p>
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-3">進程提示</h3>
              <ul className="space-y-2">
                {atlasTreeData.progression.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 威石系統 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{atlasTreeData.waystoneSystem.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* 基礎說明 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">威石獲取</h3>
              <p className="text-gray-300 mb-4">{atlasTreeData.waystoneSystem.sustain.early}</p>
              <p className="text-gray-300">{atlasTreeData.waystoneSystem.sustain.advanced}</p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">獲取技巧</h4>
                <ul className="space-y-2">
                  {atlasTreeData.waystoneSystem.sustain.tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span className="text-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 首領策略 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">首領策略</h3>
              <p className="text-gray-300 mb-4">{atlasTreeData.waystoneSystem.bossStrategy.description}</p>
              <ul className="space-y-2">
                {atlasTreeData.waystoneSystem.bossStrategy.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 塔樓系統 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{atlasTreeData.towerSystem.title}</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <p className="text-gray-300 mb-4">{atlasTreeData.towerSystem.description}</p>
            <div className="bg-blue-900 bg-opacity-50 p-4 rounded-lg mb-4">
              <p className="text-gray-200">{atlasTreeData.towerSystem.tabletUsage}</p>
            </div>
            <ul className="space-y-2">
              {atlasTreeData.towerSystem.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 生存指南 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{atlasTreeData.survival.title}</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <p className="text-gray-300 mb-6">{atlasTreeData.survival.description}</p>
            
            {/* 基本要求 */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {atlasTreeData.survival.requirements.map((req) => (
                <div key={req.name} className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{req.name}</h4>
                  <p className="text-gray-300">{req.description}</p>
                </div>
              ))}
            </div>

            {/* 生存技巧 */}
            <div>
              <h3 className="text-xl font-semibold mb-3">生存技巧</h3>
              <ul className="space-y-2">
                {atlasTreeData.survival.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-400 mr-2">⚠</span>
                    <span className="text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 終局活動 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">終局活動</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {atlasTreeData.endgameActivities.map((activity) => (
              <div key={activity.name} className="bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{activity.name}</h3>
                  <div className="flex gap-4">
                    <span className={`px-2 py-1 rounded text-sm ${
                      activity.difficulty === '極高' ? 'bg-red-900 text-red-200' :
                      activity.difficulty === '高' ? 'bg-orange-900 text-orange-200' :
                      activity.difficulty === '中' ? 'bg-yellow-900 text-yellow-200' :
                      'bg-green-900 text-green-200'
                    }`}>
                      難度: {activity.difficulty}
                    </span>
                    <span className={`px-2 py-1 rounded text-sm ${
                      activity.rewards === '極高' ? 'bg-purple-900 text-purple-200' :
                      activity.rewards === '高' ? 'bg-blue-900 text-blue-200' :
                      activity.rewards === '中' ? 'bg-cyan-900 text-cyan-200' :
                      'bg-gray-700 text-gray-200'
                    }`}>
                      獎勵: {activity.rewards}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300">{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 控制台提示 */}
        <div className="bg-blue-900 bg-opacity-50 p-4 rounded-lg">
          <p className="text-sm">
            提示：在遊戲中按下 Ctrl-U 可以開啟輿圖天賦樹界面。
          </p>
        </div>
      </div>
    </div>
  );
};

export default AtlasTree;
