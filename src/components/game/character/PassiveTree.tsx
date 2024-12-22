import React from 'react';
import { passiveTreeData } from "../../../data/game/character";

const PassiveTree: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">天賦樹系統</h1>

        {/* 基礎介紹 */}
        <section className="mb-12 bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">基礎介紹</h2>
          <div className="space-y-4">
            <p>{passiveTreeData.introduction.description}</p>
            <p>{passiveTreeData.introduction.classLayout}</p>
            <div className="bg-blue-900 bg-opacity-50 p-4 rounded-lg">
              <p>{passiveTreeData.introduction.preview}</p>
            </div>
          </div>
        </section>

        {/* 天賦類型 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">天賦類型</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {passiveTreeData.nodeTypes.map((type) => (
              <div key={type.name} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{type.name}</h3>
                <p className="text-gray-300">{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 天賦分類 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">天賦分佈</h2>
          <div className="space-y-6">
            {passiveTreeData.nodeCategories.map((category) => (
              <div key={category.name} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.nodes.map((node, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span className="text-gray-300">{node}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 武器組天賦系統 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">武器組天賦系統</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="space-y-6">
              {/* 基本說明 */}
              <div>
                <p className="text-gray-300 mb-2">{passiveTreeData.weaponGroupSystem.description}</p>
                <p className="text-gray-300 mb-2">{passiveTreeData.weaponGroupSystem.points}</p>
              </div>

              {/* 配置方式 */}
              <div>
                <h3 className="text-xl font-semibold mb-3">配置方式</h3>
                <p className="text-gray-300">{passiveTreeData.weaponGroupSystem.howToAllocate}</p>
              </div>

              {/* 限制 */}
              <div>
                <h3 className="text-xl font-semibold mb-3">限制</h3>
                <ul className="space-y-2">
                  {passiveTreeData.weaponGroupSystem.restrictions.map((restriction, index) => (
                    <li key={index} className="flex items-start text-red-400">
                      <span className="mr-2">⚠</span>
                      <span>{restriction}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 注意事項 */}
              <div>
                <h3 className="text-xl font-semibold mb-3">注意事項</h3>
                <ul className="space-y-2">
                  {passiveTreeData.weaponGroupSystem.notes.map((note, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-400 mr-2">※</span>
                      <span className="text-gray-300">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 提示信息 */}
        <div className="bg-blue-900 bg-opacity-50 p-4 rounded-lg">
          <p className="text-sm text-gray-300">
            提示：在遊戲中，你可以使用天賦模擬器來規劃你的天賦樹配置。這可以幫助你在實際分配點數前先進行理論構建。
          </p>
        </div>
      </div>
    </div>
  );
};

export default PassiveTree;
