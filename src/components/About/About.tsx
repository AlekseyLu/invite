import { motion } from "framer-motion";

import ALEKSEY from "../../app/images/mini-a.png";
import OLESYA from "../../app/images/mini-o.png";

import { textAnimationLeft, textAnimationRight } from "../../app/framer/config";

import "./About.css";

export const About = () => (
  <section className="about">
    <div className="container">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={textAnimationRight}
      >
        Олеся и Алексей
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={textAnimationLeft}
      >
        Дорогие друзья!
      </motion.p>
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={textAnimationRight}
      >
        Жить, любить, чувствовать. Однажды мы поняли, что нет ничего важнее
        этого. И что идти дальше мы хотим только вместе. А теперь мечтаем, чтобы
        день нашей свадьбы стал красивым и ярким событием на этом увлекательном
        пути.
      </motion.p>
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={textAnimationLeft}
      >
        Мы будем очень рады, если вы разделите этот счастливый день с нами.
      </motion.p>
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={textAnimationRight}
      >
        Увидимся на нашей свадьбе!
      </motion.p>
      <div className="about-photo">
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={textAnimationRight}
          src={ALEKSEY}
          alt="#"
          width={100}
        />
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={textAnimationLeft}
          src={OLESYA}
          alt="#"
          width={100}
        />
      </div>
    </div>
  </section>
);
