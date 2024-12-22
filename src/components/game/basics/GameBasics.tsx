import React, { useState } from 'react';
import { attributes, defenses } from '../../../data/game/basics';

interface Section {
  title: string;
  data: {
    name: string;
    description: string;
    notes?: string[];
    base?: string[];
    advanced?: string[];
  }[];
}

const GameBasics: React.FC = () => {
  const [activeSection, setActiveSection] = useState('attributes');

  const sections: Record<string, Section> = {
    attributes: { title: '屬性系統', data: attributes },
    resources: { title: '資源系統', data: [] },
    defenses: { title: '防禦機制', data: defenses },
    damage: { title: '傷害類型', data: [] },
    npcs: { title: 'NPC系統', data: [] },
    workbenches: { title: '工作台系統', data: [] },
    spiritGuide: { title: '精魂系統', data: [] }
  };

  const renderContent = (content: string) => {
    return <p className="text-gray-300 mb-4">{content}</p>;
  };

  const renderList = (items: string[]) => {
    return (
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">遊戲基礎機制</h1>
        
        {/* 導航標籤 */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeSection === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* 屬性系統 */}
        {activeSection === 'attributes' && (
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(attributes).map(([attr, data]) => (
              <div key={attr} className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {attr === 'strength' ? '力量' : attr === 'dexterity' ? '敏捷' : '智慧'}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">基礎效果</h3>
                    {renderList(data.base)}
                  </div>
                  {data.advanced && (
                    <div>
                      <h3 className="font-semibold mb-2">進階效果</h3>
                      {renderList(data.advanced)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 資源系統 */}
        {activeSection === 'resources' && (
          <div className="grid md:grid-cols-2 gap-6">
            {sections.resources.data.map((resource) => (
              <div key={resource.name} className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">{resource.name}</h2>
                {renderContent(resource.description)}
                {resource.notes && renderList(resource.notes)}
              </div>
            ))}
          </div>
        )}

        {/* 防禦機制 */}
        {activeSection === 'defenses' && (
          <div className="grid md:grid-cols-2 gap-6">
            {defenses.map((defense) => (
              <div key={defense.name} className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">{defense.name}</h2>
                {renderContent(defense.description)}
                {renderList(defense.notes)}
              </div>
            ))}
          </div>
        )}

        {/* 靈魂嚮導部分 */}
        {activeSection === 'spiritGuide' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">精魂系統 (Spirit System)</h2>
              {renderContent('精魂是暗黑破壞神4中的重要資源系統之一，用於啟用光環、增益效果、永久召喚物和觸發技能等持續性效果。')}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameBasics;
