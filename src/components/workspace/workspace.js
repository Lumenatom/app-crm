import React, { useState } from "react";
import Header from "./header/header";
import Nav from "./nav/nav";
import style from "./workspace.module.css";



const Workspace = () => {
  return (
    <div className={style.workspace}>
      <Header />
      <Nav />
    </div>
  )
}

export default Workspace;