import React from "react";
import style from "./examples.module.css";
import person_window from "../../../img/examples__block/person_window.svg";
import two_people from "../../../img/examples__block/two_people_work.svg";
import person_idea from "../../../img/examples__block/person_idea.svg";


const Examples = () => {
  return (
    <div className={style.examples}>
      <div className={style.container}>
        <div className={style.examples__title}>
          <h2>
            ПРИМЕР работы
          </h2>
          <p>
            как работает CRM в конкретной компании
          </p>
        </div>
        <div className={style.examples__description}>
          <div className={style.description__left_block}>
            <p>
              Кирилл руководит фирмой по <span>установке окон. Раньше клиентов было мало, и все было просто:</span> у каждого нужно принять заказ, выехать на замеры, согласовать стоимость, получить оплату, поставить окна. Но потом <span>клиентов стало не 3, а 33.</span> И началось...
            </p>
          </div>
          <div className={style.description__right_block}>
            <p>
              <span className={style.span__top}>Одному клиенту забыли перезвонить, к другому не выехали на замеры, третьему не отправили расчет</span> стоимости, а у четвертого приняли оплату еще месяц назад, а окна все еще не установили. Покупатели стали уходить к конкурентам, а затраты на новых сотрудников перестали себя окупать. Кирилл не успевал контролировать каждый шаг сотрудников и понял, что <span className={style.span__bottom}> пора что-то менять
              </span>
            </p>
          </div>
        </div>
        <div className={style.examples__ilustration}>
          <img src={person_window} alt="person" />
          <img src={two_people} alt="people" />
          <img src={person_idea} alt="idea" />
        </div>
        <div className={style.examples__process}>
          <div className={style.process__title}>
            <h2>
              Как происходит внедрение CRM?
            </h2>
            <p>Он внедрил CRM-систему, и теперь взаимодействие с каждым клиентом происходит по единому стандарту:
            </p>
          </div>
          <div className={style.process__description}>
            <div className={style.process__description__left}>
              <div className={style.process__item}>
                <span>1</span>
                <p>
                  Когда покупатель оставляет заявку на сайте, в CRM появляется карточка сделки, где указан этап воронки продаж: “Первый звонок”. CRM ставит задачу менеджеру: “Перезвонить клиенту в течение 15 минут”. Если задача будет просрочена, CRM уведомит руководителя
                </p>
              </div>
              <div className={style.process__item}>
                <span>
                  2
                </span>
                <p>
                  Менеджер звонит клиенту прямо из CRM, фиксирует итоги переговоров в карточке сделки и переводит ее на этап “Замеры”. СРМ автоматически создает задачу для замерщика: “Выехать на замеры по сделке (дата, время)”
                </p>
              </div>
              <div className={style.process__item}>
                <span>
                  3
                </span>
                <p>
                  После выезда специалист по замерам прикрепляет к карточке сделки документ с размерами и ТЗ, переводит сделку на этап ”Согласование”
                </p>
              </div>
              <div className={style.process__item}>
                <span>
                  4
                </span>
                <p>
                  Ответственный менеджер получает задачу: “Рассчитать стоимость и позвонить клиенту в течение 2 часов”. Он фиксирует расчеты в CRM и звонит
                </p>
              </div>
            </div>
            <div className={style.process__description__right}>
              <div className={style.process__item}>
                <span>5</span>
                <p>
                  Сделка переходит на этап “Оплата”, CRM автоматически формирует документ по шаблону, куда вставляет имя, адрес, название услуги, сумму, реквизиты оплаты. Менеджеру остается отправить документ клиенту, получить оплату и перевести сделку на последний этап - “Установка”
                </p>
              </div>
              <div className={style.process__item}>
                <span>6</span>
                <p>
                  Специалист по монтажу сразу же получает автоматические уведомление о том, что он должен установить окна по сделке до определенного срока
                </p>
              </div>
              <div className={style.process__item}>
                <span>7</span>
                <p>
                  Руководитель тем временем отслеживает онлайн-отчеты: сколько сделок закрыто, сколько звонков совершил каждый менеджер, какова сумма и количество сделок, какова конверсия заявок, из каких источников приходит больше всего клиентов и пр.
                </p>
              </div>
              <a href="#">
                Внедрить CRM-систему
              </a>
            </div>


          </div>
        </div>
      </div>
    </div >
  )
}
export default Examples;