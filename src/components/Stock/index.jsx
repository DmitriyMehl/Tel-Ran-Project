import React from 'react'
import { stock } from '../../data/Stock'
import StockCard from '../StockCard'
import s from "./index.module.css"

export default function Stock() {
  return (
    <div className={["wrapper", s.info_block].join(" ")}>
        <h2>Sale</h2>
        <div className={s.block}>
            {
                stock.map(el => <StockCard key={el.id} {...el} />)
            }
        </div>
    </div>
  )
}
