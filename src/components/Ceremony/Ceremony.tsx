import { motion } from "framer-motion";
import { textAnimationLeft, textAnimationRight } from "../../app/framer/config";

import "./Ceremony.css";

export const Ceremony = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    className="ceremony"
    id="ceremony"
  >
    <div className="container">
      <motion.h2 variants={textAnimationLeft} className="ceremony-title">
        Церемония
      </motion.h2>

      <motion.a
        variants={textAnimationRight}
        className="ceremony-text"
        href="https://yandex.ru/maps/org/dvorets_brakosochetaniya_2/1063007010/?ll=30.364871%2C59.945392&z=15"
      >
        Дворец бракосочетания № 2
      </motion.a>

      <motion.p variants={textAnimationLeft} className="ceremony-text">
        Россия, Санкт-Петербург, Фурштатская улица, 52
      </motion.p>
    </div>
  </motion.section>
);
