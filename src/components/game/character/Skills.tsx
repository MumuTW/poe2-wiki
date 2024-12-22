import React, { useState } from 'react';
import { skills } from '../../../data/game/character';

const Skills = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const skillTypes = [
    { id: 'all', name: '全部' },
    { id: 'attack', name: '攻擊' },
    { id: 'spell', name: '法術' },
    { id: 'support', name: '輔助' },
    { id: 'aura', name: '光環' },
    { id: 'curse', name: '詛咒' }
  ];

  const filteredSkills = skills.filter(skill => {
    if (selectedType !== 'all' && skill.type !== selectedType) return false;
    if (searchQuery && !skill.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">技能寶石資料庫</h1>

      {/* 搜索和篩選 */}
      <div className="mb-8 flex flex-wrap gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="搜尋技能..."
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {skillTypes.map(type => (
            <button
              key={type.id}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedType === type.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
              onClick={() => setSelectedType(type.id)}
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>

      {/* 技能列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              <span className={`px-2 py-1 rounded text-sm ${
                skill.gemColor === 'red' ? 'bg-red-900 text-red-200' :
                skill.gemColor === 'green' ? 'bg-green-900 text-green-200' :
                skill.gemColor === 'blue' ? 'bg-blue-900 text-blue-200' :
                'bg-gray-600 text-gray-200'
              }`}>
                {skill.gemColor === 'red' ? '力量' :
                 skill.gemColor === 'green' ? '敏捷' :
                 skill.gemColor === 'blue' ? '智慧' : '白色'}
              </span>
            </div>

            <p className="text-gray-300 mb-4">{skill.description}</p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-200 mb-2">基礎屬性</h4>
                <ul className="space-y-1 text-gray-400">
                  {skill.stats.base.map((stat, i) => (
                    <li key={i}>{stat}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-200 mb-2">品質加成</h4>
                <ul className="space-y-1 text-gray-400">
                  {skill.stats.quality.map((stat, i) => (
                    <li key={i}>{stat}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-200 mb-2">等級加成</h4>
                <ul className="space-y-1 text-gray-400">
                  {skill.stats.perLevel.map((stat, i) => (
                    <li key={i}>{stat}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-200 mb-2">需求</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>等級: {skill.requirements.level}</li>
                  {skill.requirements.attributes && (
                    <>
                      {skill.requirements.attributes.str && <li>力量: {skill.requirements.attributes.str}</li>}
                      {skill.requirements.attributes.dex && <li>敏捷: {skill.requirements.attributes.dex}</li>}
                      {skill.requirements.attributes.int && <li>智慧: {skill.requirements.attributes.int}</li>}
                    </>
                  )}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-200 mb-2">適用職業</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.classes.map((className, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-700 rounded text-sm text-gray-300">
                      {className}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
