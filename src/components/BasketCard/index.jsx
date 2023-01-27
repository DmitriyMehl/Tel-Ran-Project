import React from 'react'
import { useDispatch } from 'react-redux'
import { cartDecrement, cartIncrement } from '../../store/reducers/cart';
import s from "./index.module.css"

export default function BasketCard({ id, title, price, image, count }) {

  const dispatch = useDispatch();
  const increment = () => dispatch(cartIncrement(id));
  const decrement = () => dispatch(cartDecrement(id));

  const img = `http://localhost:3333${image}`;

  return (
    <div className={["wrapper", s.basket].join.apply(" ")}>
      <div className={s.basket_block}>
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <p>{ title }</p>
          <div className={s.btn}>
            <button onClick={increment}>+</button>
              { count }
            <button onClick={decrement}>-</button>
          </div>
        </div>
        <div>
          <p>{ price }</p>
          <p>{ count }</p>
          {/* <p>{ price } X { count } = { price * count }</p> */}
        </div>
      </div>
      
    </div>
  )
}
