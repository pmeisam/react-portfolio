import React, { useState } from "react";
import styled from "styled-components";
import CubeBox from "../../Components/CubeBox/CubeBox";
import SkillsListView from "../../Components/SkillsListView/SkillsListView";

export default function SkillsPage() {
  const [listView, setListView] = useState(false);

  if (window.innerWidth < 900) {
    return <SkillsListView />;
  }
  return (
    <SkillsPageWrapper>
      <div onClick={() => setListView(!listView)} className="view-button">
        <span className={!listView && `active`}>Box View</span>
        <span className={listView && `active`}>List View</span>
      </div>
      {listView ? <SkillsListView /> : <CubeBox />}
    </SkillsPageWrapper>
  );
}

const SkillsPageWrapper = styled.div`
  .view-button {
    margin: 50px auto 0 auto;
    width: 200px;
    border: none;
    border-radius: 5px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
  }
  .active {
    color: rgb(255, 255, 255);
    background-image: linear-gradient(
      to bottom,
      rgb(117, 101, 236),
      rgb(122, 42, 196)
    ) !important;
    box-shadow: 0px 0px 26px 4px rgb(122, 42, 196);
  }
  span {
    width: 100%;
    height: 100%;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(244,244,244);
    color: rgb(48,32,66);
  }
`;
