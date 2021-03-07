import React from 'react'
import './CardList-component.css'
import {Card} from '../Card/Card-component'

export  const CardList=(props)=>{return(  
<div className="cardClass">
{props.users.map(user=><Card key={user.id} user={user} />)}
</div>)}