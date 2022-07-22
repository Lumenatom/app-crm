import React, { useState } from "react";
import burger_menu from "../../../img/nav__block/menu.png";
import close_menu from "../../../img/nav__block/close.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isActive, setActive] = useState("false");

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? "nav" : "active"}>
      <button className="btn__burger_menu" onClick={toggleClass}>
        {isActive
          ? <img src={burger_menu} />
          : <img src={close_menu} />
        }
      </button>
      <div className="nav__dashboard">
        <h2>
          ГЛАВНАЯ СТРАНИЦА
        </h2>
        <NavLink to={'/'}>
          <img />
          <h2>
            Дашборд
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img />
          <h2>
            Дашборд компании
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img />
          <h2>
            Статистика
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img />
          <h2>
            Офферы
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img />
          <h2>
            Расход | Доход
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img />
          <h2>
            Финансы
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img />
          <h2>
            Форма заказа
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img />
          <h2>
            Список заказов
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img />
          <h2>
            Карты
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img />
          <h2>
            Информация
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img />
          <h2>
            Пользователи
          </h2>
        </NavLink>
      </div>
      <div className="link__dashboard">
        <h2>
          СТРАНИЦЫ
        </h2>
        <NavLink to={'/'}>
          <span>
            #
          </span>
          <h2>
            FAQ
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <span>
            #
          </span>
          <h2>
            Новости
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <span>
            #
          </span>
          <h2>
            Пополнения
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <span>
            #
          </span>
          <h2>
            Карты
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <span>
            #
          </span>
          <h2>
            Платежи
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <span>
            #
          </span>
          <h2>
            API
          </h2>
        </NavLink>
      </div>
    </div >
  )
}

export default Nav;