import {
  faBell,
  faCaretDown,
  faGear,
  faSignOut,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useContext } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./style.scss";


const username = "duongnghia222";



function TimeOfDay() {
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setTimeOfDay("sáng");
    } else if (currentHour >= 12 && currentHour < 18) {
      setTimeOfDay("chiều");
    } else {
      setTimeOfDay("tối");
    }
  }, []);

  return <p>Buổi {timeOfDay ? timeOfDay : "sáng"} tốt lành</p>;
}

export default function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { dispatch } = useAuthContext();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT", payload: null });
  };
  return (
    <div className="header-home">
      <div className="header-home-wrap">
        <div className="header-home-left">
          <h3>Chào mừng {username}</h3>
          <TimeOfDay />
        </div>
        <div className="header-home-right">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <div>
            <FontAwesomeIcon icon={faGear} />
          </div>
          <div>
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="name-user space-x-5">
            <FontAwesomeIcon icon={faUser} className="px-3"/>
            <h2 className="">{username}</h2>
            {/* <FontAwesomeIcon icon={faCaretDown} /> */}
            <button onClick={handleLogout} className="px-5 hover: font-bold py-2 rounded-full cursor-pointer">
              <FontAwesomeIcon icon={faSignOut} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
