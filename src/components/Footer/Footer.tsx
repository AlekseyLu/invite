import { motion } from "framer-motion";

import { textAnimationRight } from "../../app/framer/config";

import "./Footer.css";

export const Footer = () => (
  <motion.footer
    initial="hidden"
    whileInView="visible"
    className="footer"
    variants={textAnimationRight}
  >
    <p>Олеся 🖤 Алексей</p>
    <p>19 июля 2024 г.</p>
  </motion.footer>
);
