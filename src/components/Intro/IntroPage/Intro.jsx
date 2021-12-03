import classes from "./Intro.module.scss";
import { motion, useTransform, useViewportScroll } from "framer-motion";
function Intro() {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, (latest) => latest * 0.25);
  const opacity = useTransform(scrollY, [-100, 0, 100], [0.5, 1, 0]);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className={classes["intro-background"]}
    >
      <motion.h1
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 1 }}
        style={{ translateY: y }}
        className={classes.letter1}
      >
        STJEPAN'S
      </motion.h1>
      <div className={classes.line1}></div>

      <motion.h1
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 1 }}
        style={{ translateY: y }}
        className={classes.letter2}
      >
        PORTFOLIO
      </motion.h1>
      <div className={classes.line2}></div>
      <motion.h6 style={{ opacity: opacity }} className={classes.scroll}>
        scroll to begin
      </motion.h6>
    </motion.div>
  );
}

export default Intro;
