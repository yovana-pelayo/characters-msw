import { useState } from 'react';

export default function Search({ query, setQuery }) {
  const [value, setValue] = useState('');
  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search by name..."
      />
      <button>Search</button>
    </div>
  );
}
