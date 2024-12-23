import React from 'react';
import { atlasTreeData } from '../../../data/game/progression';

const AtlasTree = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{atlasTreeData.title}</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">系統介紹</h2>
        <div className="bg-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">{atlasTreeData.description}</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{atlasTreeData.towerSystem.title}</h2>
        <div className="bg-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">{atlasTreeData.towerSystem.description}</p>
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <p className="text-gray-300">{atlasTreeData.towerSystem.tabletUsage}</p>
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

      <section>
        <h2 className="text-3xl font-bold mb-6">{atlasTreeData.survival.title}</h2>
        <div className="bg-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-6">{atlasTreeData.survival.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {atlasTreeData.survival.requirements.map((req) => (
              <div key={req.name} className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{req.name}</h4>
                <p className="text-gray-300">{req.description}</p>
              </div>
            ))}
          </div>

          <ul className="space-y-2">
            {atlasTreeData.survival.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-400 mr-2">⚠</span>
                <span className="text-gray-300">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AtlasTree;
