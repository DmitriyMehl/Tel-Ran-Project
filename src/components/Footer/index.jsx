import React from 'react'
import s from "./index.module.css"

export default function Footer() {
  return (
    <footer className={["wrapper", s.footer].join(" ")}>
        <div className={s.contact}>
            <h2>Контакты</h2>
            <p>+7 999 999 99 99</p>
            <div className={s.contact_block}>
                <p>instagram</p>
                <p>WhatsApp</p>
            </div>
        </div>
        <div className={s.info_block}>
            <h2  className={s.address}>Адрес</h2>
            <p className={s.street}>г. Космонавтов проезд Космонавтов, д.11</p>
            <p className={s.working_mode}>Режим работы</p>
            <p className={s.round_the_clock}>Круглосуточно</p>
        </div>
    </footer>
  )
}
