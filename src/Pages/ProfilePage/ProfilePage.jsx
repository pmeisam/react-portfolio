import React, { useContext, useEffect } from "react";
import { slideInUp } from "react-animations";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../../Context/ThemeContext";
// import slideInUp from 'react-animations/lib/slide-in-up';

const ProfilePage = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Meisam Poorzand | Contact";
  });

  const Profile = styled.div``;

  return (
    <Profile>
      <section className="name_img_profilio ">
        <div className="img_profilio m_w90_m-auto">
        
        </div>
        <div className="details_profilio m_w90_m-auto">
          <div className="item_details">
            <p>FirstName: Meisam</p>
          </div>
          <div className="item_details">
            <p>LastName: Poorzand</p>
          </div>
          <div className="item_details">
            <p>Age: 30</p>
          </div>
          <div className="item_details">
            <p>Location:&nbsp;Los Angeles</p>
          </div>
        </div>
      </section>
      <section className="btn_download m_w90_m-auto">
        <span className=" m_w90_m-auto">
          resume
          <a href="">dowonload pdf</a>
        </span>
      </section>
    </Profile>
  );
};

export default ProfilePage;

// jacekjeznach.com/skills/
// caferati.me
