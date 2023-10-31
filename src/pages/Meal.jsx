import { Link } from "react-router-dom";

function Meal(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <>
      <div id={idMeal} className="card">
        <div className="card-image">
          <img alt="imgMeal" src={strMealThumb} />
        </div>
        <div className="card-content">
          <p>{strMeal}</p>
        </div>
        <div className="card-action">
          <Link to={`/meal/${idMeal}`} className="btn">
            Watch reciepe
          </Link>
        </div>
      </div>
    </>
  );
}
export default Meal;
