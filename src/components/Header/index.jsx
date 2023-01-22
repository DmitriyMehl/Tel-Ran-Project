import React from 'react'
import logo from "../../media/logo.png"
import shopping_bag from "../../media/shopping_bag.png"
import { Link } from 'react-router-dom'
import s from "./index.module.css"

export default function Header() {
  return (
    <header className={["wrapper", s.header].join(" ")}>
        <div className={s.logo_block}>
          <Link to="/" className={s.link_block}>
            <img src={logo} alt="logo" />
            <p>Каталог</p>
          </Link>
        </div>

        <nav>
            <ul className={s.nav_block}>
                <li>
                  <Link to="/category">Категории</Link>
                </li>
                <li>Купон</li>
                <li>Акции</li>
                <li>Контакты</li>
                <li><img src={shopping_bag} alt="schopping_bag" /></li>
            </ul>
        </nav>
    </header>
  )
}