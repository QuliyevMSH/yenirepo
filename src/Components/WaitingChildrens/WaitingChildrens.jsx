import React from 'react'
import style from './WaitingChildrens.module.scss'

const WaitingChildrens = () => {
    return (
        <div className={style.section}>
            <div className={style.container}>
                <div className={style.waitingChildren}>
                    <h1>WAITING CHILDREN</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
                    <button>Find More Waiting Children</button>
                </div>
                <div className={style.cards}>
                    <div className={style.card}>
                        <img src="https://preview.colorlib.com/theme/adopted/img/children_3.jpg" alt="" />
                        <div className={style.content}>
                            <h1>Mark, <span>12 yrs. old</span></h1>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src="https://preview.colorlib.com/theme/adopted/img/children_3.jpg" alt="" />
                        <div className={style.content}>
                            <h1>Mark, <span>12 yrs. old</span></h1>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src="https://preview.colorlib.com/theme/adopted/img/children_3.jpg" alt="" />
                        <div className={style.content}>
                            <h1>Mark, <span>12 yrs. old</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaitingChildrens