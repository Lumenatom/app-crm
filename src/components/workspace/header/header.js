import React from "react";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        {/* <div className={style.header__date}>
          <button>Сегодня</button>
          <button>Вчера</button>
          <button>Месяц</button>
          <button>Выбрать дату</button>
        </div> */}
        <div className={style.header__user}>
          <h2>
            Андрій Наумець
          </h2>
          <div className={style.user_photo}>
            <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;