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
      <div className={classes["small-container"]}>
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 180, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ translateY: y }}
          className={classes.letter1}
        >
          STJEPANS
        </motion.h1>
        <div className={classes.line1}></div>
      </div>
      <div className={classes["small-container"]}>
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 180, opacity: 0 }}
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
      </div>
    </motion.div>
  );
}

export default Intro;
