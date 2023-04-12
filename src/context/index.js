import {useContext, createContext, useState,useEffect} from "react";
import axios from 'axios';
import { username, key } from "../utils/env";


async function getLastValue (feed_id){
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
    const [pumperBtn, setPumperBtn] = useState(false);
    const [airBtn, setAirBtn] = useState(false);
    const [strawStatus, setStrawStatus] = useState("Good");

    useEffect(()=>{
       const defaultValue = async () => {
        const latestTemperature = await getLastValue('bbc-temp');
        setTemperature(latestTemperature);
        console.log(latestTemperature);
        setLightIntensity(await getLastValue('bbc-light'));
        setHumidity(await getLastValue('bbc-humid'));
        setLightBtn(await getLastValue('bbc-led'));
        setPumperBtn(await getLastValue('bbc-pump'));
        setAirBtn(await getLastValue('bbc-fan'));
        // setStrawStatus(await getLastValue('weather-status'));
       }
       defaultValue()
    },[])
    return <AppContext.Provider 
    value={{temperature,setTemperature,
        lightIntensity,setLightIntensity,humidity,
        setHumidity,lightBtn,setLightBtn,pumperBtn,setPumperBtn,airBtn,setAirBtn,strawStatus,setStrawStatus
    }}
    >
        {props.children}
    </AppContext.Provider>
}

export default AppProvider;

export const useGlobalContext  = () => {
    return useContext(AppContext);
}
