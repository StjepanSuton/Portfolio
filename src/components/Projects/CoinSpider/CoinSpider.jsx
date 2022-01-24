import React, { useEffect, useState } from "react";
import classes from "./CoinSpider.module.scss";
import spaceTourismData from "./DataCoinSpider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import coinSpider from "../../../Assets/CoinSpider.png";
import coinPortfolio from "../../../Assets/CoinSpider2.png";
import useMediaQuery from "@mui/material/useMediaQuery";
function CoinSpider() {
  const matches = useMediaQuery("(max-width:1024px)");
  const [show, setShow] = useState(-1);
  const [use, setUse] = useState(false);
  const [showMore, setShowMore] = useState(false);
  //Retrigera se 4 puta samo od sebe na mountu pa mi se animacija neće dogodit ako stavi triger
  //once true zato stavljen timeout od jedne sekunde kada se stranica učita
  const { ref, inView } = useInView({
    initialInView: false,
    threshold: 0.5,
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
              animate={{ y: showMore ? 0 : 300, opacity: showMore ? 1 : 0 }}
              transition={{ duration: 1 }}
              className={classes["small-container2"]}
            >
              <motion.h6 className={classes.about}>About CoinSpider</motion.h6>
              <motion.p className={classes.p}>
                After tackling typescript I was looking for, a project to hone
                my new skills, and with the growing craze for cryptocurrencies
                building my own crypto site seemed like a fun project. Using
                CoinSpider you can build and track your own portfolio, see the
                history and statistics of over twelve thousand coins and over
                five hundred exchanges and set up your own watch list for your
                favourite coins. To see the site in action visit :<br />
                <a
                  className={classes.a}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://coin-spider-4a6f0.web.app/"
                >
                  https://coin-spider-4a6f0.web.app/
                </a>
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              animate={{ x: showMore ? 0 : 1500, opacity: showMore ? 1 : 0 }}
              transition={{ duration: 1 }}
              className={classes["small-container2"]}
            >
              <motion.h6 className={classes.about}>About CoinSpider</motion.h6>
              <motion.p className={classes.p}>
                After tackling typescript I was looking for, a project to hone
                my new skills, and with the growing craze for cryptocurrencies
                building my own crypto site seemed like a fun project. Using
                CoinSpider you can build and track your own portfolio, see the
                history and statistics of over twelve thousand coins and over
                five hundred exchanges and set up your own watch list for your
                favourite coins. To see the site in action visit :<br />
                <a
                  className={classes.a}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://coin-spider-4a6f0.web.app/"
                >
                  https://coin-spider-4a6f0.web.app/
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
              All your coins on a single web
            </motion.h4>
            <motion.ul
              animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className={classes.ul}
            >
              Technologies:
              {spaceTourismData.map((item, i) => (
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
                  opacity: [0, 1, 0],
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
          <motion.div
            onClick={() => handleShowMore()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }}
            className={classes["slika-container"]}
          >
            <motion.img
              src={coinSpider}
              alt="coinSpider"
              className={classes.slika}
            />
            <motion.img
              src={coinPortfolio}
              alt="coinPortfolio"
              className={classes.slika2}
            />
          </motion.div>
        </div>
      </div>
    </AnimateSharedLayout>
  );
}

export default CoinSpider;
