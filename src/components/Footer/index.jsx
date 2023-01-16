import React from 'react'
import s from "./index.module.css"

export default function Footer() {
  return (
    <footer className={s.footer}>
        <div>
            <h2>Контакты</h2>
            <p>+7 999 999 99 99</p>
            <div>
                <p>instagram</p>
                <p>WhatsApp</p>
            </div>
        </div>
        <div>
            <h2></h2>
            <p>г. Космонавтов проезд Космонавтов, д.11</p>
            <p>Режим работы</p>
            <p>Круглосуточно</p>
        </div>
    </footer>
  )
}
