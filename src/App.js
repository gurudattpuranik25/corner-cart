import MainContainer from "./components/MainContainer/MainContainer";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  const [itemArray, setItemArray] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const addToCart = (product) => {
    const exist = itemArray.find((x) => x.id === product.id);
    if (exist) {
      setItemArray(
        itemArray.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setItemArray([...itemArray, { ...product, quantity: 1 }]);
    }
  };

  const subtractFromCart = (product) => {
    const exist = itemArray.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setItemArray(itemArray.filter((x) => x.id !== product.id));
    } else {
      setItemArray(
        itemArray.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const removeFromCart = (product) => {
    setItemArray(itemArray.filter((item) => item.id !== product.id));
  };

  const searchFilter = (e) => {
    setSearchItem(e.target.value);
  };

  const freeDelivery = () => {
    const free = itemArray.filter((item) => item.freeDelivery === true);
    console.log(free);
    setItemArray(free);
  };

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar itemArray={itemArray} searchFilter={searchFilter} />
      </div>
      <Switch>
        <Route exact path="/">
          <div className="relative">
            <MainContainer
              addToCart={addToCart}
              searchItem={searchItem}
              freeDelivery={freeDelivery}
            />
          </div>
        </Route>
        <Route path="/cart">
          <Cart
            itemArray={itemArray}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            subtractFromCart={subtractFromCart}
          />
        </Route>
        <Route path="/productDetails/:productId">
          <ProductDetails addToCart={addToCart} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
