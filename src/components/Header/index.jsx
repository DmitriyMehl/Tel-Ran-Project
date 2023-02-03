import React from 'react'
import logo from "../../media/logo.png"
import shopping_bag from "../../media/shopping_bag.png"
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import s from "./index.module.css"

export default function Header() {
  return (
    <header className={["wrapper", s.header].join(" ")}>
        <div className={s.logo_block}>
          <Link to="/" className={s.link_block}>
            <img src={logo} alt="logo" />
            <p>Catalog</p>
          </Link>
        </div>

        <nav>
            <ul className={s.nav_block}>
                <li>
                  <Link to="/category">Categories</Link>
                </li>
                <li><HashLink to="/#sale">Coupon</HashLink></li>
                <li><HashLink to="/#sale_product">Promotion</HashLink></li>
                <li><HashLink to="/#cantacts">Contacts</HashLink></li>
                <li>
                  <Link to="/cart">
                    <img src={shopping_bag} alt="schopping_bag" />
                  </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
