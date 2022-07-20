import React from "react";
import style from "./workDescription.module.css";
import line from "../../../img/workDescription__block/line-work.svg";
import rule from "../../../img/workDescription__block/rule-work.svg";
import screenshot from "../../../img/workDescription__block/screnshot_work.svg";


const WorkDescription = () => {
  return (
    <div className={style.work_description}>
      <div className={style.container}>
        <div className={style.information}>
          <div className={style.item_block}>
            <p>
              Увеличивает прибыль
            </p>
            <h2>
              40-50%
            </h2>
          </div>
          <div className={style.item_block}>
            <p>
              Ускоряет работу заявок
            </p>
            <h2>
              В 2 РАЗА
            </h2>
          </div>
          <div className={style.item_block}>
            <p>
              Снижает издержки
            </p>
            <h2>
              БЫСТРО
            </h2>
          </div>
        </div>
        <div className={style.description}>
          <div className={style.title}>
            <div className={style.background__img}>
              <img src={line} alt="попробовать бесплатно" />
            </div>
            <h2>
              КАК РАБОТАЕТ
            </h2>
            <p>
              <span>C</span>ustomer  <span>R</span>elationship  <span>M</span>anagement  <span> = </span>  “управление отношениями с клиентами”
            </p>
          </div>
          <div className={style.block_information}>
            <div className={style.left_block}>
              <img src={rule} alt="правило" />
              <p>
                Как это выглядит в CRM? Представьте таблицу Excel с вашей клиентской базой, но только при щелчке на имя клиента открывается удобная карточка, в которой содержится вся хронология работы с ним — от первого звонка до покупки. Здесь можно прослушать звонки, посмотреть историю покупок, создать документы по шаблону, написать e-mail или sms, поставить задачу
                <br />
                <br />
                Когда клиент звонит вам, CRM предлагает открыть его карточку, и вы сразу приветствуете его по имени. Даже если раньше этого покупателя вел другой менеджер, вы легко ответите на его вопросы без всяких «уточню и перезвоню». CRM сама отправит клиенту sms-сообщение о статусе заказа и напомнит о встрече. В итоге вы экономите время — и свое, и клиента. А значит, делаете его более лояльным и настроенным на покупку
              </p>
            </div>
            <div className={style.right_block}>
              <img src={screenshot} alt="workspace" />
            </div>
          </div>

          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkDescription;