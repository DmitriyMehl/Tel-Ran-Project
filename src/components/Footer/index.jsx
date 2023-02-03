import React from 'react'
import s from "./index.module.css"
import { WhatsAppOutlined, InstagramOutlined } from '@ant-design/icons'

export default function Footer() {
  return (
    <footer className={["wrapper", s.footer].join(" ")} id="cantacts">
        <div className={s.contact}>
            <h2>Contacts</h2>
            <p>+7 999 999 99 99</p>
            <div className={s.contact_block}>
              <div>
                <p><InstagramOutlined className={s.instagram} /></p>
                <p>instagram</p>
              </div>
              <div>
                <p><WhatsAppOutlined className={s.whatsApp} /></p>
                <p>WhatsApp</p>
              </div>
            </div>
        </div>
        <div className={s.info_block}>
            <h2  className={s.address}>Address</h2>
            <p className={s.street}>Cosmonauts passage Cosmonauts, h.11</p>
            <p className={s.working_mode}>Opening hours</p>
            <p className={s.round_the_clock}>Around the clock</p>
        </div>
    </footer>
  )
}
