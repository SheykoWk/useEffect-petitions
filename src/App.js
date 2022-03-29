import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import Pokemon from './components/Pokemon';



function App() {
  // Initial states
  const [pokemon, setPokemon] = useState('pikachu')
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonImage, setPokemonImage] = useState('')
  const [pokemonId, setPokemonId] = useState(null)
  const [pokemonAbilities, setPokemonAbilities] = useState([])

  //UseEffects Peticion HTTP
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    axios.get(url)
    .then(res => {
      console.log(res.data)
      setPokemonName(res.data.name)
      setPokemonImage(res.data.sprites.front_default)
      setPokemonId(res.data.id)
      setPokemonAbilities(res.data.abilities)
    })
    .catch(error => console.log(error));

  }, [pokemon])

  console.log(pokemonAbilities)

  return (
    <div className="App">
      <header className="App-header">
        <Pokemon name={pokemonName} image={pokemonImage} id={pokemonId} abilities={pokemonAbilities} />
        <input onChange={(e) => setPokemon(e.target.value)} />
        <button onClick={() => setPokemon('charizard')}>Change to Charizard</button>
      </header>
    </div>
  );
}

export default App;
