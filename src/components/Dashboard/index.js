import React from "react";
import DataFarm from "./DataFarm";
import OverallChart from "./OverallChart";
import Clock from "../Clock/"
import {
  faLightbulb,
  faTemperatureLow,
  faTemperatureHigh,
  faNotesMedical,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import DiagData from "../DiagData/DiagData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../../context/index";
import getData from "../../utils/getData";
import { useTheme } from "@emotion/react";
import { useState, useEffect } from "react";

const labels = ["Mon", "Tue", "Thir", "Wed", "Fri", "Sat", "Sun"];

export default function Dashboard() {
  const theme = useTheme();
  const [mode, setMode] = useState(0);
  const { temperature, humidity, lightIntensity, weatherStatus } =
    useGlobalContext();
  const [data, setData] = useState([
    {
      name: "Nhiệt độ",
      color: "rgb(15, 136, 249)",
      data: [],
    },
    {
      name: "Độ ẩm",
      color: "rgb(16, 213, 248)",
      data: [],
    },
    {
      name: "Ánh sáng",
      color: "rgb(252, 163, 61)",
      data: [],
    },
    {
      name: "Dự báo",
      color: "rgb(63, 221, 102)",
      data: [],
    },
  ]);
  useEffect(() => {
    const getAllData = async () => {
      setData([
        {
          name: "Nhiệt độ",
          color: "rgb(15, 136, 249)",
          data: (await getData("bbc-temp")).map((e) => parseInt(e)),
        },
        {
          name: "Độ ẩm",
          color: "rgb(16, 213, 248)",
          data: (await getData("bbc-humid")).map((e) => parseInt(e)),
        },
        {
          name: "Ánh sáng",
          color: "rgb(252, 163, 61)",
          data: (await getData("bbc-light")).map((e) => parseInt(e)),
        },
      ]);
    };
    getAllData();
  }, [mode]);
  const handleChange = (e) => {
    setMode(e.target.value);
  };
  const renderIcon = (param = "0") => {
    switch (param) {
      case "0":
        return (
          <FontAwesomeIcon
            icon={faTemperatureHigh}
            style={{ color: data[mode].color }}
          />
        );
      case "1":
        return (
          <FontAwesomeIcon
            icon={faDroplet}
            style={{ color: data[mode].color }}
          />
        );
      case "2":
        return (
          <FontAwesomeIcon
            icon={faLightbulb}
            style={{ color: data[mode].color }}
          />
        );
      case "3":
        return (
          <FontAwesomeIcon
            icon={faNotesMedical}
            style={{ color: data[mode].color }}
          />
        );
      default:
        return (
          <FontAwesomeIcon
            icon={faDroplet}
            style={{ color: data[mode].color }}
          />
        );
    }
  };
  const renderText = (param = "0") => {
    switch (param) {
      case "0":
        return (
          <div>
            <h2>Nhiệt độ</h2>
            <p>{temperature}°C</p>
          </div>
        );
      case "1":
        return (
          <div>
            <h2>Độ ẩm</h2>
            <p>{humidity}%</p>
          </div>
        );
      case "2":
        return (
          <div>
            <h2>Ánh sáng</h2>
            <p>{lightIntensity} Lux</p>
          </div>
        );
      case "3":
        return (
          <div>
            <h2>Dự báo</h2>
            <p>Good</p>
          </div>
        );
      default:
        return (
          <div>
            <h2>Nhiệt độ</h2>
            <p>{temperature}°C</p>
          </div>
        );
    }
  };
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-left">
            <Clock/>
        </div>
        <div className="dashboard-header-right">
          <div className="dashboard-header-right-top">
            <div className="dashboard-header-right-top-left">
              <div className="dashboard-header-right-top-left-left">
                {renderIcon(mode)}
              </div>
              <div className="dashboard-header-right-top-left-right">
                {renderText(mode)}
              </div>
            </div>
            <div className="dashboard-header-right-top-right">
              <select className="dashboard-header-right-top-right-boxtext" onChange={handleChange}>
                <option value={0} key={0}>
                  Nhiệt độ
                </option>
                <option value={1} key={1}>
                  Độ ẩm
                </option>
                <option value={2} key={2}>
                  Ánh sáng
                </option>
                {/* <option value={3} key={3}>
                  Dự báo
                </option> */}
              </select>
            </div>
          </div>
          <div className="dashboard-header-right-bottom">
            <DiagData data1={data[mode]} labels={labels} my_theme = {theme.palette.mode} />
            <div className="dashboard-header-right-bottom-mode">
              <button> Ngày</button>
              <button> Tuần</button>
              <button className="active"> Tháng</button>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-bottom">
        <div className="dashboard-bottom-row">
          <DataFarm
            data={{
              curVal: temperature,
              prevVal: 5,
              isCondition: false,
              color: "#0F88F9",
              name: "Nhiệt độ",
              icon: faTemperatureLow,
              postfix: "°C",
            }}
          />
          <DataFarm
            data={{
              curVal: humidity,
              prevVal: 15,
              isCondition: false,
              color: "#10D5F8",
              name: "Độ ẩm",
              icon: faDroplet,
              postfix: "%",
            }}
          />
        </div>
        <div className="dashboard-bottom-row">
          <DataFarm
            data={{
              curVal: lightIntensity,
              prevVal: 5,
              isCondition: false,
              color: "#FCA33D",
              name: "Ánh sáng",
              icon: faLightbulb,
              postfix: "Lux ",
            }}
          />
          <DataFarm
            data={{
              isCondition: true,
              color: "#3FDD66",
              name: "Dự báo",
              icon: faCloud,
              curVal: weatherStatus,
            }}
          />
        </div>
      </div>
    </div>
  );
}
