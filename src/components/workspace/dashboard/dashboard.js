import React from "react";
import Header from "../header/header";
import Nav from "../nav/nav";
import style from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={style.dashboard}>
      <Nav />
      <Header />

      <div className={style.container}>
        <div className={style.content}>
          <div className={style.all_data}>
            <div className={style.consumption}>
              <h2>Pасход<br /> <span> 10 000</span> $</h2>
            </div>
            <div className={style.income}>
              <h2>Доход<br />  <span>20 000</span> $</h2>
            </div>
            <div className={style.profit}>
              <h2>Профит<br />  <span>10 000</span> $</h2>
            </div>
          </div>
          <hr />
          <div className={style.cash_desk}>
            <h2>
              касса компании
            </h2>
            <form>
              <select>
                <option value="1">Сегодня</option>
                <option value="2">Вчера</option>
                <option value="3">Последние 7 дней</option>
                <option value="4">Этот месяц</option>
                <option value="5">Прошлый месяц</option>
              </select>
            </form>
          </div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>


      </div>
    </div>
  )
}

export default Dashboard;