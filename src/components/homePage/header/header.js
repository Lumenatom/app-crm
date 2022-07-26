import React from "react";
import style from "./header.module.css";
import logo from "../../../img/header__block/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  function checkLogin() {
    navigate(`/regestration`);
  }
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.header__inner}>
          <NavLink to={'/dashboard'} className={style.logo}>
            <img src={logo} className={style.logo__img} alt="logo" />
          </NavLink>
          <nav className={style.menu}>
            <ul className={style.menu__list}>
              <li className={style.menu__list}>
                <NavLink to={'/regestration'} onClick={checkLogin} className={style.menu__list_link}>Попробовать беcплатно</NavLink >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header;