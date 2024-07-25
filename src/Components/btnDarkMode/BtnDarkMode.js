import { useState, useEffect } from "react";
import sun from "./sun.svg";
import moon from "./moon.svg";

const BtnDarkComponent = () => {
  const [derkMode, setDarkMode] = useState("light");

  function ToggleDarkMode() {
    console.log("function fired");
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  }

  useEffect(() => {
    console.log("UseEffect fired");
  }, [derkMode]);

  return (
    <button className="dark-mode-btn" onClick={ToggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkComponent;
