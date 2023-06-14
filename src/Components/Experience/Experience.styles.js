import styled from "styled-components";

const ExperienceContainer = styled.div`
  width: 100%;
  margin-bottom: 70px;

  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;

const ExperienceCard = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Title = styled.p`
  font-family: "Saira Stencil One", cursive;
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 5px;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

const Location = styled.div`
  background-color: ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.backgroundColor};
  font-size: 16px;
  width: 420px;
  font-weight: 800;
  text-align: center;
  border-radius: 1px;
  @media screen and (max-width: 700px) {
    font-size: 12px;
    width: 330px;
  }
`;

const UnorderedList = styled.ul`
  li {
    list-style-type: square;
    margin-left: 20px;
    font-family: "Roboto", sans-serif;
    color: rgb(138, 138, 138);
  }
  @media screen and (max-width: 700px) {
    li {
      font-size: 14px;
    }
  }
`;

const Image = styled.img`
  width: 200px;
  margin-left: 10px;

  @media screen and (max-width: 1000px) {
    width: 120px;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export {
  ExperienceContainer,
  ExperienceCard,
  Title,
  Location,
  UnorderedList,
  Image,
};
