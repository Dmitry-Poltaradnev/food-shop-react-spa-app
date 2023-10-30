import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  return (
    <>
      <div id={idCategory} className="card">
        <div className="card-image">
          <img alt="imgMeal" src={strCategoryThumb} />
        </div>
        <div className="card-content">
          <span className="card-title">{strCategory}</span>
          <p>{strCategoryDescription.slice(0, 45)}...</p>
        </div>
        <div className="card-action">
          <Link to={`/category/${idCategory}`} className="btn">
            Watch category
          </Link>
        </div>
      </div>
    </>
  );
};
export default CategoryItem;
