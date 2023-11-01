import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../api";

import Preloader from "../Components/Preloader";

function Recipe() {
  const navigate = useNavigate();
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

      <table className="centered">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Measure</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(recipe).map((key) => {
            if (key.includes("Ingredient") && recipe[key]) {
              return (
                <tr key={key}>
                  <td>{recipe[key]}</td>
                  <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                </tr>
              );
            }

            return null;
          })}
        </tbody>
      </table>

      {!recipe.strYoutube ? null : (
        <div className="row">
          <h5>Video recipe</h5>
          <iframe
            title={id}
            src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
              -11
            )}`}
            allowfullscreen
          ></iframe>
        </div>
      )}
      <button className="btn" onClick={() => navigate(-1)}>
        Go back
      </button>
    </>
  );
}

export default Recipe;
