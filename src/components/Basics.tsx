import React from 'react';

const Basics = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">新手入門指南</h1>
      
      <div className="space-y-8">
        {/* 遊戲介紹 */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">遊戲介紹</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              Path of Exile 2（簡稱POE2）是一款由Grinding Gear Games開發的動作RPG遊戲，
              作為廣受歡迎的Path of Exile的正統續作。遊戲保留了前作的深度和自由度，
              同時在畫面、戰鬥手感和遊戲機制上都有重大改進。
            </p>
          </div>
        </section>

        {/* 核心特色 */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">核心特色</h2>
          <div className="grid gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-2">職業系統</h3>
              <p className="text-gray-300">
                遊戲提供12個基礎職業，每個職業都有獨特的玩法風格和3個昇華職業選擇，
                讓玩家可以根據自己的喜好打造獨特的角色。
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-2">戰鬥系統</h3>
              <p className="text-gray-300">
                全新的戰鬥系統更加流暢，提供清晰的視覺回饋和打擊感。
                戰鬥節奏明快，但需要更多戰術思考和技能配合。
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-2">技能系統</h3>
              <p className="text-gray-300">
                技能系統經過重新設計，每個技能都有其獨特的機制和玩法，
                玩家可以通過不同的技能組合創造出各種有趣的配置。
              </p>
            </div>
          </div>
        </section>

        {/* 新手建議 */}
        <section className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">新手建議</h2>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-2">1. 選擇入門職業</h3>
              <p className="text-gray-300">
                建議新手玩家從較為直觀的職業開始，例如戰士或遊俠。
                這些職業的玩法相對簡單，可以幫助你更好地理解遊戲機制。
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-2">2. 了解基礎機制</h3>
              <p className="text-gray-300">
                遊戲提供了完整的新手教學，建議仔細閱讀並完成所有教學任務。
                這將幫助你理解遊戲的核心機制和操作方式。
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-2">3. 裝備與技能</h3>
              <p className="text-gray-300">
                初期專注於理解基礎裝備屬性和技能效果，不需要過於追求完美配裝。
                隨著遊戲進程的推進，你會逐漸掌握更多進階知識。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Basics;
