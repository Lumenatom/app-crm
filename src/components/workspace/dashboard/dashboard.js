import React from "react";
import Header from "../header/header";
import Nav from "../nav/nav";
import style from "./dashboard.module.css";
import down from "../../../img/dashboard__block/down.svg";
import top from "../../../img/dashboard__block/top.svg";

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
            <div className={style.statistics}>
              <div className={style.revenue}>
                <h2>
                  Выручка
                </h2>
                <h4>
                  77,4 ТЫС
                </h4>
                <div className={style.statistic_rating}>
                  <img src={down} alt="rating" />
                  <h5>
                    55%
                  </h5>
                </div>
              </div>
              <div className={style.net_profit}>
                <h2>
                  Чистая прибыль
                </h2>
                <h4>
                  42,4 ТЫС
                </h4>
                <div className={style.statistic_rating}>
                  <img src={top} alt="rating" />
                  <h5>
                    55%
                  </h5>
                </div>
              </div>
              <div className={style.expenses}>
                <h2>
                  Расходы
                </h2>
                <h4>
                  10,5 ТЫС
                </h4>
                <div className={style.statistic_rating}>
                  <img src={top} alt="rating" />
                  <h5>
                    1%
                  </h5>
                </div>
              </div>
              <div className={style.remainder}>
                <h2>
                  Остаток на конец месяца
                </h2>
                <h4>
                  30,5 ТЫС
                </h4>
                <div className={style.statistic_rating}>
                  <img src={top} alt="rating" />
                  <h5>
                    7%
                  </h5>
                </div>
              </div>
              <div className={style.clients}>
                <h2>
                  Кол-во клиентов
                </h2>
                <h4>
                  50
                </h4>
                <div className={style.statistic_rating}>
                  <img src={top} alt="rating" />
                  <h5>
                    30%
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div>4</div>
          <div>5</div>
        </div>


      </div>
    </div>
  )
}

export default Dashboard;