import React from "react";
import Header from "../header/header";
import Nav from "../nav/nav";
import style from "./purchase.module.css";

const Purchase = () => {
  return (
    <div className={style.purchase}>
      <Nav />
      <Header />
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.new_purchase}>
            <button>
              Новая закупка
            </button>
          </div>
          <div className={style.coming}>
            <h2>
              Приход товара
            </h2>
            <table>
              <tbody>
                <tr className={style.tr__top}>
                  <th>Склад</th>
                  <th>Контрагент</th>
                  <th>Дата</th>
                  <th>Сума</th>
                  <th>Кол-во</th>
                  <th></th>
                </tr>
                <tr>
                  <td>Офис</td>
                  <td>apple</td>
                  <td>2022-04-07</td>
                  <td>20$ | 200₴</td>
                  <td>2</td>
                  <td>
                    <button>
                      Удалить
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Офис</td>
                  <td>apple</td>
                  <td>2022-04-07</td>
                  <td>20$ | 200₴</td>
                  <td>2</td>
                  <td>
                    <button>
                      Удалить
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Офис</td>
                  <td>apple</td>
                  <td>2022-04-07</td>
                  <td>20$ | 200₴</td>
                  <td>2</td>
                  <td>
                    <button>
                      Удалить
                    </button>
                  </td>
                </tr>


              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Purchase;