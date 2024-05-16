import { motion } from "framer-motion";

import { itemsList, listContainer } from "../../app/framer/config";

import { MENU } from "../App/data/constants";

import "./Header.css";

export const Header = () => (
  <header>
    <div className="container">
      <nav>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={listContainer}
          className="nav-list"
        >
          {MENU.map((item, i) => (
            <motion.li custom={i} variants={itemsList} key={i}>
              <a href={item.link}>{item.text}</a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </div>
  </header>
);
