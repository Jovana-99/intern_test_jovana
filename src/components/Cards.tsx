import React from 'react'
import { Card } from './Card'
import { ICardsProps } from '../models/propsModels.js'
import './Cards.css'

const Cards = ({ data }: ICardsProps) => {
    if (!data) {
        return <h1 style={{ color: 'white' }}>Not found</h1>
    } else {
        return (
            <div className="cards">
                {data.map((promo) => (
                    <Card key={promo.id} promo={promo} />
                ))}
            </div>
        )
    }
}

export default Cards
