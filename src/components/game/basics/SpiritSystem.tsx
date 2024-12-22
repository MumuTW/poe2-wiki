import React from 'react';

const SpiritSystem: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* 精魂獲取 */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-4">精魂獲取</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>遊戲開始時擁有0精魂，通過擊敗主線章節頭目可獲得總計100精魂</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>可透過胸甲、項鍊和權杖等裝備來增加精魂上限</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>權杖無法雙持來疊加精魂加成</span>
          </li>
        </ul>
      </div>

      {/* 精魂消耗 */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-4">精魂消耗</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>精魂消耗範圍從30到120不等，大多數光環消耗30精魂</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>可透過提升召喚物技能等級和天賦樹中的「恐怖之王」來降低召喚物的精魂消耗</span>
          </li>
        </ul>
      </div>

      {/* 技能類型 */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-4">需要精魂的技能類型</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* 光環技能 */}
          <div className="space-y-2">
            <h4 className="font-medium text-gray-100">光環技能</h4>
            <ul className="text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>權杖提供的光環技能本身不消耗精魂，但若連結輔助寶石則會消耗精魂</span>
              </li>
            </ul>
          </div>

          {/* 召喚物 */}
          <div className="space-y-2">
            <h4 className="font-medium text-gray-100">召喚物</h4>
            <ul className="text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>永久型召喚物（如魔像、殭屍）需要保留精魂，臨時召喚物則不需要</span>
              </li>
            </ul>
          </div>

          {/* 觸發技能 */}
          <div className="space-y-2">
            <h4 className="font-medium text-gray-100">觸發技能</h4>
            <ul className="text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>觸發技能（如震撼施放、暴擊施放）需要保留精魂，這限制了玩家同時使用的持續性效果數量</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 切換機制 */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-100 mb-4">武器切換機制</h3>
        <p className="text-gray-300">
          切換武器時精魂保留會動態調整，若新武器組的精魂上限不足，部分保留效果可能會被停用。
        </p>
      </div>
    </div>
  );
};

export default SpiritSystem;
