import React from "react";
import style from "./aboutUs.module.css";
import person from "../../img/person_header.svg"

const AboutUs = () => {
  return (
    <div className={style.top}>
      <div className={style.container}>
        <div className={style.top__inner}>
          <div className={style.background__img}>
            <img src={person} />
          </div>
          <h1 className={style.top__title}>
            СRM-СИСТЕМЫ – что это такое?
          </h1>
          <p className={style.top__text}>
            Про CRM всегда пишут таким непонятным языком, будто это адронный коллайдер, а на самом деле это просто программа для управления бизнесом. Но что такое CRM и что именно она делает? Как разработчик собственной системы S2, «отвечаю популярно».<br />
            <span>
              Итак, CRM-системы — что это простыми словами?
            </span>
          </p>
          <button className={style.top__btn}>Узнать больше</button>
        </div>
      </div >
    </div >
  )
}

export default AboutUs;