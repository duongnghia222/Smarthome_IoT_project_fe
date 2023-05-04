import { faBell, faCaretDown, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useContext } from "react";
import "./style.scss";
const username = localStorage.getItem('user').replace(/['"]/g, '') || 'duongnghia'
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
  return (
    <div className="header-home">
      <div className="header-home-wrap">
        <div className="header-home-left">
          <h2>Chào mừng trở lại, {username}</h2>
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
          <div className="name-user">
            <img src="./man.png" alt="user" className="avar-user" />
            <h2>{username}</h2>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </div>
    </div>
  );
}
