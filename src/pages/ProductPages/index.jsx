import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { load_product } from '../../requests/product_req'
import s from "./index.module.css"

export default function ProductPages() {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);

    const { id } = useParams();

    useEffect(() => {
        dispatch(load_product(id))
    }, []);

    // const title = product.map((el) => el.title);
    // const price = product.map((el) => el.price);
    // const description = product.map((el) => el.description);
    // const discont_price = product.map((el) => el.discont_price);
    // const product_id = product.map((el) => el.id)
    // const image = product.map((el) => {return el.image})

    // const { title, description, price, image } = product;
    
    // const img = `http://localhost:3333${image}`;

    console.log(product);

  return (
    <div>
        {/* <img src={img} alt="{title}" /> */}
        <div>
            {/* <p>{ title }</p> */}
            {/* <p>{ description }</p>
            <div>
                <p>
                    <span>Price: </span>
                    { price }
                </p>
                <p>
                    { discont_price }
                </p>
                <button>Add to cart</button>
            </div> */}
        </div>
    </div>
  )
}
