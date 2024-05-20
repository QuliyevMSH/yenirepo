import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BasketCard from '../../Components/Cards/BasketCard';
import Header from '../../Components/Header/Header';

const Basket = () => {

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get('https://664b52b135bbda10987c75d3.mockapi.io/quliyev/basket/basket')
        .then((res) => {
            setData(res.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const removeItem = (id) => {
        axios.delete(`https://664b52b135bbda10987c75d3.mockapi.io/quliyev/basket/basket/${id}`)
        setTimeout(() => {
            getData()
        }, 400);
    }


  return (
    <div style={{width:'100%', display:'flex' , alignItems:'center', justifyContent:'center', flexDirection:'column', gap:"20px"}}>
    <Header/>
    <div style={{width:'80%' , display:'flex' , alignItems:'center' , justifyContent:'space-between', flexWrap:'wrap'}}>
      {data && data.map(item => <BasketCard item={item} remove={() => removeItem(item.id)}/>)}
    </div>
  </div>
  )
}

export default Basket