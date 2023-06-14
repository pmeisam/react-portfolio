import styled from "styled-components";

const ExperiencesContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  @media screen and (max-width: 700px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 90px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const AmpasLinksContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.backgroundColor};
  border-radius: 5px;
  width: 150px;
  height: 50px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 300;
  :hover {
    box-shadow: 0px 0px 26px 4px ${(props) => props.theme.fontColor};
  }
  .oscar-logo {
    width: 26px
    margin-right: 5px;
  }

  @media screen and (max-width: 700px) {
    width: 120px;
    height: 40px; 
    font-size: 13px;
  }
`;

const AvtrLinkContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f5c518;
  color: #000;
  background-color: #f5c518;
  border-radius: 5px;
  width: 120px;
  height: 48px;
  margin-top: 20px;

  :hover {
    box-shadow: 0px 0px 26px 4px #f5c518;
  }

  .imdb-icon {
    font-size: 15px;
  }

  .imdb-logo {
    width: 60px;
  }

  @media screen and (max-width: 700px) {
    width: 120px;
    height: 40px;
    font-size: 13px;
  }
`;

const ProjectsLinkContainer = styled.div`
  .project-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(
      to bottom,
      rgb(117, 101, 236),
      rgb(122, 42, 196)
    ) !important;
    width: 120px;
    height: 48px;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: 300;
    margin: 20px 0 30px 0;
  }
  .project-button:hover {
    box-shadow: 0px 0px 26px 4px rgb(122, 42, 196);
  }

  @media screen and (max-width: 700px) {
    .project-button {
      width: 120px;
      height: 40px;
      font-size: 13px;
    }
  }
`;

export {
  ExperiencesContainer,
  SkillsContainer,
  AmpasLinksContainer,
  AvtrLinkContainer,
  ProjectsLinkContainer,
};
