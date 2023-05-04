import React, { useContext } from "react";
import "./ChoiceOptions.scss";
import useSelect from "../../../../hooks/useSelect";
import { useGlobalContext } from "../../../../context";

function ChoiceOption() {
  const fromNumber = Array.from(Array(60).keys());
  const toNumber = Array.from(Array(60).keys());
  const [fNum, setFNum] = useSelect("From");
  const [tNum, setTNum] = useSelect("To");
  const { setControlNumF,
    setControlNumT,
    hasControl,
    setHasControl} =
    useGlobalContext()

  const setControl = () => {
    if (hasControl) {
      setHasControl(false);
      return;
    }

    if (
      !fNum.includes("From") &&
      !tNum.includes("To")
    ) {
      setHasControl(true);
      setControlNumF(`${fNum}`);
      setControlNumT(`${tNum}`);
    }
  };

  return (
    <div className="option-Container">
      <div className={`wrapper-option ${hasControl && "disable"}`}>
        <select {...setFNum}>
          <option disabled value="fNum">
            From
          </option>
          {fromNumber.map((fNum, index) => (
            <option key={index} value={fNum}>
              {fNum}
            </option>
          ))}
        </select>
        <select {...setTNum}>
          <option disabled value="tNum">
            To
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
        className={`setControl-btn ${hasControl && "play"}`}
      >
        {hasControl ? "Clear Control" : "Set Control"}
      </button>
    </div>
  );
}

export default ChoiceOption;
