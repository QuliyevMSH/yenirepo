import React from 'react'
import style from './Steps.module.scss'
import { IoIosArrowDown } from "react-icons/io";


const Steps = () => {
    return (
        <div className={style.section}>
            <div className={style.container}>
                <div className={style.image}>
                    <img src="https://logogram.cl/wp-content/uploads/2022/01/Mesa-de-trabajo-218-2.png" alt="" />

                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dolorum eveniet. Nesciunt nostrum in eos, accusantium rerum pariatur! Adipisci nesciunt deserunt quibusdam hic tempora omnis amet! Quibusdam ducimus eius asperiores, illum voluptatem fuga aliquam sunt animi eveniet fugiat incidunt eligendi?</span>
                    <div className={style.button}>
                        <button>Adopt a child now</button>
                    </div>
                </div>
                <div className={style.steps}>
                    <h1>Steps to adopt & foster a child</h1>
                    <div className={style.list}>
                        <div className={style.step}>
                            <span>1. Getting Started</span>
                            <IoIosArrowDown />
                        </div>
                        <div className={style.step}>
                            <span>2. Getting Started</span>
                            <IoIosArrowDown />
                        </div>
                        <div className={style.step}>
                            <span>3. Getting Started</span>
                            <IoIosArrowDown />
                        </div>
                        <div className={style.step}>
                            <span>4. Getting Started</span>
                            <IoIosArrowDown />
                        </div>
                        <div className={style.step}>
                            <span>5. Getting Started</span>
                            <IoIosArrowDown />
                        </div>
                        <div className={style.step}>
                            <span>6. Getting Started</span>
                            <IoIosArrowDown />
                        </div>
                        <div className={style.step}>
                            <span>7. Getting Started</span>
                            <IoIosArrowDown />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Steps