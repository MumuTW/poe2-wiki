import React, { useState, FormEvent } from 'react';
import { SearchResult, searchAllContent } from '../../utils/searchUtils';

interface SearchBarProps {
  onSearch: (results: SearchResult[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const results = searchAllContent(query);
    onSearch(results);
  };

  return (
    <form onSubmit={handleSubmit} className="relative z-10">
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜尋遊戲內容..."
          className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
        >
          搜尋
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
