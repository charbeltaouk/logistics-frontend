import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import InputOutlined from "./InputOutlined";
import BtnOutlined from "./BtnOutlined";
 
const CardProduct = () => {
  return (
    <div className="customer-promotion pb-2 mb-4">
      <div className="text-end pe-2 pt-1  ">
        <HighlightOffIcon
          color="error"
          fontSize="small"
          className="circel-delete-icon"
        />
      </div>
      <div className="row  pb-2  mx-1">
        <div className="col-md-4 col-sm-6">
          <InputOutlined
            lable="Product Name"
            defaultValue="Product Name"
            type="text"
          />
          <InputOutlined lable="Category" defaultValue="Category" type="text" />
        </div>
        <div className="col-md-3 col-sm-6">
          <InputOutlined
            lable="Standrad Price"
            defaultValue="Standrad Price"
            type="text"
          />
          <InputOutlined lable="GST" defaultValue="GST" type="text" />
        </div>
        <div className="col-md-3 col-sm-6">
          <InputOutlined
            lable="Unit Per Box"
            defaultValue="Unit Per Box"
            type="text"
          />
          <InputOutlined
            lable="Priority No."
            defaultValue="Priority No."
            type="text"
          />
        </div>
        <div className="col-md-2 col-sm-6 row gap-2">
          <span className="formsLable align-self-center mb-2">Hide from order</span>
          <div className="gap-2 product-hide-show">
            <div className="mb-2">
              <BtnOutlined title="Show" />
            </div>
            <div>
              <BtnOutlined title="Hide" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
