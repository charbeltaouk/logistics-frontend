import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Products from "./Products";
import Footer from "../components/partials/Footer";
import Finalise from "./Finalise";
import Customers from "./Customers";
import Orders from "./Orders";
import { Vehicles } from "./Vehicles";
import Promotions from "./Promotions";
import { StaffMembers } from "./StaffMembers";

const Main = () => {
  return (
    <>
      <div className="position-relative mainContainer pt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route exact path="products" element={<Products />} />
          <Route exact path="finalise" element={<Finalise />} />
          <Route exact path="customers" element={<Customers />} />
          <Route exact path="orders" element={<Orders />} />
          <Route exact path="vehicles" element={<Vehicles/>} />
          <Route exact path="promotions" element={<Promotions/>} />
          <Route exact path="stuffmember" element={<StaffMembers/>} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Main;
