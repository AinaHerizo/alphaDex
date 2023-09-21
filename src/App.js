import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [numberPokemons, setNumberPokemons] = useState(0)
  const [allPokemons, setAllPokemons] = useState([])

    useEffect(() => {
    const getPokemons = async() => {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        console.log(res.data.results);
        setNumberPokemons(res.data.count)
        setAllPokemons(res.data.results)
      }
      catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
      }
    }

    getPokemons()
    },[])

    

  return (
    <div>
      <p>il y a en tout {numberPokemons} pokemon</p>
      <ul>
        {allPokemons.map((pok, index) => (
          <li key={index+1}>id={index+1} name={pok.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;