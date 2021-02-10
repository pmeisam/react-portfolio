import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../Context/ThemeContext";

const SwitchWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  p {
    background-color: rgb(107,107,107);
    padding: 2.5px 25px 2.5px 9px;
    border-radius: 60px;
    font-weight: 800;
    font-size: 12px;
    color: white;
  }

  .react-switch-checkbox {
    margin: 0;
    margin-left: -18px;
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 40px;
    height: 20px;
    background: rgb(227, 227, 227);
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;
  }

  .react-switch-label .react-switch-button {
    content: "";
    position: absolute;
    top: 2px;
    left: 1px;
    width: 16px;
    height: 16px;
    border-radius: 45px;
    transition: 0.2s;
    background: rgb(159, 159, 159);
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  .react-switch-label:active .react-switch-button {
    width: 30px;
  }
  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    background-image: linear-gradient(
      to bottom,
      rgb(117, 101, 236),
      rgb(122, 42, 196)
    ) !important;
    // background: black;
  }

  @media screen and (max-width: 600px) {
    margin-top: 10px;

    p {
      font-size: 9px;
      padding: 2.5px 20px 3px 8px;
    }
    .react-switch-label {
      height: 16px;
      width: 35px;
    }
    .react-switch-label .react-switch-button {
      height: 12px;
      width: 12px;
    }
  }
`;

const Switch = () => {

  const {setTheme, isDark, setIsDark} = useContext(ThemeContext);

  const handleThemeChange = (isDark) => {
    let newTheme = {};
    const darkTheme = {
      backgroundColor: "rgb(39,50,56)",
      fontColor: "rgb(255,255,255)",
      borderColor: "#ff0044",
      linkColor: "rgb(255,255,255)",
    };
    const lightTheme = {
      backgroundColor: "rgb(255,255,255)",
      fontColor: "rgb(41,43,58)",
      borderColor: "#ff0044",
      linkColor: "rgb(42,28,58)",
    };
    
    isDark ? newTheme = darkTheme : newTheme = lightTheme;
    
    localStorage.setItem("theme", isDark);
    document.body.style.backgroundColor = newTheme.backgroundColor;
    document.body.style.color = newTheme.fontColor;
    setTheme(newTheme);
    setIsDark(isDark);
  };
  
  return (
    <SwitchWrap>
      <p>{isDark ? "DARK" : "LIGHT"}</p>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onChange={() => handleThemeChange(!isDark)}
        checked={isDark}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        active={isDark.toString()}
      >
        <span className={`react-switch-button`} />
      </label>
    </SwitchWrap>
  );
};

export default Switch;
