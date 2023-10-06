import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import './Cards.css'

const Cards = ({view, data}) => {

  if(!data){
    return (
      <h1 style={{color:"white"}}>Not found</h1>
    )
  }else{
    return (
      <div className="cards">
        {data.map(promo => <Card key={promo.id} promo={promo}/>)}
      </div>
    )
  }
}

export default Cards