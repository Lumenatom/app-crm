import React from "react";
import style from "./benefits.module.css";
import sale from "../../../img/benefit__block/sale.svg";

const Benefits = () => {
  return (
    <div className={style.benefits}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>
            пРЕИМУЩЕСТВА
          </h2>
        </div>
        <div className={style.benefits__description}>
          <div className={style.benefits__main}>
            <div className={style.item}>
              <h2>
                Работа в «облаке»
              </h2>
              <p>
                Наша программа является облачным сервисом, а значит, не требует установки на компьютер, в ней можно работать вне офиса из любого места, где есть интернет
              </p>
            </div>
            <div className={style.item}>
              <h2>
                Гибкая система
              </h2>
              <p>
                S2 легко настроить под индивидуальные потребности компании: можно создавать свои поля, воронки продаж, чек-листы для менеджеров, убрать лишние модули и пр.
              </p>
            </div>
            <div className={style.item}>
              <h2>
                Контроль за сотрудниками
              </h2>
              <p>
                CRM фиксирует каждый шаг сотрудников, вы всегда знаете, сколько времени сотрудник провел на рабочем месте, сколько звонков и встреч он совершил, какова сумма его продаж и т.д.
              </p>
            </div>
            <div className={style.item}>
              <h2>
                CRM по карману
              </h2>
              <p>
                У S2 доступная цена и скидки до 30% при оплате за большой период доступа. У других CRM с таким же функционалом ценник в 2-3 раза дороже
              </p>
            </div>
            <div className={style.item}>
              <h2>
                Возможности интеграции
              </h2>
              <p>
                S2 интегрирована с почтой, IP-телефонией, сайтом, сервисами sms-рассылок и мессенджером Telegram. Все входящие заявки автоматически фиксируются в программе
              </p>
            </div>
            <div className={style.item}>
              <h2>
                Экономия времени
              </h2>
              <p>
                CRM автоматизирует работу и экономит ваше время: ставит задачи, контролирует дедлайны, генерирует документы по шаблону, отправляет клиентам sms-рассылки, напоминает о важных звонках и письмах
              </p>
            </div>
          </div>
          <div className={style.benefits__form}>
            <div className={style.background__img}>
              <img src={sale} alt="sale" />
            </div>
            <form href="#">
              <h2>
                Бизнес-приложения S2<br />
                <span>помогают управлять бизнесом</span>
              </h2>
              <p>
                CRM, задачи и проекты, документооборот, финансы, кассы и склад
              </p>
              <label className={style.inputs}>
                <h2>
                  Почта <span>*</span>
                </h2>
                <input />
              </label>
              <label className={style.inputs} >
                <h2>
                  Промокод
                </h2>
                <input type="text" name="login" />
              </label>
              <p>
                Отправляя форму, Вы соглашаетесь с Условиями обработки персональных данных

              </p>
              <label className={style.button_submit}>
                <button type="submit">
                  Попробовать бесплатно
                </button>
              </label>
            </form>
            <h5>
              7 дней бесплатно
            </h5>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Benefits;