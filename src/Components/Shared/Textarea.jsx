import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../Context/ThemeContext";

const TextArea = (props) => {
  const { theme } = useContext(ThemeContext);
  const InputComponent = styled.div`
    margin-top: 10px;
    .input-container {
      position: relative;
    }
    .input-container label {
      position: absolute;
      top: 40px;
      left: 100px;
      font-size: 16px;
      color: ${theme.fontColor};
      pointer-event: none;
      transition: all 0.5s ease-in-out;
      font-weight: 400;
      letter-spacing: 2px;
    }
    .input-container textarea {
      border-bottom: 1px solid ${theme.fontColor};
      background-color: ${theme.backgroundColor};
      padding: 0 10px;
      height: 200px;
      width: 80%;
      color: ${theme.fontColor};
    }
    .input-container textarea:focus {
      border: none;
      outline: none;
      border-bottom: 2px solid rgba(125, 68, 241, 1);
      transition: all 0.4s ease-in;
    }
    .input-container textarea:focus ~ label,
    .input-container textarea:valid ~ label {
      top: 0px;
      left: 90px;
      font-size: 12px;
      margin: 0 2px;
      background-color: ${theme.backgroundColor};
      height: 12px;
    }

    @media screen and (max-width: 600px) {
      .input-container label {
        left: 30px;
      }
      .input-container textarea:focus ~ label,
      .input-container textarea:valid ~ label {
        left: 25px;
      }
    }
  `;
  return (
    <InputComponent>
      <div className="input-container">
        <textarea
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

export default TextArea;
