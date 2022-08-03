import React, {useEffect} from "react";
import Header from "../header/header";
import Nav from "../nav/nav";
import style from "./shop.module.css";
import axios from "axios";

const Shop = () => {
  let shift = {

  }
  useEffect(() => {
    async function fetchShift() {
      await axios({
        method: 'get',
        url: `http://185.94.164.62/newapi/shift/`,
      }).then(response => {
        localStorage.setItem('shift', JSON.stringify(response.data))
        console.log(response)
        shift = response.data
      })
    }
    if(localStorage.getItem('access_token') !== null) {
      fetchShift()
    }
  },[]);
  const arraySales = [{ id: 1, client: "Саня", price: "22$", date: "22-04-2022" },
  { id: 2, client: "Саня", price: "62$", date: "12-04-2022" },
  { id: 3, client: "Саня", price: "42$", date: "02-04-2022" }];
  return (
    <div className={style.shop}>
      <Nav />
      <Header />
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.control_panell}>
            <button>{shift['status']}</button>
            <button>Продажа</button>
            <button>Возврат</button>
            <button>Обмен</button>
          </div>
          <div className={style.sales}>
            <h2>
              Продажи за смену
            </h2>
            <table>
              <tbody>
                <tr className={style.tr__top}>
                  <th>ID</th>
                  <th>Клиент</th>
                  <th>Цена</th>
                  <th>Дата продажи</th>
                </tr>
                <tr>
                  <td>11131</td>
                  <td>Саня</td>
                  <td>22$</td>
                  <td>22-04-2022</td>
                </tr>
                <tr>
                  <td>1435345</td>
                  <td>Саня</td>
                  <td>22$</td>
                  <td>22-04-2022</td>
                </tr>
                <tr>
                  <td>234245435</td>
                  <td>Саня</td>
                  <td>22$</td>
                  <td>22-04-2022</td>
                </tr>
                <tr className={style.tr__bottom}>
                  <th>TOTAL</th>
                  <th></th>
                  <th>100$</th>
                  <th></th>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Shop