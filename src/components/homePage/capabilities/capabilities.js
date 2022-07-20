import React from "react";
import style from "./capabilities.module.css";
import list from "../../../img/capabilities__block/list.svg";
import line from "../../../img/capabilities__block/line_capabilities.svg"
import video from "../../../img/capabilities__block/video_capabilities.svg"
import line_right from "../../../img/capabilities__block/Line_right.svg"
import circle from "../../../img/capabilities__block/circle.svg"
import description from "../../../img/capabilities__block/description.svg"

const Capabilities = () => {
  return (
    <div className={style.capabilities}>
      <div className={style.container}>
        <div className={style.background__img}>
          <img src={line} alt="line" />
          <img src={line_right} alt="line" />
          <img src={circle} alt="focus" />
          <img src={description} alt="описание" />
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
                <img src={list} alt="УЧЁТ" />
                <h3>
                  УЧЁТ ЗАЯВОК И СДЕЛОК
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} alt="УПРАВЛЕНИЕ" />
                <h3>
                  УПРАВЛЕНИЕ ЗАДАЧАМИ И ПРОЕКТАМИ
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} alt="ОНЛАЙН-ОТЧЁТЫ" />
                <h3>
                  НАГЛЯДНЫЕ ОНЛАЙН-ОТЧЁТЫ
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} alt="ПОСТАНОВКА" />
                <h3>
                  ПОСТАНОВКА И МОНИТОРИНГ KPI
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} alt="ЗАПИСЬ" />
                <h3>
                  ЗАПИСЬ КЛИЕНТОВ НА УСЛУГИ
                </h3>
              </div>
            </div>
            <div className={style.list__block_two}>
              <div className={style.item}>
                <img src={list} alt="КОНСТРУКТОР" />
                <h3>
                  КОНСТРУКТОР ДОКУМЕНТОВ
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} alt="КАЛЬКУЛЯТОР" />
                <h3>
                  КАЛЬКУЛЯТОР СТОИМОСТИ УСЛУГ
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} alt="УПРАВЛЕНИЕ" />
                <h3>
                  УПРАВЛЕНИЕ ФИНАНСАМИ
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} alt="ИНТЕГРАЦИЯ" />
                <h3>
                  ИНТЕГРАЦИЯ С ПОЧТОЙ, ТЕЛЕФОНИЕЙ, СОЦСЕТЯМИ, SMS И E-MAIL-РАССЫЛКОЙ
                </h3>
              </div>
              <div className={style.item}>
                <img src={list} alt="АВТОМАТИЗАЦИЯ" />
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
          <img src={video} alt="Видео" />
        </div>
      </div>
    </div>
  )
}

export default Capabilities;