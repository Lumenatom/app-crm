import React, { useState } from "react";
import burger_menu from "../../../img/nav__block/menu.png";
import close_menu from "../../../img/nav__block/close.png";
import { NavLink } from "react-router-dom";
import dashboard from "../../../img/nav__block/dashboard.svg";
import dashboard_company from "../../../img/nav__block/dashboard company.svg";
import statistic from "../../../img/nav__block/statistika.svg";
import offers from "../../../img/nav__block/Offers.svg";
import income from "../../../img/nav__block/income.svg";
import finance from "../../../img/nav__block/finance.svg";
import form from "../../../img/nav__block/order form.svg";
import list from "../../../img/nav__block/list.svg";
import cards from "../../../img/nav__block/cards.svg";
import information from "../../../img/nav__block/info.svg";
import users from "../../../img/nav__block/users.svg";
import "./nav.css";
import dot from "../../../img/nav__block/dot.png";



const Nav = () => {
  const [isActive, setActive] = useState("false");

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? "nav" : "activeNav"}>
      <button className="btn__burger_menu" onClick={toggleClass}>
        {isActive
          ? <img src={burger_menu} />
          : <img src={close_menu} />
        }
      </button>
      <img className="dot" src={dot} alt="главная страница" />
      <h4 className="mainpage">
        Главная
      </h4>
      <div className="nav__dashboard">
        <NavLink to={'/'}>
          <img src={dashboard} alt='dashboard' />
          <h2>
            Дашборд
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img src={dashboard_company} alt='dashboard company' />
          <h2>
            Дашборд компании
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img src={statistic} alt='statistic' />
          <h2>
            Статистика
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img src={offers} alt='offers' />
          <h2>
            Офферы
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img src={income} alt='income' />
          <h2>
            Расход | Доход
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img src={finance} alt='finance' />
          <h2>
            Финансы
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img src={form} alt='form' />
          <h2>
            Форма заказа
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img src={list} alt="list" />
          <h2>
            Список заказов
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img src={cards} alt="cards" />
          <h2>
            Карты
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img src={information} alt="information" />
          <h2>
            Информация
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <img src={users} alt="users" />
          <h2>
            Пользователи
          </h2>
        </NavLink>
      </div>
      {/*<div className="link__dashboard">*/}
      {/*  <img className="dot" src={dot} alt="страници" />*/}
      {/*  <h4>*/}
      {/*    СТРАНИЦЫ*/}
      {/*  </h4>*/}
      {/*  <NavLink to={'/'}>*/}
      {/*    <span>*/}
      {/*      #*/}
      {/*    </span>*/}
      {/*    <h2>*/}
      {/*      FAQ*/}
      {/*    </h2>*/}
      {/*  </NavLink>*/}
      {/*  <NavLink to={'/'}>*/}
      {/*    <span>*/}
      {/*      #*/}
      {/*    </span>*/}
      {/*    <h2>*/}
      {/*      Новости*/}
      {/*    </h2>*/}
      {/*  </NavLink>*/}
      {/*  <NavLink to={'/'}>*/}
      {/*    <span>*/}
      {/*      #*/}
      {/*    </span>*/}
      {/*    <h2>*/}
      {/*      Пополнения*/}
      {/*    </h2>*/}
      {/*  </NavLink>*/}
      {/*  <NavLink to={'/'}>*/}
      {/*    <span>*/}
      {/*      #*/}
      {/*    </span>*/}
      {/*    <h2>*/}
      {/*      Карты*/}
      {/*    </h2>*/}
      {/*  </NavLink>*/}
      {/*  <NavLink to={'/'}>*/}
      {/*    <span>*/}
      {/*      #*/}
      {/*    </span>*/}
      {/*    <h2>*/}
      {/*      Платежи*/}
      {/*    </h2>*/}
      {/*  </NavLink>*/}
      {/*  <NavLink to={'/'}>*/}
      {/*    <span>*/}
      {/*      #*/}
      {/*    </span>*/}
      {/*    <h2>*/}
      {/*      API*/}
      {/*    </h2>*/}
      {/*  </NavLink>*/}
      {/*</div>*/}
    </div >
  )
}

export default Nav;