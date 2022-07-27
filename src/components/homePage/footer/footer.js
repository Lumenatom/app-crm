import React from "react";
import style from "./footer.module.css";
import logo from "../../../img/footer__block/logo.svg";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.description}>
          <h2>
            18/07/2022
          </h2>
          <h2>
            © 2022  Все права защищены
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Footer;