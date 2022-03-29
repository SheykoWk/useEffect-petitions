import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  const [pokemon, setPokemon] = useState('pikachu')
 
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    axios.get(url)
    .then(res => console.log(res))
    .catch(error => console.log(error));


  }, [pokemon])



  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setPokemon('charizard')}>Change to Charizard</button>
      </header>
    </div>
  );
}

export default App;
