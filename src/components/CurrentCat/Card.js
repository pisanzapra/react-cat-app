import classes from "./Card.module.css";

const Card = (props) => {
  return <img src={props.cat} className={classes.card} alt="Cat" />;
};

export default Card;
