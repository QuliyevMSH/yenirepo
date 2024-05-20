import React from 'react'
import Button from '../bnts/Button'
import styles from './ProductCard.module.scss'

const BasketCard = ({ item, remove }) => {
    return (
        <div className={styles.container}>
            <img src={item.thumbnail} alt="product" />
            <div className={styles.write}>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p className={styles.pre}>{item.description}</p>
                <div className={styles.btn}>
                    <Button text={'DELETE'} onclick={remove} />
                </div>
            </div>
        </div>
    )
}

export default BasketCard