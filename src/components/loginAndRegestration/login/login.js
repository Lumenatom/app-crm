import React from "react";
import style from "./login.module.css";
import logo from "../../../img/login__block/logo.svg"
import { NavLink } from 'react-router-dom';




const Login = () => {
  return (
    <div className={style.login}>
      <div className={style.login__logo}>
        <NavLink to={'/'}>
          <img src={logo} />
        </NavLink>
      </div>
      <div className={style.login__form}>
        <div className={style.buttons__login__registration}>
          <button>
            Вход
          </button>
          <NavLink to={'/regestration'}>
            Регистрация
          </NavLink>
        </div>
        <form href="#">
          <label className={style.inputs}>
            <h2>
              Логин
            </h2>
            <input type="text" name="login" />
          </label>
          <label className={style.inputs}>
            <h2>
              Пароль
            </h2>
            <input type="text" name="login" />
          </label>
          <label className={style.checkbox}>
            <input type="checkbox" />
            Запомнить
          </label>
          <label className={style.button_submit}>
            <button type="submit">
              Войти
            </button>
          </label>
        </form>
        <div className={style.help_password}>
          <button>
            Забыли пароль?
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login;