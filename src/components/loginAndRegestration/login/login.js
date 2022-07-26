
import style from "./login.module.css";
import logo from "../../../img/login__block/logo.svg"
import { NavLink } from 'react-router-dom';
import React from "react";
import axios from "axios";



class Login extends React.Component {
  constructor() {
    super();
    this.state = { value: 'привет' };
    this.tryLogin = this.tryLogin.bind(this)

  }

  //Изменяем this.state.value при изменении инпута:
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  tryLogin(event) {

    event.preventDefault()
    axios.get(`http://185.94.164.62/newapi/auth`, {

    })
      .then(res => {
        console.log(res)
      })

  }
  render() {
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
              <input value={this.state.value} onChange={this.handleChange.bind(this)} />
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
              <button onClick={this.tryLogin} type="submit">
                <NavLink to={"/workspace"}>
                  Войти
                </NavLink>
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
  };
}

export default Login;