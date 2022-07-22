import MainContainer from "./components/MainContainer/MainContainer";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [itemArray, setItemArray] = useState([]);

  const addToCart = (product) => {
    const ifExist = itemArray.includes(product.id);
    if (ifExist) {
      return;
    } else {
      setItemArray([...itemArray, product]);
    }
  };

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar itemArray={itemArray} />
      </div>
      <Switch>
        <Route exact path="/">
          <div className="relative">
            <MainContainer addToCart={addToCart} />
          </div>
        </Route>
        <Route path="/cart">
          <Cart itemArray={itemArray} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
