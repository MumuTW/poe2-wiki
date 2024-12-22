import React from 'react';
import { atlasBasicsData } from "../../../data/game/progression";

const AtlasBasics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">輿圖系統指南</h1>

        {/* 基礎規則 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{atlasBasicsData.basicRules.title}</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <ul className="space-y-3">
              {atlasBasicsData.basicRules.rules.map((rule, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-300">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 地圖鑰匙系統 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{atlasBasicsData.mapKeys.title}</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <ul className="space-y-3">
              {atlasBasicsData.mapKeys.description.map((desc, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-2">※</span>
                  <span className="text-gray-300">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 小型機制 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">小型輿圖機制</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {atlasBasicsData.miniMechanics.map((mechanic) => (
              <div key={mechanic.name} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{mechanic.name}</h3>
                <p className="text-gray-300 mb-4">{mechanic.description}</p>
                {mechanic.details && (
                  <ul className="space-y-2">
                    {mechanic.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-2">-</span>
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 輿圖天賦系統 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{atlasBasicsData.atlasTalents.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {atlasBasicsData.atlasTalents.categories.map((category) => (
              <div key={category.name} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
                <p className="text-yellow-400 mb-3">{category.points}</p>
                <ul className="space-y-2">
                  {category.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span className="text-gray-300">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 大型機制 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">大型輿圖機制</h2>
          {atlasBasicsData.majorMechanics.map((mechanic) => (
            <div key={mechanic.name} className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">{mechanic.name}</h3>
              <p className="text-gray-300 mb-6">{mechanic.description}</p>

              {/* 獎勵 */}
              <div className="bg-gray-700 rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-3">{mechanic.rewards.title}</h4>
                <ul className="space-y-2">
                  {mechanic.rewards.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-400 mr-2">★</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 首領資訊 */}
              {mechanic.boss && (
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">首領挑戰</h4>
                  <p className="text-gray-300 mb-2">{mechanic.boss.access}</p>
                  <p className="text-yellow-400">{mechanic.boss.rewards}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* 終局頭目 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{atlasBasicsData.endgameBosses.title}</h2>
          
          {/* 進程 */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">挑戰進程</h3>
            <ul className="space-y-3">
              {atlasBasicsData.endgameBosses.progression.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-2">{index + 1}.</span>
                  <span className="text-gray-300">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 難度等級 */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">難度等級</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {atlasBasicsData.endgameBosses.difficulty.map((level) => (
                <div key={level.level} className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{level.level}</h4>
                  <p className="text-gray-300">{level.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 提示信息 */}
        <div className="bg-blue-900 bg-opacity-50 p-4 rounded-lg">
          <p className="text-sm">
            提示：大型機制的天賦點數可以用來提升相應機制的難度和獎勵。記得根據你的角色強度來選擇合適的難度等級。
          </p>
        </div>
      </div>
    </div>
  );
};

export default AtlasBasics;
