import React from "react";
import style from "./header.module.css";
import logo from "../../../img/header__block/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        {/* <div className={style.header__inner}>
          <a href="/" className={style.logo}>
            <img src={logo} className={style.logo__img} alt="logo" />
          </a>
          <nav className={style.menu}>
            <ul className={style.menu__list}>
              <li className={style.menu__list}>
                <NavLink to={'/regestration'} className={style.menu__list_link}>Попробовать безплатно</NavLink >
              </li>
            </ul>
          </nav>
        </div> */}
      </div>
    </div>
  )
}

export default Header;