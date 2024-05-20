import React from 'react'
import Button from '../bnts/Button'
import styles from './ProductCard.module.scss'

const ProductCard = ({item, goBasket, goWishlist}) => {
  return (
    <div className={styles.container}>
        <div className={styles.image}>
             <img src={item.thumbnail} alt="product" />
        </div>
     
      <div className={styles.write}>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <p className={styles.pre}>{item.description}</p>
        <div className={styles.btn}>
            <Button text={'Add to BASKET'} onclick={goBasket} />
            <Button text={'Add to WISHLIST'} onclick={goWishlist}/>
        </div>
      </div>
    </div>
  )
}

export default ProductCard