import React from "react";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.header__date}>
          <button>Сегодня</button>
          <button>Вчера</button>
          <button>Месяц</button>
          <button>Выбрать дату</button>
        </div>
        <div className={style.reader__user}>
          <h2>
            Андрій Наумець
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Header;