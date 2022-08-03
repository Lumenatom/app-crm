import React, {useState} from "react";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";




const Header = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
        if(!isActive) {
            var element = document.getElementById("menu")
            element.classList.add("menu_deactivated")

            var element = document.getElementById("container")
            element.style.marginLeft = '0px';


        }else {
            var element = document.getElementById("menu")
            element.classList.remove("menu_deactivated")

            var element = document.getElementById("container")
            element.style.marginLeft = '305px';

        }
    };
  return (
    <div className={style.header}>
        <div className={style.header_content}>
          <div className={style.left_control}>
          <div>
              <button onClick={toggleClass} type="button"  className={style.top_bar_btn}>

                  <svg className="menu_icon" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" fill-rule="evenodd"
                            d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"></path>
                  </svg>
              </button>
          </div>
          </div>
          <div className={style.right_control}>
              <div>
                  lol
              </div>
          </div>
        </div>
        {/* <div className={style.header__date}>
          <button>Сегодня</button>
          <button>Вчера</button>
          <button>Месяц</button>
          <button>Выбрать дату</button>
        </div> */}
        {/*<div className={style.header__user}>*/}
        {/*  <h2>*/}
        {/*    Андрій Наумець*/}
        {/*  </h2>*/}
        {/*  <div className={style.user_photo}>*/}
        {/*    <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" />*/}
        {/*  </div>*/}
        {/*</div>*/}

    </div>
  )
}

export default Header;