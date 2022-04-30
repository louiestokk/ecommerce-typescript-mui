import "./App.css";
import Products from "./components/Products/Products";
import SingleProduct from "./components/Products/SingleProduct/SingleProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { CssBaseline } from "@material-ui/core";
const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
