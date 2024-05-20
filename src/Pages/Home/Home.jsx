import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../Components/Cards/ProductCard'
import FeaturedStories from '../../Components/FeaturedStories/FeaturedStories'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import LovingParents from '../../Components/LovingParents/LovingParents'
import Steps from '../../Components/Steps/Steps'
import WaitingChildrens from '../../Components/WaitingChildrens/WaitingChildrens'
import style from './Home.module.scss'

const Home = () => {

  const [data, setData] = useState([]);

    const getData = () => {
        axios.get('https://dummyjson.com/products?limit=6')
        .then((res) => {
            setData(res.data.products)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const goBasket = (product) => {
        axios.post('https://664b52b135bbda10987c75d3.mockapi.io/quliyev/basket/basket', product)
    }


    const goWishlist = async (product) => {
       await axios.get('https://664b52b135bbda10987c75d3.mockapi.io/quliyev/basket/wishlist')
        .then((res) => {
            const wish = res.data
            const prover = wish.find(item => item.id === product.id)
            if (prover) {
                alert('artiq movcuddur!!!')
            }else(
                axios.post('https://664b52b135bbda10987c75d3.mockapi.io/quliyev/basket/wishlist', product)
            )
        })
    }

  return (
    <div className={style.main}>
      <Header/>
      <div style={{width:'80%' , display:'flex' , alignItems:'center' , justifyContent:'space-between', flexWrap:'wrap'}}>
        {data && data.map(item => <ProductCard item={item} goBasket={() => goBasket(item)} goWishlist={() => goWishlist(item)}/>)}
      </div>
      <LovingParents/>
      <Steps/>
      <WaitingChildrens/>
      <FeaturedStories/>
      <Footer/>

    </div>
  )
}

export default Home