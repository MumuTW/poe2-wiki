import React from 'react';
import { campaignOverview } from '../../../data/game/progression';

const BuildGuide: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">新手推薦配裝(Beginner Builds)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaignOverview.recommended_builds.map((build, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{build.class_name}</h2>
            <h3 className="text-lg text-blue-600 mb-4">{build.build_name}</h3>
            
            <div className="mb-4">
              <h4 className="font-medium mb-1">遊戲風格</h4>
              <p className="text-gray-700">{build.playstyle}</p>
            </div>

            <div className="mb-4">
              <h4 className="font-medium mb-1">主要技能</h4>
              <ul className="list-disc list-inside">
                {build.main_skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-green-600 mb-1">優點</h4>
              <ul className="list-disc list-inside">
                {build.advantages.map((adv, advIndex) => (
                  <li key={advIndex} className="text-gray-700">{adv}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-red-600 mb-1">缺點</h4>
              <ul className="list-disc list-inside">
                {build.disadvantages.map((dis, disIndex) => (
                  <li key={disIndex} className="text-gray-700">{dis}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-purple-600 mb-1">升級建議</h4>
              <ul className="list-disc list-inside">
                {build.leveling_tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="text-gray-700">{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildGuide;
