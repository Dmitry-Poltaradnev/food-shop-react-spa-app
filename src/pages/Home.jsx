import { useEffect, useState } from "react";
import CategoryList from "../Components/CategoryList";
import { getAllCategories } from "../api";
import Preloader from "../Components/Preloader";
import Search from "../Components/Search";
import { useLocation, useNavigate } from "react-router-dom";

export const Home = () => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setfilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setfilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate(`${pathname}?search=${str}`);
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setfilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);
  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
};
