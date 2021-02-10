import React from "react";
import styled from "styled-components";

function SubmitPopup(props) {
  return (
    <PopupWrapper>
      <div className="popup_inner">
        <div className="buttons_container">
          <button className="close_button" onClick={props.closePopup}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="img_container">
          <img alt="message sent" src="images/deliveredmessage.gif" />
        </div>
      </div>
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
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 999;
  .buttons_container {
    display: flex;
    justify-content: space-between;
  }
  i {
    font-size: 20px;
  }
  .close_button {
    display: block;
    background-color: transparent;
    margin: 20px 0 0 20px;
    // margin-top: 100px;
  }
  .close_button:hover {
    cursor: pointer;
    background: lightgray;
    box-shadow: 0px 0px 15px 1px #1565c063;
  }

  img {
    width: 100%;
  }
  .popup_inner {
    overflow: auto;
    position: absolute;
    left: 35%;
    right: 35%;
    top: 20%;
    bottom: 45%;
    margin: auto;
    border-radius: 4px;
    background-color: white;
  }
  .img_container {
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 930px) {
    .popup_inner {
      left: 25%;
      right: 25%;
      top: 10%;
      bottom: 10%;
    }
  }
  @media only screen and (max-width: 630px) {
    .popup_inner {
      left: 5%;
      right: 5%;
      top: 7%;
      bottom: 5%;
    }
  }
`;
