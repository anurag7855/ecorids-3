import React, { useState, useRef, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Mock search results - replace with actual search logic
    const mockResults = query
      ? [
          { id: 1, title: 'Customer #1234', type: 'customer' },
          { id: 2, title: 'Vehicle #5678', type: 'vehicle' },
          { id: 3, title: 'Booking #9012', type: 'booking' },
        ]
      : [];
    setSearchResults(mockResults);
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className={`flex items-center bg-white rounded-full transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-10'
      }`}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 text-gray-500 hover:text-gray-700"
        >
          <BiSearch className="text-xl" />
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className={`outline-none text-sm ${isExpanded ? 'w-full pr-4' : 'w-0'} transition-all duration-300`}
        />
      </div>

      {isExpanded && searchResults.length > 0 && (
        <div className="absolute top-12 left-0 w-full bg-white rounded-xl shadow-lg py-2 z-50">
          {searchResults.map((result) => (
            <button
              key={result.id}
              onClick={() => {
                console.log('Selected:', result);
                setIsExpanded(false);
                setSearchQuery('');
                setSearchResults([]);
              }}
              className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            >
              <span className="text-xs text-gray-500 uppercase">{result.type}</span>
              {result.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
