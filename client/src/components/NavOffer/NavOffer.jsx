import React from 'react'
import navOfferStyles from './NavOffer.module.scss'

const NavOffer = () => {
  return (
    <div className={navOfferStyles.NavOffer} style={{'display': 'flex'}}>
        <p>Politică de retur de 365 de zile</p>
        <p>Transport 29 Lei - Gratuit peste 249 Lei</p>
        <p>037 170 0172 - (zile lucrătoare 9 am - 5 pm)</p>
    </div>
  )
}

export default NavOffer;