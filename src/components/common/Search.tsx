import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { SearchResult } from '../../utils/searchUtils';

const Search: React.FC = () => {
  const [results, setResults] = useState<SearchResult[]>([]);

  return (
    <div className="search-container">
      <SearchBar onSearch={setResults} />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;
