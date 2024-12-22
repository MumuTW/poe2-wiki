import React from 'react';
import { classesData } from '../data/ascendancyData';
import { BaseClass } from '../../../types/ascendancy';

const AscendancyOverview: React.FC = () => {
  const renderBaseClass = (baseClass: BaseClass, index: number) => {
    return (
      <div key={index} className="mb-12">
        <div className="border-b-2 border-gray-200 mb-6">
          <h2 className="text-3xl font-bold mb-2">{baseClass.name}</h2>
          <p className="text-gray-600 mb-4">
            {baseClass.attributes.join(" / ")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {baseClass.ascendancies.map((ascendancy, ascIndex) => (
            <div key={ascIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={ascendancy.imageUrl}
                  alt={`${ascendancy.name} Ascendancy`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{ascendancy.name}</h3>
                <p className="text-gray-600 mb-4">{ascendancy.description}</p>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">Ascendancy Nodes</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {ascendancy.nodes.map((node, nodeIndex) => (
                      <li key={nodeIndex} className="text-gray-700">
                        {node.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">PoE 2 Ascendancy Overview</h1>
        <p className="text-gray-600 mb-4">Last Updated: December 8, 2024</p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-sm">
            Not all of the information on Path of Exile 2's classes and ascendancies has been revealed. 
            Pin this post to be notified when we know more and something new is added during early access.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {classesData.map((baseClass, index) => renderBaseClass(baseClass, index))}
      </div>

      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-xl mb-4">6 Classes / 12 Ascendancies</p>
        <p className="text-gray-700">
          Path of Exile 2 introduces 12 new Ascendancy classes at launch, each offering unique playstyles 
          and mechanics. From the elemental mastery of the Invoker and Stormweaver to the dark power of 
          the Acolyte of Chayula and the temporal manipulation of the Chronomancer, there's something 
          for every player. Grinding Gear Games has done a fantastic job of adding flavor to these new 
          Ascendancies while retaining the flexibility and customization options that Path of Exile is known for.
        </p>
      </div>
    </div>
  );
};

export default AscendancyOverview;
