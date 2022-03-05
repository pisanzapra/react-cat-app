import classes from "./Reject.module.css";

const Reject = (props) => {
  return (
    <button onClick={props.fetchCatHandler} className={classes.reject}>
      Reject
    </button>
  );
};

export default Reject;
