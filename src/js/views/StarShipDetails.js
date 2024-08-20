import React, { useEffect, useState } from 'react';
import {useParams}from 'react-router-dom'
import { useNavigate } from "react-router-dom";


export function StarShipDetails(){
const {starshipID}=useParams();
console.log({starshipID});
const [starshipData, setStarShipData]= useState (null);
const navigate=useNavigate()
useEffect(()=> {
    fetchStarShipData()
}, []);

const fetchStarShipData = ()=>{
fetch(`https://www.swapi.tech/api/starships/${starshipID}`)
.then ((res)=>res.json())
.then((payload)=>{
    console.log(payload);
    setStarShipData(payload.result.properties);
})

}

    return(

<div>
    <h1>Welcome to StarShip Details</h1>

{!!starshipData &&(
    <div>
        <p>Model: {starshipData.model}</p>
        <p>pilots: {starshipData.pilots}</p>
    </div>
)}
<button type="button" className="btn" onClick={() => navigate("/")}>Return to Home</button>
</div>


    )
}