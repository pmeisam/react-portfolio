import React from "react";
import styled from "styled-components";

function SubmitPopup(props) {
  return (
    <PopupWrapper>
      <h1>Message Sent</h1>
      <p>Thank you for your time</p>

      <button className="close_button" onClick={props.closePopup}>
        Go Back
      </button>
    </PopupWrapper>
  );
}

export default SubmitPopup;
const PopupWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  h1 {
    font-size: 45px;
    margin-bottom: 10px;
  }
  .close_button {
    display: block;
    background-color: transparent;
    margin: 0 auto;
    border: 1px dotted white;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 40px;
  }
  .close_button:hover {
    cursor: pointer;
    background: lightgray;
    box-shadow: 0px 0px 15px 1px #1565c063;
    color: black;
  }

  @media only screen and (max-width: 930px) {
  }
  @media only screen and (max-width: 630px) {
  }
`;
