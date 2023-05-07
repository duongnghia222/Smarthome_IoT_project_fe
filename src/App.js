import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { ColorModeContext, useMode } from "./theme";
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import Dashboard from "./components/Dashboard";
import AI from "./pages/AI/AI";
import Control from "./pages/ControlDevice/Control";
import Notification from "./pages/Notification/Notification";
import Datalog from "./components/Datalog/Datalog";
import { useGlobalContext } from "./context/index";
import client from "./utils/adafruit";

const App = () => {
  const [theme, colorMode] = useMode();
  const { user } = useAuthContext();
  console.log("line 20", user);
  
  // const {
  //   setTemperature,
  //   setLightIntensity,
  //   setHumidity,
  //   setLightBtn,
  //   setPumperBtn,
  //   setAirBtn,

  // } = useGlobalContext();

  // if (user) {
  //   client.on("message", (topic, message, packet) => {
  //     console.log("Received '" + message + "' on '" + topic + "'");
  //     switch (topic.split("/")[2]) {
  //       case "bbc-humid":
  //         setHumidity(message.toString());
  //         break;
  //       case "bbc-temp":
  //         setTemperature(message.toString());
  //         break;
  //       case "bbc-light":
  //         setLightIntensity(message.toString());
  //         break;
  //       case "bbc-fan":
  //         setAirBtn(message.toString());
  //         break;
  //       case "bbc-pump":
  //         setPumperBtn(message.toString());
  //         break;
  //       case "bbc-led":
  //         setLightBtn(message.toString());
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div id={theme.palette.mode}>
          <BrowserRouter>
            <Routes>
              {user ? (
                <Route element={<WebsiteLayout />}>
                  <Route path="" element={<Dashboard />} />
                  <Route path="control" element={<Control />} />
                  <Route path="datalog" element={<Datalog />} />
                  <Route path="ai" element={<AI />} />
                  <Route path="notification" element={<Notification />} />
                  <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
              ) : (
                <>
                  <Route path="/" element={<Navigate replace to="login" />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="*" element={<Navigate replace to="login" />} />
                </>
              )}
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
