import React from "react";
import style from "./regestration.module.css";
import logo from "../../../img/regestration__block/logo.svg";
import { NavLink } from 'react-router-dom';


const Regestration = () => {
  return (
    <div className={style.regestration}>
      <div className={style.regestration__logo}>
        <NavLink to={'/'}>
          <img src={logo} />
        </NavLink>
      </div>
      <div className={style.regestration__form}>
        <div className={style.buttons__login__registration}>
          <NavLink to={'/login'}>
            Вход
          </NavLink>
          <button>
            Регистрация
          </button>
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
          <label className={style.inputs}>
            <h2>
              Повторите пароль
            </h2>
            <input type="text" name="login" />
          </label>
          <label className={style.button_submit}>
            <button type="submit">
              Зарегистрироваться
            </button>
          </label>
        </form>
      </div>
    </div>
  )
}
export default Regestration;

{/* <div className={style.login}>
      <div className={style.login__logo}>
        <img src={logo} />
      </div>
      <div className={style.login__form}>
        <div className={style.buttons__login__registration}>
          <button>
            Вход
          </button>
          <button>
            Регистрация
          </button>
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
    </div> */}