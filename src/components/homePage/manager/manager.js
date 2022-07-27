import React from "react";
import style from "./manager.module.css";
import manager from '../../../img/manager__block/manager.png';
import group from '../../../img/manager__block/Group.svg';
import topLeft from '../../../img/manager__block/top_left.svg';
import center from '../../../img/manager__block/center.svg';
import Union from '../../../img/manager__block/Union.svg';


const Manager = () => {
  return (
    <div className={style.manager}>
      <div className={style.manager__photo}>
        <img src={manager} alt='manager' />
        <h2>
          Андрей Батарин,<br /> исполнительный директор S2
        </h2>
      </div>
      <div className={style.title}>
        <h2>
          Все важное - в S2
        </h2>
        <div className={style.quote}>
          <img src={Union} />
          <p>
            - Мы разработали S2 - удобную программу «для людей», такую, в которой самим приятно работать. Все свои дела мы ведем в своей системе. Интуитивно понятный интерфейс, широкие возможности аналитики и автоматизации, а также доступная цена, что немаловажно для малого и среднего бизнеса. Сегодня у нас уже около 3000 пользователей в России, Казахстане, на Украине
          </p>
        </div>
      </div>
      <div className={style.background__img}>
        <img src={group} alt="group" />
        <img src={topLeft} alt="group" />
        <img src={center} alt="group" />
      </div>
    </div>
  )
}

export default Manager;