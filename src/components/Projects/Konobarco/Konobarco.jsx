import React, { useState, useEffect } from "react";
import Konobarco1 from "../../../Assets/Konobarco.png";
import classes from "./Konobarco.module.scss";
import konobarcoData from "./DataKonobarco";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
function Konobarco() {
  const matches = useMediaQuery("(max-width:1024px)");
  const [show, setShow] = useState(-1);
  const [use, setUse] = useState(false);
  const [showMore, setShowMore] = useState(false);
  //Retrigera se 4 puta samo od sebe pa mi se animacija neće dogodit ako stavi triger
  //once true zato stavljen timeout od jedne sekunde kada se stranica učita
  const { ref, inView } = useInView({
    initialInView: false,
    threshold: 0.1,
    triggerOnce: use,
  });

  useEffect(() => {
    setTimeout(() => {
      setUse(true);
    }, 1000);
  }, []);

  const handleShowMore = () => setShowMore(!showMore);

  const handleshow = (i) => {
    setShow(i);
  };
  const handleHide = () => {
    setShow(-1);
  };

  return (
    <AnimateSharedLayout>
      <div className={classes.panel} ref={ref}>
        <div className={classes["panel-inner"]}>
          {matches === true ? (
            <motion.div
              animate={{ y: showMore ? 0 : 500, opacity: showMore ? 1 : 0 }}
              transition={{ duration: 1 }}
              className={classes["small-container2"]}
            >
              <motion.h6 className={classes.about}>About KONOBAR.CO</motion.h6>
              <motion.p className={classes.p}>
                KONOBAR.CO was my first ever project that I build from scratch.
                The idea is to simply scan the Qr code with your mobile device.
                Select the drinks you would like to order and wait for the
                waiter to confirm your order. You can even login with your
                facebook or google account to keep track of your commonly
                ordered drinks and collect loyalty rewards which you can redeem
                later. You can try the demo at:{" "}
                <a
                  className={classes.a}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://konobar-co.web.app/"
                >
                  https://konobar-co.web.app/
                </a>
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              animate={{ x: showMore ? 0 : 1500, opacity: showMore ? 1 : 0 }}
              transition={{ duration: 1 }}
              className={classes["small-container2"]}
            >
              <motion.h6 className={classes.about}>About KONOBAR.CO</motion.h6>
              <motion.p className={classes.p}>
                KONOBAR.CO was my first ever project that I build from scratch.
                The idea is to simply scan the Qr code with your mobile device.
                Select the drinks you would like to order and wait for the
                waiter to confirm your order. You can even login with your
                facebook or google account to keep track of your commonly
                ordered drinks and collect loyalty rewards which you can redeem
                later. You can try the demo at:{" "}
                <a
                  className={classes.a}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://konobar-co.web.app/"
                >
                  https://konobar-co.web.app/
                </a>
              </motion.p>
            </motion.div>
          )}
          <motion.div className={classes["small-container"]}>
            <motion.h4
              animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
              transition={{ duration: 1 }}
              className={classes.h4}
            >
              Drinks to your table in four clicks
            </motion.h4>
            <motion.ul
              animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className={classes.ul}
            >
              <div>Technologies:</div>

              {konobarcoData.map((item, i) => (
                <motion.li
                  animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                  transition={{ delay: (i + 5) / 7, duration: 1 }}
                  key={i}
                >
                  {show === i ? (
                    <AnimatePresence>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{ duration: 0.5 }}
                        key={item.description}
                        className={classes.popup}
                      >
                        {matches === true ? "" : item.description}
                      </motion.p>
                    </AnimatePresence>
                  ) : (
                    ""
                  )}
                  <motion.img
                    key={item.title}
                    onMouseEnter={() => handleshow(i)}
                    onMouseLeave={() => handleHide(i)}
                    whileHover={{ scale: 1.1 }}
                    className={classes.img}
                    src={item.img}
                    alt={item.title}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.h6
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className={classes.learnmore}
          >
            Click to learn more
            {matches === true ? (
              <motion.div
                style={{ alignSelf: "center" }}
                animate={{
                  y: [0, 50],
                  opacity: showMore ? [0, 0, 0] : [0, 1, 0],
                }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <ArrowDownwardIcon sx={{ fontSize: 30 }} />
              </motion.div>
            ) : (
              <motion.div
                animate={{ x: 120, opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <ArrowForwardIcon sx={{ fontSize: 30 }} />
              </motion.div>
            )}
          </motion.h6>
          <motion.img
            onClick={() => handleShowMore()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }}
            src={Konobarco1}
            alt="Konobarco1"
            className={classes.slika}
          />
        </div>
      </div>
    </AnimateSharedLayout>
  );
}

export default Konobarco;
