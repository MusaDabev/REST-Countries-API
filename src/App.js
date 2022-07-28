import Header from "./components/header/Header";
import { SortContext, SortProvider } from "./context/sortContext";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

import classes from "./App.module.css";
import { useContext } from "react";

function App() {
  const {  darkMode } = useContext(SortContext);
  return (
    <div className={`App ${darkMode && classes.darkMode}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
