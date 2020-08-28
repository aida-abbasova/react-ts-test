import React from 'react';
import styles from './Product.module.scss';

interface Props {
  name: string,
  value: string,
}

const Param = (props: Props) => {
  const { name, value } = props;

  return (
    <div className={styles.forParam}>
      <p className={styles.param}>{name}</p>
      <p className={styles.value}>{value}</p>
    </div>
  )
}
export default Param;