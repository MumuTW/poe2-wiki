import React from 'react';
import { classes } from '../../../data/game/character';

const Classes = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">職業介紹</h1>
      {classes.map((classInfo) => (
        <div key={classInfo.name} className="mb-12 bg-gray-800 rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-4">{classInfo.name}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">基本屬性</h3>
              <ul className="space-y-2">
                <li>生命: {classInfo.startingStats.life}</li>
                <li>魔力: {classInfo.startingStats.mana}</li>
                <li>力量: {classInfo.startingStats.attributes.str || 0}</li>
                <li>敏捷: {classInfo.startingStats.attributes.dex || 0}</li>
                <li>智慧: {classInfo.startingStats.attributes.int || 0}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">起始技能</h3>
              <ul className="space-y-2">
                {classInfo.startingSkills.map((skill, index) => (
                  <li key={index}>
                    {skill.name} (等級 {skill.level})
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">遊玩風格</h3>
            <ul className="list-disc list-inside space-y-2">
              {classInfo.playstyle.map((style, index) => (
                <li key={index}>{style}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">昇華路徑</h3>
            {classInfo.ascendancies.map((ascendancy, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-medium mb-2">{ascendancy.name}</h4>
                <p className="text-gray-300 mb-2">{ascendancy.description}</p>
                <p className="text-gray-400">{ascendancy.playstyle}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
