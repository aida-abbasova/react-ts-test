import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import styles from './Filter.module.scss';
import concat from 'lodash/concat';
import filter from 'lodash/filter';
import {filterProducts, getProducts } from '../store/actions';

const Filter = () => {
  const [isCheckedAll, setIsCheckedAll] = useState<string[]>([]);
  const dispatch = useDispatch();


  const models = ['Canon', 'Fujifilm', 'Nikon', 'Panasonic', 'Leica', 'Olympus', 'Pentax',
  'Sigma', 'General Electrics', 'Zenit' ];


  return(
    <div className={styles.filter}> 
      <input type ='submit' value='Показать результат' onClick={()=> dispatch(filterProducts(isCheckedAll))} className={styles.result}/> 
      <input type='reset' value='Очистить фильтр' onClick={()=>dispatch(getProducts())}className={styles.clear}/>
      <div>
        <h5 className={styles.title}>Производитель</h5>
        <div className={styles.checkboxs}>
       
            {models.map((item, index) => (
                 <div>
              <input type='checkbox' key={index} onChange={(event) => {
                console.log("Filter -> event.target.value", event.target.checked)
              if (event.target.checked) {
                 const newChacked: any = concat(isCheckedAll,item);
                setIsCheckedAll(newChacked);
                }
                else {
                  const newChacked: any = filter(isCheckedAll,(itemInCheck) => item !== itemInCheck);
                  setIsCheckedAll(newChacked);
                }
              }} 
             // checked={!!models.find((i)=> i === item)}
              checked={isCheckedAll.includes(item)} className={styles.check} />
              <p>{item}</p>
              </div>
            )
            )}
        </div>
      </div>
    </div>
  )
}
 export default Filter;