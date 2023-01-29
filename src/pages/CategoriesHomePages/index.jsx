import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CategoriesCard from '../../components/CategoriesCard';
import { load_categories } from '../../requests/categories_req'
import s from "./index.module.css"

export default function CategoriesPages() {

    const dispatch = useDispatch();
    const category = useSelector(state => state.category);

    useEffect(() => {
        dispatch(load_categories)
    }, []);

  return (
    <div className={["wrapper", s.category].join(" ")}>
        <h1>Categories</h1>
        <div className={s.category_block}>
            {
                category.map((el, index) => index >= 0 && index <= 3 ? <CategoriesCard key={el.id} categorys={el.id} {...el} /> : "")
            }
        </div>
    </div>
  )
}
