import React, { useState } from 'react';
import { attributes, defenses } from '../../../data/game/basics';

interface Resource {
  name: string;
  description: string;
  notes?: string[];
}

interface Defense {
  name: string;
  description: string;
  notes: string[];
}

interface DisplayAttribute {
  name: string;
  base: string[];
  advanced?: string[];
}

interface Section {
  title: string;
  data: Array<DisplayAttribute | Resource | Defense>;
}

const GameBasics: React.FC = () => {
  // Transform attributes object into array format
  const attributesArray = Object.entries(attributes).map(([key, value]) => ({
    name: key === 'strength' ? '力量' : key === 'dexterity' ? '敏捷' : '智慧',
    base: value.base,
    advanced: value.advanced
  }));
  const [activeSection, setActiveSection] = useState('attributes');

  const sections: Record<string, Section> = {
    attributes: { title: '屬性系統', data: attributesArray },
    resources: { title: '資源系統', data: [] },
    defenses: { title: '防禦機制', data: defenses },
    damage: { title: '傷害類型', data: [] },
  };

  const renderContent = (content: string) => <p className="text-gray-300 mb-4">{content}</p>;
  const renderList = (items: string[]) => (
    <ul className="list-disc list-inside space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-300">{item}</li>
      ))}
    </ul>
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">遊戲基礎</h1>

      <div className="flex space-x-4 mb-8">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            className={`px-4 py-2 rounded ${activeSection === key ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveSection(key)}
          >
            {sections[key].title}
          </button>
        ))}
      </div>

      {activeSection === 'attributes' && (
        <div className="grid md:grid-cols-2 gap-6">
          {attributesArray.map((attribute) => (
            <div key={attribute.name} className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">{attribute.name}</h2>
              {renderList(attribute.base)}
              {attribute.advanced && renderList(attribute.advanced)}
            </div>
          ))}
        </div>
      )}

      {activeSection === 'resources' && (
        <div className="grid md:grid-cols-2 gap-6">
          {sections.resources.data.map((item) => {
            if ('description' in item) {
              return (
                <div key={item.name} className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
                  {renderContent(item.description)}
                  {item.notes && renderList(item.notes)}
                </div>
              );
            }
            return null;
          })}
        </div>
      )}

      {activeSection === 'defenses' && (
        <div className="grid md:grid-cols-2 gap-6">
          {defenses.map((defense) => {
            if ('description' in defense && 'notes' in defense) {
              return (
                <div key={defense.name} className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4">{defense.name}</h2>
                  {renderContent(defense.description)}
                  {renderList(defense.notes)}
                </div>
              );
            }
            return null;
          })}
        </div>
      )}

      {activeSection === 'damage' && (
        <div className="text-gray-300">
          <p>傷害類型的詳細信息將在此處顯示。</p>
        </div>
      )}
    </div>
  );
};

export default GameBasics;
