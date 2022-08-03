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
              <div className="li_inherit li_active">
                <a className="li_link">
                  <span aria-hidden="true"
                                                                                                     className="nyM4MbjjB+aCdYL9moVpWA=="><svg
                    width="24" height="24" viewBox="0 0 24 24" className="Dd3PmF2g5h93YIf1bCDdiA=="><g
                    fill="currentColor" fill-rule="nonzero"><path
                    d="M10 14.5a2 2 0 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z"
                    opacity="0.1"></path><path
                    d="M8.062 4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z"></path></g></svg></span><span
                    className="FnFY2YlPR10DcnOkjvMMmA==">Входящие</span></a>
              </div>
            </div>
          </li>
          <li>
            <div className="li_item">
              <div className="li_inherit">
                <a className="li_link">
                  <span aria-hidden="true"
                                                                                                     className="nyM4MbjjB+aCdYL9moVpWA=="><svg
                    width="24" height="24" viewBox="0 0 24 24" className="Dd3PmF2g5h93YIf1bCDdiA=="><g
                    fill="currentColor" fill-rule="nonzero"><path
                    d="M10 14.5a2 2 0 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z"
                    opacity="0.1"></path><path
                    d="M8.062 4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z"></path></g></svg></span><span
                    className="FnFY2YlPR10DcnOkjvMMmA==">Входящие</span></a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div >
  )
}

export default Nav;