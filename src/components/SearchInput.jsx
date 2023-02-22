import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchInput({ onSearch }) {
  return (
    <div className="relative flex items-center">
      <FaSearch className="absolute left-2 text-gray-400" />
      <input
        className="w-64 border rounded-md pl-8 py-2"
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
