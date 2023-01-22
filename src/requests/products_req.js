import { loadProducts } from "../store/reducers/products";

export const load_products = categororys => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${categororys}`)
            .then(resp => resp.json())
            .then(json => dispatch(loadProducts(json)))
    }
}