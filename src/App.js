import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { About } from "./pages/About";
import { NotFoundPage } from "./pages/NotFoundPage";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/contacts" component={<Contacts />} />
          <Route path="/about" component={<About />} />
          <Route path="*" component={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
