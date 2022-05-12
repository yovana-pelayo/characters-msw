import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
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
  return (
    <>
      {characters.map((character) => (
        <div key={character._id}>
          <p> Poke Type: {character.type_2}</p>
          <p>Name: {character.pokemon}</p>

          <img src={character.url_image} height="100px"></img>
        </div>
      ))}
    </>
  );
}
//sort by!!!
