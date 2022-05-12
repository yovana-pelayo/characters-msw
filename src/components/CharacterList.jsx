import { useEffect, useState } from 'react';
import TypeDrop from './TypeDrop';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterTypes, setFilterTypes] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const data = await fetch(
        'https://pokedex-alchemy.herokuapp.com/api/pokedex'
      );
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    getCharacters();
  }, []);
  const filterByType = (type_2) => {
    console.log('getting data', type_2);
    setFilterTypes(
      characters.filter(
        (characters) => characters.type_2 === type_2 || type_2 === 'all'
      )
    );
  };
  // useEffect(() => {
  //   async function getPokeType() {
  //     const data = await fetch(
  //       'https://pokedex-alchemy.herokuapp.com/api/pokedex/types'
  //     );
  //     const { type } = await data.json();
  //     setTypes(['all', ...data]);
  //   }
  //   getPokeType();
  // }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <>
      <TypeDrop onChange={filterByType} />
      {(filterTypes.length ? filterTypes : characters).map((character) => (
        <div key={character._id}>
          <p> Poke Type: {character.type_2}</p>
          <p>Name: {character.pokemon}</p>
          <img src={character.url_image} height="100px" />
        </div>
      ))}
    </>
  );
}
//sort by!!!
