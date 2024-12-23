import React from 'react';
import { classes } from '../../../data/game/character';

const Classes = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">職業總覽</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classInfo) => (
          <div key={classInfo.id} className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{classInfo.name}</h2>
            <p className="text-gray-300">{classInfo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
