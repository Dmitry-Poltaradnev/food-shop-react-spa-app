import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilteredCategories } from "../api";
import Preloader from "../Components/Preloader";
import { MealsList } from "./MealsList";

function Category() {
  const navigate = useNavigate();

  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    getFilteredCategories(name).then((data) => setMeals(data.meals));
  }, [name]);
  return (
    <>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
      <button className="btn" onClick={() => navigate(-1)}>
        Go back
      </button>
    </>
  );
}
export default Category;
