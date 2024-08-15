import React, { useEffect, useState } from 'react';
import {useParams}from 'react-router-dom'
import { useNavigate } from "react-router-dom";


export function PlanetDetails(){
const {planetID}=useParams();
console.log({planetID});
const [planetData, setPlanetData]= useState (null);

useEffect(()=> {
    fetchPlanetData()
}, []);
const navigate=useNavigate()
const fetchPlanetData = ()=>{
fetch(`https://www.swapi.tech/api/planets/${planetID}`)
.then ((res)=>res.json())
.then((payload)=>{
    console.log(payload);
    setPlanetData(payload.result.properties);
})

}

    return(

<div>
    <h1>Welcome to Planet Details</h1>

{!!planetData &&(
    <div>
        <p>Climate: {planetData.climate}</p>
        <p>Terrain: {planetData.terrain}</p>
    </div>
)}
<button type="button" className="btn" onClick={() => navigate("/")}>Return to Home</button>
</div>


    )
}