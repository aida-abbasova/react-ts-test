import React from 'react';
import styles from './Product.module.scss';
import { Product } from '../../store/reducer';
import Param from './Param';
import { useDispatch } from "react-redux";
import {ReactComponent as SVG} from '../../assets/favourite-active.svg';
import { favourite } from '../../store/actions';



interface Props{
  item?:Product,
}


const OneProduct = (props:Props) => {
  const { item } = props;
  const dispatch = useDispatch();
  //const image = require('../../assets/image.jpg')
  return(
    <div className={styles.product}> 
    <p className={styles.apt}>`Apt. ${item?.code}`</p>
      <img src={require('../../assets/image.jpg')}  alt='loading' className={styles.image}/>
      <div className={styles.avaibilitys}>
        <img src={require('../../assets/path.png')} alt='loading' className={styles.check}/>
      {item?.availability ? (
        <p className={styles.avaibility}>в наличии</p>
      ):(
        <p className={styles.avaibility}>временно отсутствует</p>
      )}
      </div>
      <p className={styles.title}>{item?.title}</p>
      <div className={styles.params}> 
      {item && item?.params?.map((param, index) => (
        <Param key={index} name={param.name} value={param.value} />
    ) )}
    </div>
    <div>
    <div className={styles.button} >
      <img src={require('../../assets/cart.png')}  alt='loading' className={styles.cart}/>
      <p className={styles.button__text}>Купить</p>
    </div>
      <SVG className={(item?.inFav) ? styles.svgactive : ''} onClick={() => dispatch(favourite(item?.id))}/>
    </div>
    </div>
  )
}
 export default OneProduct;