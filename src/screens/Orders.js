import React, { useState } from "react";
import BtnContained from "../components/layout/BtnContained";
import OrderCard from "../components/orders/OrderCard";
import Layout from "../components/partials/Layout";
import SearchInput from "../components/layout/SearchInput";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const nav = useNavigate();

  return (
    <Layout>
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <h3 className="headerTitle my-2">Orders</h3>
        <div className="d-flex flex-wrap gap-2 mainBtn">
          <BtnContained
            title="ORDER PLANING"
            handleClick={() => {
              console.log("ORDER");
            }}
          />
          <BtnContained
            title="ADD NEW ORDER"
            handleClick={() => nav("/addneworders")}
          />
          <BtnContained
            title="ADD COMPLETED ORDER"
            handleClick={() => {
              console.log("add");
            }}
          />
        </div>
      </div>
      <SearchInput value={searchQuery} setValue={setSearchQuery} />
      <div>
        <OrderCard />
      </div>
    </Layout>
  );
};

export default Orders;
