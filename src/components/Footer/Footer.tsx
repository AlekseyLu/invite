import { motion } from "framer-motion";

import { textAnimationRight } from "../App";

import "./Footer.css";

export const Footer = () => {
  return (
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
};
