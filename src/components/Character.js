// Write your Character component here
//import { data } from 'msw/lib/types/context';
import React from 'react';
import styled from 'styled-components'


const StyledApp = styled.div`
text-align:center;
display:flex;
justify-content:center;
width:100%;
.cont{
background-color:rgba(40,75,99,0.74);
margin-top:20px;
border: 3px solid #B4B8AB;
border-radius:15px;
margin-bottom: 20px;
}
    h4{
        font-size: 1.5rem;
        color:white;
    }

`
const Character = (props) =>{



    return(
        
        <div>
            <StyledApp>
            <div>{ props.data.map(char => {
            return <div class = 'cont'><h4>Name: {char.name} Gender: {char.gender} Birth Year: {char.birth_year}</h4></div>
        })}
        </div>
        </StyledApp>
        </div>
    )
}
export default  Character;