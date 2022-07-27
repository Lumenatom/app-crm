import React from "react";
import style from "./manager.module.css";
import manager from '../../../img/manager__block/manager.png';


const Manager = () => {
  return (
    <div className={style.manager}>
      <div className={style.manager__photo}>
        <img src={manager} alt='manager' />
      </div>
    </div>
  )
}

export default Manager;