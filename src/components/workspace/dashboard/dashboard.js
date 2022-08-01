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
              <h2>Pасход <span> 10 000</span> $</h2>
            </div>
            <div className={style.income}>
              <h2>Доход <span>20 000</span> $</h2>
            </div>
            <div className={style.profit}>
              <h2>Профит <span>10 000</span> $</h2>
            </div>
          </div>
          <div className={style.statistics}></div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>


      </div>
    </div>
  )
}

export default Dashboard;