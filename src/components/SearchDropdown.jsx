import React from 'react';
import { useApp } from '../context/AppContext';

const SearchDropdown = ({ onSelect }) => {
  const { searchResults, isLoading } = useApp();

  if (isLoading) {
    return (
      <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg py-2 z-50">
        <div className="px-4 py-2 text-sm text-gray-500">Searching...</div>
      </div>
    );
  }

  if (!searchResults.length) {
    return null;
  }

  return (
    <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg py-2 z-50">
      {searchResults.map((result) => (
        <button
          key={result.id}
          onClick={() => onSelect(result)}
          className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-start">
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">{result.title}</div>
              <div className="text-xs text-gray-500">{result.subtitle}</div>
            </div>
            <span className="text-xs text-gray-400 uppercase">{result.type}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default SearchDropdown;
