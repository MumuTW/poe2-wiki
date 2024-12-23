import React from 'react';
import { damageTypes } from '../../../data/game/basics';

const GameBasics = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">遊戲基礎機制</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">傷害類型</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {damageTypes.map((type) => (
            <div key={type.id} className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">{type.name}</h3>
              <p className="text-gray-300">{type.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">基礎概念</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">生命與魔力</h3>
            <p className="text-gray-300">
              生命值（Life）是你的主要生存資源，當生命值降至零時角色會死亡。
              魔力值（Mana）用於施放技能，需要合理管理以維持持續輸出。
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">抗性系統</h3>
            <p className="text-gray-300">
              遊戲中有多種抗性：火焰、冰冷、閃電和混沌。
              保持抗性上限對於生存至關重要。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameBasics;
