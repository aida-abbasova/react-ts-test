import React, { useEffect } from 'react';
import Product from './components/Product';
import styles from './Products.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../store/actions';
import { State } from '../store/reducer';

interface Props{
  
}
 
const Products = (props:Props) => {

  const dispatch = useDispatch();
  const { products } = useSelector((state: State)=> state)
  console.log(products,'products')
  console.log(products?.length,'products?.length')
  useEffect(() => { 
    if (!products?.length) {
      dispatch(getProducts())
    }
  },[products?.length])
  return(
    <div className={styles.products}> 
    {products && products.map((item, index) => {

    return(
       <Product item={item} />
    )})}
     
    </div>
  )
}
 export default Products;