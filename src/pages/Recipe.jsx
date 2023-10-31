import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../api";

import Preloader from "../Components/Preloader";

function Recipe() {
  const { id } = useParams();
  const [recipe, showRecipe] = useState({});
  useEffect(() => {
    getMealById(id).then((data) => showRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!recipe ? (
        <Preloader />
      ) : (
        <div id={recipe.idMeal} className="recipe">
          <div className="card-image">
            <img alt="imgMeal" src={recipe.strMealThumb} />
          </div>
          <div className="card-content">
            <span className="card-title">{recipe.strMeal}</span>
            <p>{recipe.strInstructions}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Recipe;
