import React, { useState } from "react";
import burger_menu from "../../../img/nav__block/menu.png";
import close_menu from "../../../img/nav__block/close.png";
import { NavLink } from "react-router-dom";
import { ReactComponent as Dashboard } from "../../../img/icons/dashboard.svg";
import { ReactComponent as Stats } from "../../../img/icons/stats.svg";
import { ReactComponent as Dashboard_company } from "../../../img/icons/stats.svg";
import { ReactComponent as Statistic } from "../../../img/nav__block/statistika.svg";
import { ReactComponent as Offers } from "../../../img/nav__block/Offers.svg";
import { ReactComponent as Income } from "../../../img/nav__block/income.svg";
import { ReactComponent as Finance } from "../../../img/nav__block/finance.svg";
import { ReactComponent as Form } from "../../../img/nav__block/order form.svg";
import { ReactComponent as List } from "../../../img/nav__block/list.svg";
import { ReactComponent as Cards } from "../../../img/icons/dashboard.svg";
import { ReactComponent as Information } from "../../../img/nav__block/info.svg";
import { ReactComponent as Users } from "../../../img/nav__block/users.svg";
import style from "./nav.css";
import dot from "../../../img/nav__block/dot.png";



const Nav = () => {
  const [isActive, setActive] = useState("false");

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div id="menu" className="left_menu">
      <div className="list_holder">
        <ul className="top_menu">
          <li>
            <div className="li_item">
              <div className="li_inherit">
                <a className="li_link">
                  <span aria-hidden="true" className="nyM4MbjjB+aCdYL9moVpWA==">
                    <Dashboard className="menu_svg"/>
                  </span>
                  <span
                    className="FnFY2YlPR10DcnOkjvMMmA==">Дашборд</span></a>
              </div>
            </div>
          </li>
          <li>
            <div className="li_item">
              <div className="li_inherit li_active">
                <a className="li_link">
                  <span aria-hidden="true" className="nyM4MbjjB+aCdYL9moVpWA==">
                    <Stats className="menu_svg"/>
                  </span>
                  <span
                      className="FnFY2YlPR10DcnOkjvMMmA==">Статистика</span></a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div >
  )
}

export default Nav;