import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchResult } from '../utils/searchUtils';

interface SearchResultsProps {
  results: SearchResult[];
  onResultClick?: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, onResultClick }) => {
  const navigate = useNavigate();

  const handleResultClick = (path: string) => {
    navigate(path);
    if (onResultClick) {
      onResultClick();
    }
  };

  if (results.length === 0) {
    return (
      <div className="p-4 text-gray-400">
        無搜尋結果
      </div>
    );
  }

  // 按類別分組結果
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  return (
    <div className="max-h-[80vh] overflow-y-auto">
      {Object.entries(groupedResults).map(([category, categoryResults]) => (
        <div key={category} className="mb-4">
          <h3 className="text-lg font-semibold text-blue-400 px-4 py-2 bg-gray-800">
            {category}
          </h3>
          <div className="divide-y divide-gray-700">
            {categoryResults.map((result, index) => (
              <div
                key={`${result.title}-${index}`}
                className="p-4 hover:bg-gray-800 cursor-pointer transition-colors"
                onClick={() => handleResultClick(result.path)}
              >
                <h4 className="text-white font-medium mb-1">{result.title}</h4>
                <p className="text-gray-400 text-sm line-clamp-2">{result.content}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
