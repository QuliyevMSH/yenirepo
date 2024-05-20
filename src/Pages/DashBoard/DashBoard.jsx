import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header';
import DashCard from './DashCard';
import style from './DashBoard.module.scss'

const DashBoard = () => {

    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [search, setSearch] = useState('');

    const [sortType, setSortType] = useState(null); // null: sıralama yok, 'asc': A-Z, 'desc': Z-A

    const btnclick = (e) => {
        setSearch(e.target.value)
        const db = data
        const prover = db.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        setSearchData(prover)
        
    }

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


    const formik = useFormik({
        initialValues: {
          thumbnail: '',
          title: '',
          price: '',
        },
        onSubmit: (values) => {
          axios.post('https://664b52b135bbda10987c75d3.mockapi.io/quliyev/basket/basket', values)
          setTimeout(() => {
            getData()
          }, 400);
          formik.resetForm()
        },
      });

      useEffect(() => {
        if (sortType) {
          setData((prevData) => [...prevData].sort((a, b) => {
            if (sortType === 'asc') {
              return a.title.localeCompare(b.title);
            } else {
              return b.title.localeCompare(a.title);
            }
          }));
        }
      }, [sortType]);

      const handleSort = (type) => {
        setSortType(type);
      };
    


  return (
    <div style={{width:'100%', display:'flex' , alignItems:'center', justifyContent:'center', flexDirection:'column', gap:"20px"}}>
    <Header/>
    <button onClick={() => handleSort("asc")}>A-Z</button>
        <button onClick={() => handleSort("desc")}>Z-A</button>
    <div className={style.inpts}>

        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={btnclick}>ARA</button>
        {searchData && searchData.map(item => <p>{item.title}</p>)}
    </div>
    <div>
    <form onSubmit={formik.handleSubmit}>
       <input
         id="thumbnail"
         onChange={formik.handleChange}
         value={formik.values.thumbnail}
       />
       <input
         id="title"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       <input
         id="price"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       <button type="submit">Submit</button>
     </form>
    </div>
    <div style={{width:'80%' , display:'flex' , alignItems:'center' , justifyContent:'space-between', flexWrap:'wrap'}}>
      {data && data.map(item => <DashCard item={item} remove={() => removeItem(item.id)}/>)}
    </div>
  </div>
  )
}

export default DashBoard