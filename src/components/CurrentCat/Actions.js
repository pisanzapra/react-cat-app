import Button from "../CommonUI/Button";

const Actions = (props) => {

  const cat = props.cat;

  return (
    <div>
      <button onClick={props.fetchCatHandler}>Reject</button>
      <button onClick={() => props.addToFavesHandler(cat)}>Save</button> 
      <Button />
      <Button />
    </div>
  );
};

export default Actions;
