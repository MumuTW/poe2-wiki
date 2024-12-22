import React from 'react';
import { SearchResult } from '../../utils/searchUtils';

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  if (results.length === 0) {
    return null;
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
    <div className="space-y-8">
      {Object.entries(groupedResults).map(([category, categoryResults]) => (
        <div key={category} className="category-group">
          <h3 className="text-lg font-semibold mb-4">{category}</h3>
          <div className="space-y-4">
            {categoryResults.map((result, index) => (
              <article key={`${result.path}-${index}`} className="card hover:bg-gray-700 transition-colors">
                <a href={result.path} className="block">
                  <h4 className="text-lg font-medium mb-2">{result.title}</h4>
                  <p className="text-gray-300">{result.content}</p>
                </a>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
