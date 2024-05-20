import React from 'react'
import style from './FeaturedStories.module.scss'

const FeaturedStories = () => {
    return (
        <div className={style.section}>
            <div className={style.container}>
                <div className={style.top}>
                    <h1>FEATURED STORIES</h1>
                </div>
                <div className={style.boxs}>
                    <div className={style.box}>
                        <img src="https://preview.colorlib.com/theme/adopted/img/work_thumb_2.jpg" alt="" />
                        
                    </div>
                    <div className={style.box}>
                        <img src="https://preview.colorlib.com/theme/adopted/img/work_thumb_2.jpg" alt="" />

                    </div>
                    <div className={style.box}>
                        <img src="https://preview.colorlib.com/theme/adopted/img/work_thumb_2.jpg" alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedStories