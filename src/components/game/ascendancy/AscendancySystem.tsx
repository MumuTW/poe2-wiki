import React from 'react';
import { ascendancies } from '../../../data/game/character/ascendancyData';

const AscendancySystem = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">昇華系統</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">系統介紹</h2>
        <div className="bg-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            昇華系統是一個強大的角色特殊化機制，讓你的角色獲得獨特的能力和玩法。
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">可用昇華職業</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {ascendancies.map((ascendancy) => (
            <div key={ascendancy.id} className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">{ascendancy.name}</h3>
              <p className="text-gray-300 mb-4">{ascendancy.description}</p>
              <div className="space-y-4">
                {ascendancy.nodes.map((node) => (
                  <div key={node.id} className="bg-gray-700 rounded-lg p-4">
                    <h4 className="text-xl font-bold mb-2">{node.name}</h4>
                    <p className="text-gray-300">{node.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">遊玩建議</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <p className="text-gray-300">優先完成所有試煉，解鎖更多昇華點數。</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <p className="text-gray-300">仔細規劃昇華路線，選擇適合你的構建。</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <p className="text-gray-300">配合主天賦樹做選擇，發揮最大效果。</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AscendancySystem;
