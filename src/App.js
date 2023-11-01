import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import Category from "./pages/Category";
import { About } from "./pages/About";
import { NotFoundPage } from "./pages/NotFoundPage";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/category/:name" element={<Category />}></Route>
          <Route path="/meal/:id" element={<Recipe />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
