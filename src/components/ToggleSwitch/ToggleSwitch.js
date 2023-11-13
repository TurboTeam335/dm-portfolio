import React, { useContext } from "react";
import ThemeContext from "../ThemeContext/ThemeContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle-switch">
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
