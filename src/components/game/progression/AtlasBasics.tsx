import React from 'react';
import { atlasBasicsData } from '../../../data/game/progression';

const AtlasBasics: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{atlasBasicsData.title}</h1>
      <p className="text-xl text-gray-300 mb-8">{atlasBasicsData.description}</p>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">基礎規則</h2>
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

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">地圖鑰匙系統</h2>
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

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">小型輿圖機制</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {atlasBasicsData.miniMechanics.map((mechanic, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">{mechanic.name}</h3>
              <p className="text-gray-300 mb-4">{mechanic.description}</p>
              {mechanic.details && (
                <ul className="space-y-2">
                  {mechanic.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
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

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">輿圖天賦系統</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {atlasBasicsData.atlasTalents.categories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
              <p className="text-yellow-400 mb-3">{category.points}</p>
              <ul className="space-y-2">
                {category.requirements.map((req, reqIndex) => (
                  <li key={reqIndex} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">大型輿圖機制</h2>
        {atlasBasicsData.majorMechanics.map((mechanic, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">{mechanic.name}</h3>
            <p className="text-gray-300 mb-6">{mechanic.description}</p>

            <div className="bg-gray-700 rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-3">{mechanic.rewards.title}</h4>
              <ul className="space-y-2">
                {mechanic.rewards.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-purple-400 mr-2">★</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {mechanic.boss && (
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-semibold mb-3">首領資訊</h4>
                <p className="text-gray-300 mb-2">進入條件：{mechanic.boss.access}</p>
                <p className="text-gray-300">獎勵：{mechanic.boss.rewards}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">終局頭目</h2>
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

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">難度等級</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {atlasBasicsData.endgameBosses.difficulty.map((level, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{level.level}</h4>
                <p className="text-gray-300">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AtlasBasics;
