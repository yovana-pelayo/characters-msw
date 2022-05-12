import React from 'react';
export default function TypeDrop({ onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <select onChange={handleChange}>
      <option value="all">All</option>
      <option value="poison">Poison</option>
      <option value="NA">NA</option>
      <option value="fairy">Fairy</option>
      <option value="flying">Flying</option>
    </select>
  );
}
