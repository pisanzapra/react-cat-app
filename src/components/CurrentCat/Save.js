import classes from "./Save.module.css";

const Save = (props) => {
  const cat = props.cat;

  return (
    <button
      onClick={() => props.addToFavesHandler(cat)}
      className={classes.save}
    >
      Save
    </button>
  );
};

export default Save;
