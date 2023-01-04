import React, { useEffect, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import useDeviceType from "../../hooks/useDeviceType";
import SideBarList from "./SideBarList";
// import BtnOutlined from "../layout/BtnOutlined";
// import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SideBar = ({ isOpen, setOpen }) => {
  const { deviceType } = useDeviceType();
  // const navigate = useNavigate();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(Cookies.get("monjayUser"));
  }, []);

  // const handleLogout = () => {
  //   Cookies.remove("monjayToken");
  //   navigate("/login");
  // };

  useEffect(() => {
    deviceType !== "laptop" ? setOpen(false) : setOpen(true);
  }, [deviceType]);

  const toggleDrawer = () => {
    deviceType !== "laptop" && setOpen(!isOpen);
  };

  return (
    <>
      <SwipeableDrawer
        sx={{
          flexShrink: 0,
        }}
        className={`sidebarContainer w-100 position-fixed ${
          deviceType === "laptop" ? "mt-5" : ""
        }`}
        anchor={"left"}
        open={isOpen}
        onClose={() => toggleDrawer()}
        onOpen={() => toggleDrawer()}
        hideBackdrop={deviceType !== "laptop" ? false : true}
        variant={deviceType !== "laptop" ? "temporary" : "persistent"}
      >
        <div className="initials-circle initials-circle-bg mx-auto mb-3 mt-5">
          <h1>
            {user.split(" ").length > 1
              ? user.split(" ")[0].charAt(0).toUpperCase() +
                user.split(" ")[1].charAt(0).toUpperCase()
              : user.split(" ")[0].charAt(0).toUpperCase()}
          </h1>
        </div>
        <h5 className="my-1 text-center text-capitalize">{user}</h5>
        <div className="sideBarList">
          <SideBarList toggleDrawer={toggleDrawer} />
        </div>
        {/* <div className="mx-auto mt-5">
          <BtnOutlined
            classes="px-5"
            title="LOGOUT"
            handleClick={() => {
              handleLogout();
            }}
          />
        </div> */}
      </SwipeableDrawer>
    </>
  );
};

export default SideBar;
