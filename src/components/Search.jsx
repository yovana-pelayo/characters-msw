// import { useEffect } from 'react';
// import { useState } from 'react';

// export default function Search({ query, setQuery }) {
//   const [value, setValue] = useState('');

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setQuery(value);
//     }, 500);
//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, query, setQuery]);
//   return (
//     <div>
//       <input
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="Search by name..."
//       />
//     </div>
//   );
// }

// debouncing technique, searches after this many seconds
