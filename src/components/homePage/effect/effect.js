import React from "react";
import style from "./effect.module.css";
import girl from "../../../img/effect__block/girl_laptop.svg";
import point from "../../../img/effect__block/point.svg"
const Effect = () => {
  return (
    <div className={style.effect}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>
            Какой эффект дает CRM
          </h2>
          <p>
            CRM помогает зарабатывать больше и легче, а значит, с ней вы сможете успешнее развивать свой бизнес
          </p>
        </div>
        <div className={style.description}>
          <img src={girl} alt="person" />
          <p>
            В 2015 году консалтинговая компания Capterra опросила 500 компаний и выяснила, что после внедрения CRM их прибыль выросла от 25 до 35%. А у одного нашего клиента — компании «Маршрут ТВ» — после внедрения CRM прибыль увеличилась аж в 1,5 раза!
          </p>
          <p>
            Благодаря СРМ растут и другие показатели. В своих кейсах внедрения мы подробно описываем, как S2 помогла нашим пользователям увеличить прибыль, повысить продуктивность сотрудников и ускорить работу
          </p>
        </div>
        <div className={style.result}>
          <div className={style.result__title}>
            <h2>
              НАШИ ЛУЧШИЕ РЕЗУЛЬТАТЫ
            </h2>
          </div>
          <div className={style.result__benefit}>
            <div className={style.benefit__block}>
              <h2>
                В 2 РАЗА
              </h2>
              <p>
                ускорили обработку
                заявок в компании Lamelia
              </p>
            </div>
            <div className={style.benefit__block}>
              <h2>
                НА 10%
              </h2>
              <p>
                повысили средний
                чек в компании «РЦИБ»
              </p>
            </div>
            <div className={style.benefit__block}>
              <h2>
                В 2 РАЗА
              </h2>
              <p>
                больше стали звонить
                клиентам в компании Grizzly
              </p>
            </div>
            <div className={style.benefit__block}>
              <h2>В 1,5 РАЗА
              </h2>
              <p>
                повысили прибыль
                в компании «Маршрут ТВ»
              </p>
            </div>
            <div className={style.benefit__block}>
              <h2>
                В 6 РАЗ
              </h2>
              <p>
                ускорили подготовку документов
                в компании CoffeRent
              </p>
            </div>
          </div>
        </div>
        <div className={style.profit}>
          <div className={style.profit__title}>
            <h2>
              ЗА КАЖДОЙ ЦИФРОЙ ВЫГОДА реальной компании
            </h2>
            <p>
              в совокупности они позволяют бизнесу быстрее развиваться:
            </p>
          </div>
          <div className={style.profit__point}>
            <div className={style.point__left}>
              <div className={style.point__item}>
                <img src={point} alt="Ускорение" />
                <h3>
                  Ускорение работы менеджеров означает, что они смогут больше времени уделять собственно продажам, а значит, повысить объемы сделок.
                </h3>
              </div>
              <div className={style.point__item}>
                <img src={point} alt="Рост" />
                <h3>
                  Рост продаж и повышение среднего чека дают увеличение прибыли.
                </h3>
              </div>
            </div>
            <div className={style.point__right}>
              <div className={style.point__item}>
                <img src={point} alt="Повышение" />
                <h3>
                  Повышение прибыли дает возможность больше ресурсов вкладывать в рост бизнеса.
                </h3>
              </div>
              <div className={style.point__item}>
                <img src={point} alt="Развитие" />
                <h3>
                  Развитие бизнеса дает еще большую прибыль, а также возможность руководителю стать главой крупной успешной компании.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Effect;