import { motion } from "framer-motion";

import { textAnimationLeft, textAnimationRight } from "../App";

import "./HappyDay.css";

export const HappyDay = () => {
  return (
    <motion.section initial="hidden" whileInView="visible" className="day">
      <div className="container">
        <motion.h2 variants={textAnimationRight} className="day-title">
          Программа свадебного дня
        </motion.h2>
        <ul className="day-list">
          <motion.li variants={textAnimationLeft} className="day-date">
            19 июля 2024 г.
          </motion.li>
          <motion.li variants={textAnimationRight} className="day-item">
            <div className="block-time">
              <span className="time">19:30</span>
            </div>
            <div className="block-descr">
              <p className="descr-title">Регистрация в ЗАГСе</p>
              <p className="descr-text">Дворец бракосочетания № 2</p>
              <p className="descr-text">
                Адрес:
                <a
                  href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.374434%2C59.942091&mode=whatshere&whatshere%5Bpoint%5D=30.364846%2C59.945303&whatshere%5Bzoom%5D=16&z=13.19"
                  className="descr-link"
                  target="_blank"
                >
                  г. Санкт-Петербруг, Фурштатская улица, 52
                </a>
              </p>
            </div>
          </motion.li>
          <motion.li variants={textAnimationLeft} className="day-item">
            <div className="block-descr">
              <p className="descr-title">Фуршет</p>
              <p className="descr-text">Дворец бракосочетания №2</p>
              <p className="descr-text">
                Адрес:
                <a
                  href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.374434%2C59.942091&mode=whatshere&whatshere%5Bpoint%5D=30.364846%2C59.945303&whatshere%5Bzoom%5D=16&z=13.19"
                  className="descr-link"
                  target="_blank"
                >
                  г. Санкт-Петербруг, Фурштатская улица, 52
                </a>
              </p>
            </div>
            <div className="block-time">
              <span className="time">20:00</span>
            </div>
          </motion.li>
        </ul>
      </div>
    </motion.section>
  );
};
