import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
//import { set } from 'msw/lib/types/context';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);

  useEffect(() =>{
    axios.get('https://swapi.dev/api/people')
    .then(res =>{
      console.log(res);
      setData(res.data.results);
    }).catch((err) =>{console.error(err);})
  },[])


  return(
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character data = {data}/>
    </div>
  );
}

export default App;
