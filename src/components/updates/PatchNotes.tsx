import React from 'react';
import { patchNotesData } from '../../data/updates';

export const PatchNotes = () => {
  const latestPatch = patchNotesData[0];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{latestPatch.version} {latestPatch.title}</h1>
        <p className="text-gray-500">Last Updated: {latestPatch.date}</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
        <ul className="list-disc pl-6 space-y-2">
          {latestPatch.keyTakeaways.map((takeaway, index) => (
            <li key={index}>{takeaway}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Notable Skill Changes</h2>
        <ul className="list-disc pl-6 space-y-2">
          {latestPatch.notableSkillChanges.map((change, index) => (
            <li key={index}>{change}</li>
          ))}
        </ul>
      </section>

      {latestPatch.sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <ul className="list-disc pl-6 space-y-2">
            {section.content.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default PatchNotes;
