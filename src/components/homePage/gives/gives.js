import React from "react";
import style from "./gives.module.css";
import person from "../../../img/gives__block/person.svg";
import system from "../../../img/gives__block/system.svg";
import conversion from "../../../img/gives__block/conversion.svg";
import calendar from "../../../img/gives__block/calendar.svg";
import smile from "../../../img/gives__block/smile.svg";
import people from "../../../img/gives__block/people.svg";
import bg from "../../../img/gives__block/bg.svg";

const Gives = () => {
  return (
    <div className={style.gives}>
      <div className={style.container}>
        <div className={style.gives__top_block}>
          <div className={style.gives__top_block__main}>
            <div className={style.gives__top_block__title}>
              <h2>
                ЧТО ДАЁТ CRM
              </h2>
              <p>
                Программа помогла Кириллу
              </p>
            </div>
            <div className={style.gives__points}>
              <div className={style.points__item}>
                <img src={system} />
                <p>
                  систематизировать данные о клиентах и сделках
                </p>
              </div>
              <div className={style.points__item}>
                <img src={conversion} />
                <p>
                  Повысилась конверсия заявок в продажи
                </p>
              </div>
              <div className={style.points__item}>
                <img src={calendar} />
                <p>
                  сотрудники перестали забывать о делах и срывать сроки
                </p>
              </div>
              <div className={style.points__item}>
                <img src={smile} />
                <p>
                  клиенты стали лояльнее, а прибыль выросла
                </p>
              </div>
            </div>
          </div>
          <div className={style.gives__top_block__image}>
            <img src={person} />
            <p>
              Теперь Кириллу необязательно присутствовать в офисе, чтобы все работали, как нужно, и он может больше времени уделять стратегии компании
            </p>
          </div>
        </div>
        <div className={style.gives__bottom_block}>
          <div className={style.gives__title__bottom_block}>
            <h2>
              Какие проблемы решает crm
            </h2>
          </div>
          <div className={style.gives__description__bottom_block}>
            <div className={style.gives__description_item}>
              <h2>
                Менеджеры забывают обрабатывать заявки?
              </h2>
              <p>
                CRM захватывает заявки с сайта, назначает ответственных менеджеров, ставит им задачи на каждом этапе продажи. Если задача просрочена, руководитель моментально узнает об этом. Вы больше не потеряете ни одного клиента.
              </p>
            </div>
            <div className={style.gives__description_item}>
              <h2>
                Текучка кадров отражается на продажах?
              </h2>
              <p>
                История работы с клиентами собрана в CRM: новый менеджер может сразу войти в курс дела. Ему нужно просто выполнять задачи, которые ставит программа, переводить сделку на новые этапы и грамотно общаться с клиентами.
              </p>
            </div>
            <div className={style.gives__description_item}>
              <h2>
                Сложно проанализировать продажи?
              </h2>
              <p>
                Количество новых лидов, сумма сделок, количество звонков и встреч — CRM выдаст наглядные отчеты по всем бизнес-процессам. CRM даст отчет о каждом сотруднике и поможет вычислить лентяев в отделе продаж.
              </p>
            </div>
            <div className={style.gives__description_item}>
              <h2>
                Менеджер уходит и забирает базу клиентов?
              </h2>
              <p>
                Настройте права доступа в CRM так, чтобы менеджеры видели только своих клиентов — теперь никто кроме вас не будет иметь доступа к полной клиентской базе, и не украдет ее.
              </p>
            </div>
          </div>
        </div>
        <div className={style.feedback}>
          <div className={style.background__img}>
            <img src={people} alt="people" />
            <img src={bg} alt="background" />
          </div>
          <div className={style.feedback__title}>
            <h2>
              Хотите эффективнее управлять бизнесом?
            </h2>
          </div>
          <div className={style.feedback__main_block}>
            <div className={style.main_block__description}>
              <form href="#">
                <label className={style.inputs}>
                  <h2>
                    Ваше имя *
                  </h2>
                  <input />
                </label>
                <label className={style.inputs}>
                  <h2>
                    Телефон *
                  </h2>
                  <input type="number" name="login" />
                </label>
                <p>
                  Отправляя форму, Вы соглашаетесь с Условиями обработки персональных данных
                </p>
                <label className={style.button_submit}>
                  <button type="submit">
                    ХОЧУ!
                  </button>
                </label>
              </form>
              <div className={style.main__block_right}>
                <h3>
                  Закажите видео-экскурсию по CRM-системе!
                </h3>
                <h2>
                  10 минут <br /><span>пользы</span>
                </h2>
                <h4>
                  За 10 минут в формате демонстрации экрана мы расскажем, как S2 решит задачи вашего бизнеса
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Gives;