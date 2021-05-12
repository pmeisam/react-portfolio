import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../Context/ThemeContext";

const Input = (props) => {
  const { theme } = useContext(ThemeContext);
  const InputComponent = styled.div`
    margin-top: 10px;
    .input-container {
      position: relative;
    }
    .input-container label {
      position: absolute;
      bottom: 30px;
      left: 100px;
      font-size: 16px;
      color: ${theme.fontColor};
      pointer-event: none;
      transition: all 0.5s ease-in-out;
      font-weight: 400;
      letter-spacing: 2px;
    }
    .input-container input {
      border-bottom: 1px solid ${theme.fontColor};
      background-color: ${theme.backgroundColor};
      padding: 0 10px;
      height: 50px;
      width: 80%;
      color: ${theme.fontColor};
    }
    .input-container input:focus {
      border: none;
      outline: none;
      border-bottom: 2px solid rgba(125, 68, 241, 1);
      transition: all 0.4s ease-in;
    }
    .input-container input:focus ~ label,
    .input-container input:valid ~ label {
      top: 10px;
      left: 90px;
      font-size: 12px;
      margin: 0 2px;
      background-color: ${theme.backgroundColor};
      height: 12px;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      -webkit-text-fill-color: ${theme.fontColor};
      -webkit-box-shadow: 0 0 0px 1000px ${theme.backgroundColor} inset;
      transition: background-color 5000s ease-in-out 0s;
    }
    @media screen and (max-width: 600px) {
      .input-container input {
        width: 100%;
      }
      .input-container label {
        left: 15px;
      }
      .input-container input:focus ~ label,
      .input-container input:valid ~ label {
        left: 10px;
      }
    }
  `;
  return (
    <InputComponent>
      <div className="input-container">
        <input
          type={props.type}
          required={props.required}
          autoComplete="off"
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          id={props.id}
          placeholder=""
          //   onChange={onChange}
        />
        <label>&nbsp;{props.placeholder}&nbsp;</label>
      </div>
    </InputComponent>
  );
};

export default Input;
