import React, { useEffect, useState } from 'react';
import {useParams}from 'react-router-dom'
import { useNavigate } from "react-router-dom";


export function CharacterDetails(){
const {characterID}=useParams();
console.log({characterID});
const [characterData, setCharacterData]= useState (null);
const navigate=useNavigate()
useEffect(()=> {
    fetchCharacterData()
}, []);

const fetchCharacterData = ()=>{
fetch(`https://www.swapi.tech/api/people/${characterID}`)
.then ((res)=>res.json())
.then((payload)=>{
    console.log(payload);
    setCharacterData(payload.result.properties);
})

}

    return(

<div>
    <h1>Welcome to Detail Character</h1>

{!!characterData &&(
    <div>
        <p>BirthYear: {characterData.birth_year}</p>
        <p>Gender: {characterData.gender}</p>
    </div>
)}
<button type="button" className="btn" onClick={() => navigate("/")}>Return to Home</button>
</div>


    )
}