import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

interface WikiEntry {
  id: string;
  title: string;
  content: string;
  lastUpdated: string;
  references: string[];
}

const Entry = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate('/');
      return;
    }
    // Add your logic here to fetch and display entry data based on the id
  }, [id, navigate]);

  // 模擬條目數據
  const entry: WikiEntry = {
    id: '1',
    title: '遊戲介紹',
    content: `
# Path of Exile 2 簡介

Path of Exile 2（流亡黯道2）是由紐西蘭遊戲開發商Grinding Gear Games開發的動作角色扮演遊戲，預計於2024年發布。作為廣受歡迎的Path of Exile的正統續作，本作在保留前作核心特色的同時，帶來了全新的遊戲體驗。

## 主要特色

- 全新19個升階職業
- 改良的技能寶石系統
- 全新的武器系統
- 升級的視覺效果和物理引擎
- 新的故事劇情和遊戲世界

## 遊戲背景

故事發生在原作劇情的20年後，玩家將在全新的世界中展開冒險。遊戲保留了原作的深度和複雜性，同時簡化了一些機制，使新玩家更容易上手。

## 遊戲系統

### 1. 技能系統
- 革新的技能寶石機制
- 更直觀的技能組合方式
- 提供更多自定義選擇

### 2. 戰鬥系統
- 更流暢的戰鬥體驗
- 改良的打擊感
- 新增的武器類型和戰鬥機制

### 3. 職業系統
- 每個職業都有獨特的玩法
- 兩條昇華路徑供選擇
- 深度的角色定制

### 4. 輿圖系統
- 全新的輿圖天賦樹
- 更多樣的終局內容
- 自由的探索方向
    `,
    lastUpdated: '2024-01-01',
    references: [
      'https://forum.gamer.com.tw/C.php?bsn=18966&snA=136906',
      'https://www.pathofexile.com'
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose prose-invert lg:prose-xl">
        <ReactMarkdown>{entry.content}</ReactMarkdown>
      </article>

      <div className="mt-8 border-t border-gray-700 pt-6">
        <h2 className="text-xl font-semibold mb-4">參考資料</h2>
        <ul className="space-y-2">
          {entry.references.map((ref, index) => (
            <li key={index}>
              <a
                href={ref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {ref}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 text-gray-400 text-sm">
        最後更新：{new Date(entry.lastUpdated).toLocaleDateString('zh-TW')}
      </div>
    </div>
  );
};

export default Entry;
