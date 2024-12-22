const Ascendancy = () => {
  const ascendancies = [
    {
      baseClass: '野蠻人 (Barbarian)',
      options: [
        {
          name: '狂戰士',
          description: '專注於暴力和破壞力，可以在戰鬥中進入狂暴狀態，提升傷害輸出。',
          features: [
            '狂暴狀態增加傷害',
            '生命值提升',
            '攻擊速度加快'
          ]
        },
        {
          name: '酋長',
          description: '戰吼專精，可以通過戰吼增強自己和隊友。',
          features: [
            '強力的戰吼效果',
            '團隊增益',
            '防禦能力提升'
          ]
        }
      ]
    },
    {
      baseClass: '死靈法師 (Necromancer)',
      options: [
        {
          name: '亡靈領主',
          description: '專精於強化召喚生物，可以控制更多更強大的亡靈。',
          features: [
            '召喚物數量增加',
            '召喚物傷害提升',
            '特殊亡靈類型解鎖'
          ]
        },
        {
          name: '死亡法師',
          description: '專注於死亡魔法的直接傷害，結合召喚物和法術。',
          features: [
            '死亡法術傷害提升',
            '屍體爆炸技能',
            '詛咒效果增強'
          ]
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">昇華系統</h1>
      
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">系統介紹</h2>
        <p className="text-gray-300">
          昇華系統是POE2中的進階職業系統，每個基礎職業都有3個昇華選項。
          通過完成特定任務和挑戰，玩家可以獲得昇華點數，用於解鎖和強化昇華能力。
          昇華職業會大幅強化角色的某些特定面向，讓玩家可以打造更專精的角色構建。
        </p>
      </div>

      {ascendancies.map((ascendancy, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">{ascendancy.baseClass} 昇華選項</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {ascendancy.options.map((option, optionIndex) => (
              <div key={optionIndex} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{option.name}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <h4 className="text-lg font-semibold text-white mb-2">主要特點：</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-white mb-4">昇華建議</h2>
        <div className="space-y-4">
          <p className="text-gray-300">
            選擇昇華職業時，請考慮以下因素：
          </p>
          <ul className="list-disc list-inside text-gray-300">
            <li>你喜歡的遊戲風格（輸出、防禦、輔助等）</li>
            <li>與你當前的技能和裝備搭配</li>
            <li>單人遊戲還是組隊遊戲</li>
          </ul>
          <p className="text-gray-300">
            昇華職業的選擇會顯著影響你的遊戲體驗，建議在選擇前仔細閱讀各個選項的特點。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ascendancy;
