import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTimer } from "react-timer-hook";

import "./Timer.css";

type Props = {
  expiryTimestamp: Date;
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1.3,
    },
  },
  hidden: { opacity: 0 },
};

const nav = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.5,
      duration: 1,
    },
  }),
  hidden: { opacity: 0, x: 300 },
};

export const Timer: FC<Props> = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  const [isMobile, setIsModile] = useState(
    window.screen.width < 568 ? false : true
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const declensionNum = (num: any, words: string[]) => {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  };

  const day = days < 10 ? "0" + days : days;
  const hour = hours < 10 ? "0" + hours : hours;
  const min = minutes < 10 ? "0" + minutes : minutes;
  const sec = seconds < 10 ? "0" + seconds : seconds;

  const dayTitle = declensionNum(day, ["день", "дня", "дней"]);
  const hourTitle = declensionNum(hour, ["час", "часа", "часов"]);
  const minTitle = declensionNum(min, ["минута", "минуты", "минут"]);
  const secTitle = declensionNum(sec, ["секунда", "секунды", "секунд"]);

  const handleResize = (width: number) => {
    console.log(width);
    if (width < 568) {
      setIsModile(false);
      console.log(true);
    } else {
      setIsModile(true);
      console.log(false);
    }
  };
  console.log(window.screen.width);
  useEffect(() => {
    window.addEventListener("resize", () => handleResize(window.screen.width));
    return () =>
      window.removeEventListener("resize", () =>
        handleResize(window.screen.width)
      );
  }, []);

  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={list}
      className="timer-container"
    >
      <>
        <motion.li custom={1} variants={nav} className="box">
          <div className="number">{day}</div>
          <div className="text">{dayTitle}</div>
        </motion.li>
        <motion.div className="line" custom={2} variants={nav} />
      </>
      <>
        <motion.li custom={3} variants={nav} className="box">
          <div className="number">{hour}</div>
          <div className="text">{hourTitle}</div>
        </motion.li>
        <motion.div className="line" custom={4} variants={nav} />
      </>
      <>
        <motion.li custom={5} variants={nav} className="box">
          <div className="number">{min}</div>
          <div className="text">{minTitle}</div>
        </motion.li>
        {isMobile && <motion.div className="line" custom={6} variants={nav} />}
      </>
      {isMobile && (
        <>
          <motion.li custom={7} variants={nav} className="box">
            <div className="number">{sec}</div>
            <div className="text">{secTitle}</div>
          </motion.li>
        </>
      )}
    </motion.ul>
  );
};
