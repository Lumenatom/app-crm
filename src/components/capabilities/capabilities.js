import React from "react";
import style from "./capabilities.module.css";
import list from "../../img/list.svg";
import line from "../../img/line_capabilities.svg"
import video from "../../img/video_capabilities.svg"

const Capabilities = () => {
  return (
    <div className={style.capabilities}>
      <div className={style.container}>
        <div className={style.background__img}>
          <img src={line} />
        </div>
        <div className={style.title}>
          <h2>
            возможности CRM
          </h2>
        </div>
        <div className={style.items}>
          <div className={style.list}>
            <div className={style.list__block_one}>
              <div className={style.item}>
                <img src={list} />
                <h3>
                  УЧЁТ ЗАЯВОК И СДЕЛОК
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} />
                <h3>
                  УПРАВЛЕНИЕ ЗАДАЧАМИ И ПРОЕКТАМИ
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} />
                <h3>
                  НАГЛЯДНЫЕ ОНЛАЙН-ОТЧЁТЫ
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} />
                <h3>
                  ПОСТАНОВКА И МОНИТОРИНГ KPI
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} />
                <h3>
                  ЗАПИСЬ КЛИЕНТОВ НА УСЛУГИ
                </h3>
              </div>
            </div>
            <div className={style.list__block_two}>
              <div className={style.item}>
                <img src={list} />
                <h3>
                  КОНСТРУКТОР ДОКУМЕНТОВ
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} />
                <h3>
                  КАЛЬКУЛЯТОР СТОИМОСТИ УСЛУГ
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} />
                <h3>
                  УПРАВЛЕНИЕ ФИНАНСАМИ
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} />
                <h3>
                  ИНТЕГРАЦИЯ С ПОЧТОЙ, ТЕЛЕФОНИЕЙ, СОЦСЕТЯМИ, SMS И E-MAIL-РАССЫЛКОЙ
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} />
                <h3>
                  АВТОМАТИЗАЦИЯ БИЗНЕС-ПРОЦЕССОВ
                </h3>
              </div>
            </div>
          </div>
          <div className={style.description}>
            <hr />
            <p>
              Благодаря CRM менеджеры допускают меньше ошибок, а значит, продают больше и чаще. А руководителю становится легче управлять компанией: он тратит меньше времени на контроль и получает больше ресурсов, чтобы развивать бизнес.
            </p>
          </div>
        </div>
        <div className={style.button__block}>
          <a>
            <button>
              Попробовать бесплатно
            </button>
          </a>
        </div>
        <div className={style.video}>
          <img src={video} />
        </div>
      </div>
    </div>
  )
}

export default Capabilities;