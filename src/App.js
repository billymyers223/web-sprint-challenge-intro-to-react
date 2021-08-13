import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components'


const StyledApp = styled.div`

  background-color: rgba(255,255,255, 0.73);
  

  width:40%;
  height:auto;
  margin-top:50px;
  border-radius:15px;
  box-shadow: 2px 2px 10px  black;

  @media (max-width: 800px){
    width:90%;
  }
`


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
      console.log(res.data);
      setData(res.data);
     
 
    }).catch(err => console.error(err))
  },[])
  
  return(
    <div className="App">
      <StyledApp>
      <h1 className="Header">Characters</h1>
      <Character data = {data}/>
      </StyledApp>
      </div>
      
 

  );
}

export default App;
