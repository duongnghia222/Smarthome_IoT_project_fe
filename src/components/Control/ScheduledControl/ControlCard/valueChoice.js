import React, { useContext } from "react";
import "./ChoiceOptions.scss";
import useSelect from "../../../../hooks/useSelect";
import { useGlobalContext } from "../../../../context";

function ChoiceOption() {
  const fromNumber = ["None", ...Array.from(Array(41).keys())];
  const toNumber = ["None", ...Array.from(Array(41).keys())];
  const [fNum, setFNum] = useSelect("From");
  const [tNum, setTNum] = useSelect("To");
  const { setControlNumF, setControlNumT, hasControl, setHasControl } =
    useGlobalContext();

  const setControl = () => {
    console.log(hasControl);
    if (hasControl) {
      setHasControl(false);
      return;
    }
    if (!fNum.includes("From") || !tNum.includes("To")) {
        
      if (parseInt(fNum) > parseInt(tNum)) {
        return;
      }
      setHasControl(true);
      setControlNumF(`${fNum}`);
      setControlNumT(`${tNum}`);
    }
  };

  return (
    <div className="option-Container">
      <div className={`wrapper-option ${hasControl && "disable"}`}>
        <label>Từ</label>
        <select {...setFNum}>
          <option disabled value="fNum">
            Độ C
          </option>
          {fromNumber.map((fNum, index) => (
            <option key={index} value={fNum}>
              {fNum}
            </option>
          ))}
        </select> 
        <label>Đến</label>
        <select {...setTNum}>
          <option disabled value="tNum">
            Độ C
          </option>
          {toNumber.map((tNum, index) => (
            <option key={index} value={tNum}>
              {tNum}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={setControl}
        className={`setControl-btn ${hasControl && "play"} hover: font-bold py-2 px-4 rounded cursor-pointer`}
      >
        {hasControl ? "Đã Đặt" : "Đặt "}
      </button>
    </div>
  );
}

export default ChoiceOption;
