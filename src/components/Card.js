import React from 'react'

export const Card = ({promo}) => {
  return (
    <div className="card">
            <div className="container">
                <img src={promo.heroImageUrl} alt="promo_img" />
            </div>
            <div className="details">
                <h3 className="card-title">{promo.name}</h3>
                <p>{promo.description}</p>
                <div className="card-btns">
                    <button className="card-btn btn">{promo.termsAndConditionsButtonText}</button>
                    <button className="card-btn btn">{promo.joinNowButtonText}</button>
                </div>
            </div>
    </div>
  )
}