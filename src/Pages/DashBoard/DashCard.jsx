import React from 'react'
import Button from '../../Components/bnts/Button'
import styles from './DashCard.module.scss'

const DashCard = ({item, remove}) => {
  return (
    <div className={styles.container}>
    <img src={item.thumbnail} alt="" />
    <div className={styles.write}>
      <p>{item.title}</p>
      <p>{item.price}</p>
    </div>
      <div className={styles.btn}>
          <Button  text={'DELETE'} onclick={remove}  />
      </div>
  </div>
  )
}

export default DashCard
