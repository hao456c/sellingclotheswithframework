import React from "react";
//Components
import Home from "./components/Home";
import Homeadmin from "./components/homeadmin";
import Tableadmin from "./components/tableadmin";
import Loginadmin from "./components/loginadmin";
import StatTables from "./components/statadmin";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Details from "./components/Details";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Add from "./components/add";
import Edit from "./components/edit";
//Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from "./components/logout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<Details currentuserid={1} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop category={""} />} />
        <Route path="/shop/detail" element={<Details currentuserid={1} />} />

        <Route path="/logout" element={<Logout />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/stat_revenue" element={<StatTables type={"revune"} />} />
        <Route
          path="/shop/items1/clothes"
          element={<Shop category={"clothes"} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Homeadmin />} />
        <Route path="/admin_staffs" element={<Tableadmin type={"staffs"} />} />
        
        <Route
          path="/admin_customers"
          element={<Tableadmin type={"customers"} />}
        />
        <Route
          path="/admin_cates"
          element={<Tableadmin type={"cates"} />}
        />
        <Route
          path="/admin_products"
          element={<Tableadmin type={"products"} />}
        />
        <Route
          path="/admin_orders"
          element={<Tableadmin type={"orders"} />}
        />
        <Route path="/admin_login" element={<Loginadmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
