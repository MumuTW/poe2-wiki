import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ascendancyGuide } from "../../../data/game/character";

const Beginner = () => {
  const [activeTab, setActiveTab] = useState('basics');

  const guides = {
    basics: {
      title: '基礎概念',
      content: [
        {
          title: '遊戲機制',
          items: [
            '生命值與魔力值：你的主要生存資源',
            '抗性：物理、火焰、冰冷、閃電、混沌抗性的重要性',
            '屬性：力量、敏捷、智慧對裝備和技能的影響',
            '技能系統：主動技能和支援寶石的配合',
            '迴避機制：閃避、格擋、迴避的差異'
          ]
        },
        {
          title: '裝備系統',
          items: [
            '裝備稀有度：普通、魔法、稀有、傳奇',
            '詞綴系統：前綴和後綴的概念',
            '裝備槽位：武器、防具、飾品的重要性',
            '連結插槽：技能寶石的安排',
            '品質提升：如何強化你的裝備'
          ]
        }
      ]
    },
    progression: {
      title: '遊戲進程',
      content: [
        {
          title: '主線任務',
          items: [
            '完成 19 章主線劇情',
            '解鎖重要任務獎勵',
            '獲得技能點數和天賦點數',
            '探索新的區域和城鎮',
            '打敗關鍵 Boss 推進劇情'
          ]
        },
        {
          title: '角色發展',
          items: [
            '選擇適合的昇華路徑',
            '規劃天賦樹點數分配',
            '收集和升級技能寶石',
            '強化裝備提升戰力',
            '完成挑戰獲得獎勵'
          ]
        },
        {
          title: '昇華系統',
          description: ascendancyGuide.description,
          trials: ascendancyGuide.howToUnlock.trials.filter(trial => trial.available).map(trial => ({
            name: trial.name,
            description: `第${trial.act}章：${trial.description}`
          }))
        }
      ]
    },
    builds: {
      title: '配裝指南',
      content: [
        {
          title: '新手友好配裝',
          items: [
            '德魯伊：召喚獸群 - 適合新手的召喚流派',
            '死靈法師：骷髏大軍 - 安全的遠程輸出',
            '遊俠：箭雨打擊 - 簡單直接的輸出手法',
            '盜賊：中毒刺客 - 穩定的持續傷害',
            '魔法師：元素打擊 - 清晰的遊戲節奏',
            '聖騎士：聖盾衝鋒 - 穩健的坦克流派'
          ]
        },
        {
          title: '裝備優先級',
          items: [
            '武器：優先提升主要傷害來源',
            '防具：確保足夠的生存能力',
            '首飾：補充抗性和關鍵詞綴',
            '藥劑：準備適當的藥劑組合',
            '技能寶石：保持等級同步提升'
          ]
        }
      ]
    },
    economy: {
      title: '遊戲經濟',
      content: [
        {
          title: '通貨系統',
          items: [
            '基礎通貨的用途和價值',
            '重要通貨的獲取方式',
            '通貨交易的基本概念',
            '物品價值的判斷標準',
            '如何有效積累財富'
          ]
        },
        {
          title: '交易技巧',
          items: [
            '使用官方交易網站',
            '物品定價的基本原則',
            '交易禮儀和安全',
            '常見詐騙手法防範',
            '如何尋找特定物品'
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">新手指南</h1>
        
        {/* 導航標籤 */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(guides).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* 內容區域 */}
        <div className="grid md:grid-cols-2 gap-8">
          {guides[activeTab].content.map((section, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              
              {section.description && (
                <p className="text-gray-300 mb-4">{section.description}</p>
              )}
              
              {section.items && (
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {section.trials && (
                <div className="space-y-4">
                  {section.trials.map((trial, idx) => (
                    <div key={idx} className="bg-gray-700 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">{trial.name}</h3>
                      <p className="text-gray-300">{trial.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 底部導航連結 */}
        <div className="mt-8 flex gap-4">
          <Link 
            to="/basics" 
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            查看完整遊戲基礎指南 →
          </Link>
          <Link 
            to="/ascendancy" 
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            查看完整昇華系統指南 →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Beginner;
