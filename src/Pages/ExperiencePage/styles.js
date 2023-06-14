import styled from "styled-components";

const ExperiencesContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LinkContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  color: #000;
  background-color: white;
  border-radius: 5px;
  width: 120px;
  height: 48px;
  margin-top: 20px;
  :hover {
    box-shadow: 0px 0px 26px 4px #fff;
  }
  .aframe-logo {
    width: 110px;
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
`;

export {
  ExperiencesContainer,
  SkillsContainer,
  LinkContainer,
  AvtrLinkContainer,
};
