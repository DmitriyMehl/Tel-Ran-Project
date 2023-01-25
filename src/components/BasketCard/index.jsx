import React from 'react'
import { useDispatch } from 'react-redux'
import { cartDecrement, cartIncrement } from '../../store/reducers/cart';
import s from "./index.module.css"

export default function BasketCard({ id, title, price, discount_price, image, count }) {

  const dispatch = useDispatch();
  const increment = () => dispatch(cartIncrement(id));
  const decrement = () => dispatch(cartDecrement(id));

  const img = `http://localhost:3333${image}`;

  return (
    <div className={["wrapper", s.basket].join.apply(" ")}>
      <div className={s.basket_block}>
        <img src={img} alt={title} />
        <p>{ title }</p>
        <p>{ price } X { count } = { price * count }</p>
        <p>{ discount_price }</p>
        </div>
        <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>    
        </div>
    </div>
  )
}
