import React, { useEffect, useState } from "react";
import BtnContained from "../components/BtnContained";
import BtnOutlined from "../components/BtnOutlined";
import seacrIcon from "../assets/search.svg";
import StatsCard from "../components/StatsCard";
import PRODUCTS from "../data/products";
import StickyHeadTable from "../components/StickyHeadTable";

const columns = [
  { id: "code", label: "Code", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 150 },
  {
    id: "category",
    label: "Category",
    minWidth: 150,
  },
  {
    id: "price",
    label: "Price",
    minWidth: 50,
  },
  {
    id: "units",
    label: "Units per box",
    minWidth: 50,
  },
  {
    id: "priority",
    label: "Priority",
    minWidth: 50,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
  },
  {
    id: "remove",
    label: "Remove Product",
    minWidth: 100,
  },
  // {
  //   id: "size",
  //   label: "Size\u00a0(km\u00b2)",
  //   minWidth: 170,
  //   align: "right",
  //   format: (value) => value.toLocaleString("en-US"),
  // },
];

const Products = () => {
  const [allProducts, setAllProducts] = useState(PRODUCTS);
  const [productsTotal, setProductsTotal] = useState(0);
  const [productsActive, setTotalActive] = useState(0);
  const [productsHidden, setProductsHidden] = useState(0);
  const [rows, setRows] = useState([]);

  function createData(
    id,
    code,
    name,
    category,
    price,
    units,
    priority,
    status,
    remove
  ) {
    // const density = population / size;
    // return { name, code, population, size, density };
    return {
      id,
      code,
      name,
      category,
      price,
      units,
      priority,
      status,
      remove,
    };
  }

  useEffect(() => {
    setProductsTotal(PRODUCTS.length);
    PRODUCTS.forEach((p) => {
      p.active === true && setTotalActive((prev) => prev + 1);
      p.orderListStatus === "hidden" && setProductsHidden((prev) => prev + 1);

      setRows((prev) => [
        ...prev,
        createData(
          p.id,
          p.code,
          p.name,
          p.category,
          p.price,
          p.unitsPerBox,
          p.priorityNbr,
          p.orderListStatus,
          "Delete"
        ),
      ]);
    });
  }, []);

  useEffect(() => {
    setTotalActive(0);
    setProductsHidden(0);
    setProductsTotal(allProducts.length);
    allProducts.forEach((p) => {
      p.active === true && setTotalActive((prev) => prev + 1);
      p.orderListStatus === "hidden" && setProductsHidden((prev) => prev + 1);
    });
  }, [allProducts]);

  return (
    <div>
      <div className="pageHeader d-sm-flex justify-content-between align-items-center my-4">
        <h3 className="headerTitle">Manage Products</h3>
        <div className="d-flex gap-2">
          <BtnContained title="Add Products" />
          <BtnOutlined title="Manage categories" />
        </div>
      </div>
      <div className="d-flex flex-wrap ">
        <StatsCard title="Total No. of Products" value={productsTotal} />
        <StatsCard title="Active Products" value={productsActive} />
        <StatsCard title="Hidden Products" value={productsHidden} last={true} />
      </div>
      <div className="d-flex justify-content-between align-items-center my-4">
        <h3 className="headerTitle">All Products</h3>
        <div className="searchInputContainer d-flex px-2 py-1">
          <input placeholder="search" className="border-0" />
          <img src={seacrIcon} alt="searchIcon" />
        </div>
      </div>
      <div>
        <StickyHeadTable
          setAllItems={setAllProducts}
          setRows={setRows}
          columns={columns}
          rows={rows}
        />
      </div>
    </div>
  );
};

export default Products;