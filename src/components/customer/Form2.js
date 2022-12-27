import React, { forwardRef, useImperativeHandle, useState } from "react";
import InputOutlined from "../layout/InputOutlined";
import validator from "validator";

const Form2 = forwardRef(({ setData }, ref) => {
  const [step2Data, setStep2Data] = useState({
    customername: "",
    email: "",
    phonenumber: "",
    mobilenumber: "",
    directdialnumber: "",
  });
  const [step2Eerrors, setStep2Errors] = useState({
    customername: false,
    email: false,
    phonenumber: false,
    mobilenumber: false,
    directdialnumber: false,
  });

  useImperativeHandle(ref, () => ({
    allVAlid() {
      return allVAlid();
    },
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStep2Data((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validate(name, value);
  };

  const hasError = (name, bool) => {
    setStep2Errors((prev) => {
      return { ...prev, [name]: bool };
    });
  };

  const allVAlid = () => {
    let valid;
    let datas = Object.values(step2Data);
    let errs = Object.values(step2Eerrors);
    errs.includes(true) || datas.includes("")
      ? (valid = false)
      : (valid = true);
    if (valid) {
      setData((prev) => {
        return { ...prev, ...step2Data };
      });
      // setData((prev) => [...prev, ...step2Data]);
    } else {
      Object.entries(step2Data).forEach(([key, val]) => {
        val === "" &&
          setStep2Errors((prev) => {
            return { ...prev, [key]: true };
          });
      });
    }
    return valid;
  };

  const validate = (name, value) => {
    switch (name) {
      case "customername":
        value === "" || value.length < 3
          ? hasError(name, true)
          : hasError(name, false);
        break;
      case "email":
        value &&
          (validator.isEmail(value)
            ? hasError(name, false)
            : hasError(name, true));
        break;
      case "phonenumber":
      case "mobilenumber":
      case "directdialnumber":
        value &&
          (validator.isMobilePhone(value.toString(), ["en-AU"])
            ? hasError(name, false)
            : hasError(name, true));
        break;
      default:
        console.log("");
    }
  };

  return (
    <div>
      <div>
        <InputOutlined
          lable="Customer Name"
          defaultValue="Customer Name"
          type="text"
          name="customername"
          value={step2Data?.customername}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={step2Eerrors?.customername}
          errorMessage="should be at least 3 letters"
        />
      </div>
      <div>
        <InputOutlined
          lable="Email Address"
          defaultValue="Email Address"
          type="email"
          name="email"
          value={step2Data?.email}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={step2Eerrors?.email}
          errorMessage="not a valid email"
        />
      </div>
      <div className="d-md-flex gap-3">
        <InputOutlined
          classes="w-100"
          name="phonenumber"
          id="phonenumber"
          lable="Phone"
          defaultValue="phonenumber"
          type="text"
          value={step2Data?.phonenumber}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={step2Eerrors?.phonenumber}
          errorMessage="not a valid phone number"
        />
        <InputOutlined
          classes="w-100"
          name="mobilenumber"
          id="mobilenumber"
          lable="Mobile"
          defaultValue="mobilenumber"
          type="text"
          value={step2Data?.mobilenumber}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={step2Eerrors?.mobilenumber}
          errorMessage="not a valid Mobile number"
        />
        <InputOutlined
          classes="w-100"
          name="directdialnumber"
          id="directdialnumber"
          lable="Direct Dial Number"
          defaultValue="directdialnumber"
          type="text"
          value={step2Data?.directdialnumber}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={step2Eerrors?.directdialnumber}
          errorMessage="not a valid Direct Dial number"
        />
      </div>
    </div>
  );
});

export default Form2;
