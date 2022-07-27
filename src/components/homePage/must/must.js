import React from "react";
import style from "./must.module.css";
import person from "../../../img/must__block/person.svg";
import point from "../../../img/must__block/blue_point.svg";
import text from "../../../img/must__block/text.svg";



const Must = () => {
  return (
    <div className={style.must}>
      <div className={style.container}>
        <div className={style.must__title}>
          <h2>
            Что должно быть в СРМ
          </h2>
          <p>
            Для начала нужно понять, чего вы хотите от СРМ-системы
          </p>
        </div>
        <div className={style.must__description}>
          <img src={person} alt='person' />
          <div className={style.description__right_block}>
            <h2>
              ОБЯЗАТЕЛЬНЫЙ набор функциЙ
            </h2>
            <div className={style.item}>
              <div className={style.item__block_one}>
                <div className={style.point}>
                  <img src={point} alt='point' />
                  <p>
                    Модуль учета клиентов, в котором сохраняется вся история взаимодействия с клиентами
                  </p>
                </div>
                <div className={style.point}>
                  <img src={point} alt='point' />
                  <p>
                    Модуль для управления продажами с наглядной воронкой продаж, где указано, на каком этапе находится каждая сделка
                  </p>
                </div>
              </div>
              <div className={style.item__block_two}>
                <div className={style.point}>
                  <img src={point} alt='point' />
                  <p>
                    Аналитика и отчеты в реальном времени в виде наглядных графиков и диаграмм, а также таблиц в детальными данными
                  </p>
                </div>
                <div className={style.point}>
                  <img src={point} alt='point' />
                  <p>
                    Управление задачами выстроенное таким образом, чтобы руководитель моментально получал сообщения о выполненных и просроченных сотрудниками делах
                  </p>
                </div>
              </div>
              <div className={style.item__block_three}>
                <div className={style.point}>
                  <img src={point} alt='point' />
                  <p>
                    Интеграция с почтой, сайтом и  IP-телефонией, чтобы все входящие заявки, по какому каналу они бы ни поступили, сразу фиксировались в CRM
                  </p>
                </div>
                <div className={style.point}>
                  <img src={point} alt='point' />
                  <p>
                    Интерфейс программирования API, который позволяет настроить интеграцию с 1С, корпоративным ПО, мобильными и другими приложениями
                  </p>
                </div>
                <div className={style.point}>
                  <img src={point} alt='point' />
                  <p>
                    Автоматизация бизнес-процессов, которая позволяет не просто ставить задачи, но и отправлять sms-рассылки, менять данные об объектах, напоминать о приближении важных дат — например, о сроке окончания договора или дне рождения
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.image__text_bottom}>
          <img src={text} alt='text' />
        </div>
      </div>

    </div>
  )
}

export default Must;