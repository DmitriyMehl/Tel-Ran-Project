import React from 'react'
import discount from "../../media/discounts.png"
import { useForm } from 'react-hook-form'
import s from "./index.module.css"

export default function DiskountsForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    const num_regex = /^0|[1-9]\d*$/;

    const phone_register = register("phone", {
        required: "* Enter phone number",
        pattern: {
            value: num_regex,
            message: "* Ivalid phone number"
        }
    });

  return (
    <div className={["wrapper", s.discount_block].join(" ")} id="sale">
        <div>
            <img src={discount} alt="Gnome" />
        </div>
        <div className={s.info_block}>
            <h2>Sale 5%</h2>
            <p>for the first order</p>
            <form onSubmit={handleSubmit()} className={s.form_block}>
                <input type="tel" name="phone" placeholder="+7" {...phone_register} />
                <button>Get a discount</button>
                <div className={s.error}>
                    {/* {errors.phone && <p>{errors.phone?.message}</p>} */}
                </div>
            </form>
        </div>
    </div>
  )
}
