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
          <div>2</div>
        </div>
      </div>
    </div >
  )
}
export default Examples;