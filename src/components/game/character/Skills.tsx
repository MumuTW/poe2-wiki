import React from 'react';
import { skills } from '../../../data/game/character';

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">技能列表</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{skill.name}</h2>
            <p className="text-gray-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
