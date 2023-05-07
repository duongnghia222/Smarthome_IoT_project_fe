import {useContext, createContext, useState,useEffect} from "react";
import axios from 'axios';
import { publish } from '../utils/adafruit'
const key = process.env.REACT_APP_KEY
const username = process.env.REACT_APP_NAME
const storedUser = localStorage.getItem("user");


async function getLastValue (feed_id){
    
    console.log("in getlastval in context")
    const url = `https://io.adafruit.com/api/v2/${username}/feeds/${feed_id}/data/?limit=1`;
    const options = {
        headers: {
          'X-AIO-Key': key
        }
      };
    let res = await axios.get(url, options);
    return res.data[0].value;
}

const AppContext = createContext();


const AppProvider = (props)=>{
    const [temperature, setTemperature] = useState(0);
    const [lightIntensity, setLightIntensity] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [lightBtn, setLightBtn] = useState(false);
    const [airBtn, setAirBtn] = useState(false);
    const [weatherStatus, setWeatherStatus] = useState("Good");
    const [ControlNumF, setControlNumF] = useState("");
    const [ControlNumT, setControlNumT] = useState("");
    const [hasControl, setHasControl] = useState(false);

    useEffect(()=>{
       const defaultValue = async () => {
        setTemperature(await getLastValue('bbc-temp'));
        setLightIntensity(await getLastValue('bbc-light'));
        setHumidity(await getLastValue('bbc-humid'));
        setLightBtn(await getLastValue('bbc-led'));
        setAirBtn(await getLastValue('bbc-fan'));
       }
       if (storedUser !== 'null'){
        defaultValue()
       }
       
    },[]);

    if (ControlNumF !== "From" && parseInt(ControlNumF) >= parseInt(temperature) && hasControl){
        console.log(parseInt(ControlNumF));
        publish('bbc-fan', '0');

    }
    
    if (ControlNumT !== "To" && parseInt(ControlNumT) <= parseInt(temperature) && hasControl){
        console.log(parseInt(ControlNumT));
        publish('bbc-fan', '99');
    }

    return <AppContext.Provider 
    value={{temperature,setTemperature,
        lightIntensity,setLightIntensity,humidity,
        setHumidity,lightBtn,setLightBtn,airBtn,setAirBtn,weatherStatus,setWeatherStatus,
        setControlNumF, setControlNumT, setHasControl, hasControl
    }}
    >
        {props.children}
    </AppContext.Provider>
}

export default AppProvider;

export const useGlobalContext  = () => {
    return useContext(AppContext);
}
