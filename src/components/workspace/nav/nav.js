import React, { useState } from "react";
import burger_menu from "../../../img/nav__block/menu.png";
import close_menu from "../../../img/nav__block/close.png";
import { NavLink } from "react-router-dom";
import { ReactComponent as Dashboard } from "../../../img/nav__block/dashboard.svg";
import { ReactComponent as Dashboard_company } from "../../../img/nav__block/dashboard company.svg";
import { ReactComponent as Statistic } from "../../../img/nav__block/statistika.svg";
import { ReactComponent as Offers } from "../../../img/nav__block/Offers.svg";
import { ReactComponent as Income } from "../../../img/nav__block/income.svg";
import { ReactComponent as Finance } from "../../../img/nav__block/finance.svg";
import { ReactComponent as Form } from "../../../img/nav__block/order form.svg";
import { ReactComponent as List } from "../../../img/nav__block/list.svg";
import { ReactComponent as Cards } from "../../../img/nav__block/cards.svg";
import { ReactComponent as Information } from "../../../img/nav__block/info.svg";
import { ReactComponent as Users } from "../../../img/nav__block/users.svg";
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
          <Dashboard className="svg__nav" />
          <h2>
            Дашборд
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <Dashboard_company className="svg__nav" />
          <h2>
            Магазин
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <Statistic className="svg__nav" />
          <h2>
            Закупка
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <Offers className="svg__nav" />
          <h2>
            Отгрузка товара
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <Income className="svg__nav" />
          <h2>
            Товары
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <Finance className="svg__nav" />
          <h2>
            Клиенты
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <Form className="svg__nav" />
          <h2>
            Контрагенты
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <List className="svg__nav" />
          <h2>
            Пользователи
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <Cards className="svg__nav" />
          <h2>
            Финансы
          </h2>
        </NavLink>
        {/* <NavLink to={'/'}>
          <Information className="svg__nav" />
          <h2>
            Информация
          </h2>
        </NavLink>
        <NavLink to={'/'}>
          <Users className="svg__nav" />
          <h2>
            Пользователи
          </h2>
        </NavLink> */}
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