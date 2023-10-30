import CategoryItem from "./CategoryItem";

const CategoryList = ({ catalog = [] }) => {
  return (
    <div className="list">
      {catalog.map((food) => (
        <CategoryItem key={food.idCategory} {...food} />
      ))}
    </div>
  );
};

export default CategoryList;
