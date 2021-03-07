import React from 'react'
import './Card-component.css'
export  const Card=props=>{return(  

<div className="card-container" >
<img alt="moster" src={`https://robohash.org/ ${props.user.id}?set=set2&size=180x180`}/>
    <h1>{props.user.name}</h1>
   
    <h3 id="websiteColor">{props.user.website}</h3>
    <h3>{props.user.email}</h3>
    </div>
)}
