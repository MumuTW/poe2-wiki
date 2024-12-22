import React from 'react';
import { ascendancyGuide, specialNotes } from '../data/ascendancyGuide';

export const AscendancyGuide: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">{ascendancyGuide.title}</h1>
      
      {/* 系統介紹 */}
      <section className="mb-8">
        <p className="text-lg mb-4">{ascendancyGuide.description}</p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
          <p className="text-yellow-700">{ascendancyGuide.earlyAccessNote}</p>
        </div>
      </section>

      {/* 如何獲得昇華 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{ascendancyGuide.howToUnlock.title}</h2>
        <p className="mb-4">{ascendancyGuide.howToUnlock.description}</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          {ascendancyGuide.howToUnlock.trials.map((trial) => (
            <div key={trial.name} className="bg-secondary p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{trial.name}</h3>
              <p className="text-sm mb-2">第{trial.act}章</p>
              <p>{trial.description}</p>
              {!trial.available && (
                <p className="text-red-500 mt-2">（尚未實裝）</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 解鎖進度 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">昇華點數獲取進度</h2>
        <div className="space-y-4">
          {ascendancyGuide.unlockProgress.map((progress) => (
            <div key={progress.stage} className="bg-secondary p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                第{progress.stage}階段（{progress.points.join('&')}點）
              </h3>
              <p className="mb-2">要求：{progress.requirement}</p>
              <p>{progress.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 特殊提示 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">重要提示</h2>
        <div className="bg-info p-4 rounded-lg mb-4">
          <p>{specialNotes.skipAct2Trial}</p>
        </div>
        
        <div className="bg-secondary p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">終局遊戲鑰匙獲取</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>{specialNotes.endgameKeys.level60}</li>
            <li>{specialNotes.endgameKeys.level75}</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AscendancyGuide;
