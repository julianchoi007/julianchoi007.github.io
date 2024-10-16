import { useContext } from "react";
import RefContext from "../../context/RefContext";
import { motion } from "framer-motion";
import "./card.css";
const Card = (props) => {
  const appRef = useContext(RefContext);
  const classes = "card " + props.className;
  return (
    <motion.div
      drag
      dragConstraints={appRef}
      whileDrag={{ scale: 1.2 }}
      className={classes}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default Card;
