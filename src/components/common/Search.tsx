import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchAllContent, SearchResult } from '../../utils/searchUtils';

const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      const searchResults = searchAllContent(query);
      setResults(searchResults);
      setIsLoading(false);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  // 按類別分組結果
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  return (
    <div className="space-y-8">
      <section className="card">
        <h1 className="text-2xl font-bold mb-6">搜尋百科內容</h1>
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="輸入關鍵字搜尋..."
              className="flex-1 px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="btn">
              搜尋
            </button>
          </div>
        </form>
      </section>

      {isLoading ? (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-2 text-gray-400">搜尋中...</p>
        </div>
      ) : query && results.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          找不到符合 "{query}" 的結果
        </div>
      ) : (
        <section>
          <h2 className="text-xl font-bold mb-4">搜尋結果</h2>
          <div className="space-y-4">
            {Object.entries(groupedResults).map(([category, categoryResults]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-4">{category}</h3>
                <div className="space-y-4">
                  {categoryResults.map((result) => (
                    <article key={result.id} className="card hover:bg-gray-700 transition-colors">
                      <a href={result.path} className="block">
                        <h3 className="text-lg font-medium mb-2">{result.title}</h3>
                        <p className="text-gray-300 mb-2">{result.content}</p>
                        <div className="text-sm text-gray-400">
                          最後更新：{result.lastUpdated}
                        </div>
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="card bg-gray-800/50">
        <h2 className="text-xl font-bold mb-4">搜尋提示</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>可以使用遊戲中的專有名詞進行搜尋</li>
          <li>支援中文和英文關鍵字</li>
          <li>可以搜尋職業名稱、技能名稱、裝備名稱等</li>
        </ul>
      </section>
    </div>
  );
};

export default Search;
