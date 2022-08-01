import React from "react";
import Header from "../header/header";
import Nav from "../nav/nav";
import style from "./shop.module.css";

const Shop = () => {

  const arraySales = [{ id: 1, client: "Саня", price: "22$", date: "22-04-2022" },
  { id: 2, client: "Саня", price: "62$", date: "12-04-2022" },
  { id: 3, client: "Саня", price: "42$", date: "02-04-2022" }];
  return (
    <div className={style.shop}>
      <Nav />
      <Header />
      <div className={style.container}>
        <div className={style.content}>
          <div></div>
          <div className={style.sales}>
            <h2>
              Продажи за смену
            </h2>
            <div className={style.table}>
              <div className={style.id}>
                <h2>ID</h2>
                {
                  arraySales.map((el) => {
                    return (
                      <div className={style.id__map}>
                        < h2 > {el.id}</h2>
                      </div>

                    )
                  })
                }
              </div>
              <div className={style.client}>
                <h2>Клиент</h2>
                {
                  arraySales.map((el) => {
                    return (
                      <div className={style.client__map}>
                        < h2 > {el.client}</h2>
                        <hr />
                      </div>
                    )
                  })
                }
              </div>
              <div className={style.price}>
                <h2>Цена</h2>
                {
                  arraySales.map((el) => {
                    return (
                      <div className={style.price__map}>
                        < h2 > {el.price}</h2>
                      </div>

                    )
                  })
                }
              </div>
              <div className={style.date}>
                <h2>Дата продажи</h2>
                {
                  arraySales.map((el) => {
                    return (
                      <div className={style.date__map}>
                        < h2 > {el.date}</h2>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Shop