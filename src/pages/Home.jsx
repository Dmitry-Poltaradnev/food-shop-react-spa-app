import { useEffect, useState } from "react";
import CategoryList from "../Components/CategoryList";
import { getAllCategories } from "../api";
import Preloader from "../Components/Preloader";

export const Home = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);
  return (
    <>{!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}</>
  );
};
