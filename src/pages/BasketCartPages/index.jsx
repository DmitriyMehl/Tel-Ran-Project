import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BasketCard from '../../components/BasketCard';
import { clearCart } from '../../store/reducers/cart'
import s from "./index.module.css"

export default function BasketCartPage() {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className={["wrapper", s.basket_page].join(" ")}>
      {
        cart.length === 0
        ? <div>The cart is empty</div>
        : <div>
          {
            cart.map(el => <BasketCard key={el.id} {...el} />)
          }
        </div>
      }
      <div>
        <p><span>Детали заказа</span>
          {
            cart.reduce((prev, {price, count}) => prev + price * count, 0)
          }
        </p>
        <button onClick={() => dispatch(clearCart())}>Clear the cart</button>
      </div>
    </div>
  )
}
