import React from "react";
import Header from "../header/header";
import Nav from "../nav/nav";
import style from "./shop.module.css";

const Shop = () => {
  return (
    <div className={style.shop}>
      <Nav />
      <Header />
      <div className={style.container}>
        <div className={style.container}>
          <div className={style.content}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop