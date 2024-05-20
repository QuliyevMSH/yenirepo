import React from 'react'
import style from './Header.module.scss'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';



const Header = () => {


  const navigation = useNavigate()

    const goHome = () => {
        navigation('/')
    }
    const goBome = () => {
        navigation('/basket')
    }
    const goWome = () => {
        navigation('/wishlist')
    }
    const goDome = () => {
        navigation('/dashBoard')
    }


  return (
    <div className={style.header}>
      <div className={style.headerTop}>
        <div className={style.container}>
          <div className={style.icons}>
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
          <div className={style.register}>
            <div className={style.sponsor}>
              <span>SPONSOR</span>
            </div>
            <div className={style.login}>
              <span>LOGIN</span>
            </div>
          </div>
        </div>

      </div>
      <div className={style.headerBottom}>
        <div className={style.container}>
          <div className={style.logo}>
            <span>ADOPTED</span>
          </div>
          <nav>
            <ul>
            <li><a onClick={goHome} href>Home</a></li>
            <li><a onClick={goBome}  href>Basket</a></li>
            <li><a  onClick={goWome} href>Wishlist</a></li>
            <li><a onClick={goDome}  href>Admin Panels</a></li>
            <li><a  href="#">Contact</a></li>
            </ul>
          </nav>
          <div className={style.bar}>
            <FaBars />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header