import styled from "styled-components";

const ExperienceContainer = styled.div`
  width: 100%;
`;

const ExperienceCard = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.p`
  font-family: "Saira Stencil One", cursive;
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 5px;
`;

const Location = styled.div`
  background-color: ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.backgroundColor};
  font-size: 16px;
  width: 410px;
  font-weight: 900;
  text-align: center;
  border-radius: 1px;
`;

const UnorderedList = styled.ul`
  li {
    list-style-type: square;
    margin-left: 20px;
    font-family: "Roboto", sans-serif;
    color: rgb(138, 138, 138);
  }
`;

const Image = styled.img`
  width: 200px;
  margin-left: 10px;
`;

export {
  ExperienceContainer,
  ExperienceCard,
  Title,
  Location,
  UnorderedList,
  Image,
};
