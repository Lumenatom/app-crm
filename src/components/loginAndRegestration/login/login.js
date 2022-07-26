
import style from "./login.module.css";
import logo from "../../../img/login__block/logo.svg"
import { NavLink } from 'react-router-dom';
import React from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Login extends React.Component {

  constructor() {


    super();
    this.state = {username: '', password: ''};
    this.tryLogin = this.tryLogin.bind(this)

  }

  //Изменяем this.state.value при изменении инпута:
  handleChange(event) {
    this.setState({username: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }
  tryLogin(event){

    event.preventDefault()
    axios({
      method: 'post',
      url: `http://185.94.164.62/newapi/auth/`,
      data: {
        'username': this.state.username,
        'password': this.state.password
      }
    }).then(response => {
      let data = response.data
      if('error' in data){
        toast.error("Неверный логин или пароль!")
      }else {
        localStorage.setItem('access_token', response.data['access_token'])
        toast.success("Успешно")

      }
    })

  }
  render() {
    return (
        <div className={style.login}>
          <div className={style.login__logo}>
            <NavLink to={'/'}>
              <img src={logo}/>
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
                <input value={this.state.username} onChange={this.handleChange.bind(this)} />
              </label>
              <label className={style.inputs}>
                <h2>
                  Пароль
                </h2>
                <input type="password" value={this.state.password} onChange={this.handleChangePassword.bind(this)} />
                <ToastContainer />

              </label>
              <label className={style.checkbox}>
                <input type="checkbox"/>
                Запомнить
              </label>
              <label className={style.button_submit}>
                <button onClick={this.tryLogin} type="submit">
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
  };
}

export default Login;