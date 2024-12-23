import React from 'react';
import { passiveTreeData } from '../../../data/game/character/passiveTreeData';

const PassiveTree = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">天賦樹系統</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">系統介紹</h2>
        <div className="bg-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            天賦樹是一個龐大的角色成長系統，讓你自由地定制角色的各種屬性和能力。
            通過選擇不同的天賦點，你可以打造出獨特的角色構建。
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">天賦類型</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">小型天賦</h3>
            <p className="text-gray-300">
              提供基礎屬性加成，是構建的基石。
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">核心天賦</h3>
            <p className="text-gray-300">
              提供顯著的能力提升，通常需要特定的構建來發揮效果。
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">關鍵天賦</h3>
            <p className="text-gray-300">
              改變遊戲機制的重要天賦，能夠徹底改變構建的玩法。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PassiveTree;
