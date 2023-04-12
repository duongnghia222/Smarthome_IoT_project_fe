import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext'


import WebsiteLayout from "./layouts/WebsiteLayout";
import LoginLayout from "./layouts/LoginLayout";

import Login from "./pages/Login";
import Signup from './pages/Signup'
import Dashboard from "./components/Dashboard";
import Control from "./pages/Control";
import Datalog from "./components/Datalog/Datalog";
import { useGlobalContext } from './context/index';
import client from './utils/adafruit';

const App = () => {
    const { user } = useAuthContext();
    const { setTemperature, setLightIntensity, setHumidity, setLightBtn, setPumperBtn, setAirBtn,setStrawStatus } = useGlobalContext()
    client.on('message', (topic, message, packet) => {
        console.log("Received '" + message + "' on '" + topic + "'");
        switch (topic.split("/")[2]) {
            case 'bbc-humid':
                setHumidity((message.toString()));
                break;
            case 'bbc-temp':
                setTemperature((message.toString()));
                break;
            case 'bbc-light':
                setLightIntensity((message.toString()));
                break;
            case 'bbc-fan':
                setAirBtn((message.toString()));
                break;
            // case 'weather-status':
            //     setStrawStatus((message.toString()));
            //     break;
            case 'bbc-pump':
                setPumperBtn((message.toString()));
                break;
            case 'bbc-led':
                setLightBtn((message.toString()));
                break;
            default:
                break;
        }
    });
    return (<BrowserRouter>
        {true ?
            <Routes>
                <Route element={<WebsiteLayout />}>
                    <Route path="" element={<Dashboard />} />
                    <Route path="control" element={<Control />} />
                    <Route path="datalog" element={<Datalog />} />
                    <Route path="diagnose" element={<Dashboard />} />
                    <Route path="notification" element={<Dashboard />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
                
            </Routes> :
            <LoginLayout>
                <Routes>
                    <Route path="/" element={<Navigate replace to="login" />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>

            </LoginLayout>
        }
    </BrowserRouter >)
}

export default App;
