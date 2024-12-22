import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-100 mb-6">流亡黯道 2 (Path of Exile 2)</h1>
        <p className="text-xl text-gray-300 mb-4">
          流亡黯道 2 是一款全新的免費動作角色扮演遊戲，提供革命性的技能系統、全新的故事劇情，以及更加精緻的遊戲體驗。
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">遊戲特色</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• 目前提供搶先體驗版，包含三個主要章節以及完整的終局內容</li>
            <li>• 6 個獨特的職業選擇</li>
            <li>• 革命性的技能系統</li>
            <li>• 更精緻的戰鬥體驗</li>
            <li>• 全新的物品和裝備系統</li>
            <li>• 改進的視覺效果和動畫</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">核心系統</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• 技能寶石系統：不再需要連結，每個技能都能獨立 6 連結</li>
            <li>• 昇華系統：每個職業擁有兩條獨特的昇華路徑</li>
            <li>• 武器系統：全新的武器類型和特殊效果</li>
            <li>• 天賦樹：重新設計的天賦系統</li>
          </ul>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <Link to="/classes" className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">職業系統</h2>
          <p className="text-gray-300">
            探索六個獨特的職業，每個都有其特色玩法和昇華路徑。從戰士到法師，找到適合你的遊戲風格。
          </p>
        </Link>

        <Link to="/skills" className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">技能系統</h2>
          <p className="text-gray-300">
            革命性的技能寶石系統，每個技能都可以獨立 6 連結。搭配各種輔助寶石創造獨特的技能組合。
          </p>
        </Link>

        <Link to="/atlas-basics" className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">輿圖系統</h2>
          <p className="text-gray-300">
            探索全新的輿圖系統，挑戰各種終局內容。透過輿圖天賦樹自訂你的冒險方向。
          </p>
        </Link>
      </section>
    </div>
  );
};

export default Home;
