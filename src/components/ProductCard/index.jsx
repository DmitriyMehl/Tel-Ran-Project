import React from 'react'
import { Link } from 'react-router-dom'
import s from "./index.module.css"

export default function ProductCard({ title, price, discont_price, image, category }) {

    const img = `http://localhost:3333${image}`;
    const product_url = `/products/${category}`
    
    const discont = `${Math.round(100 - discont_price * 100 / price)}`

  return (
    <div className={['wrapper', s.block].join(" ")}>
        <Link to={product_url} className={s.product_block}>
            <div>
                <img src={img} alt={title} />
                <div className={s.price_block}>
                    <p className={s.discont_price}>{ discont_price }p</p>
                    <p className={s.price}>{ price }p</p>
                    <p className={s.discont}>{ discont }%</p>
                </div>
                <p>{ title }</p>
            </div>
        </Link>
    </div>
  )
}
