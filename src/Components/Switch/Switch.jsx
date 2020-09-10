import React from "react";
import styled from "styled-components";

const SwitchWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

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
    top: 1.5px;
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
  }
`;

const Switch = (props) => {
  return (
    <SwitchWrap>
      <p>{props.isDark ? "DARK" : "LIGHT"}</p>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onChange={() => props.handleThemeChange(!props.isDark)}
        checked={props.isDark}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        active={props.isDark}
      >
        <span className={`react-switch-button`} />
      </label>
    </SwitchWrap>
  );
};

export default Switch;
