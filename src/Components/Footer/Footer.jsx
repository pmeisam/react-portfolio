import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../Context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const [year, setYear] = useState("");
  const FooterWrapper = styled.div`
    z-index: 10;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    text-align: center;
    background-color: ${theme.backgroundColor};
    color: ${theme.fontColor};
    & > p {
      font-size: 15px;
      font-weight: 200;
    }

    @media screen and (max-width: 900px) {
      position: fixed;
      left: 0px;
      width: 100%;
      height: 40px;
      top: 97%;
      bottom: 0;
      & > p {
        font-size: 10px;
      }
    }
    @media screen and (max-width: 600px) {
      position: fixed;
      left: 0px;
      width: 100%;
      height: 40px;
      top: 98%;
      bottom: 0;
      & > p {
        font-size: 10px;
      }
    }
  `;

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <FooterWrapper>
      <p>Ⓒ{year && year} Meisam Poorzand. All Rights Reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
