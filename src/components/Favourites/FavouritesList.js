import classes from "./FavouritesList.module.css";

const FavouritesList = (props) => {
  return (
    <ul class={classes["favourites-list"]}>
      {props.faves.map(function (fave, faveIndex) {
        return (
          <li key={faveIndex} class={classes["favourites-item"]}>
            <img src={fave} class={classes["favourites-img"]} alt="A favourited cat" />
            <button
              onClick={() => props.removeFave(fave)}
              class={classes.remove}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FavouritesList;
