import React, { useContext, useEffect, useState } from "react";
import { slideInUp } from "react-animations";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../../Context/ThemeContext";
// import slideInUp from 'react-animations/lib/slide-in-up';
import ContactPageSVG from "./undraw_festivities_tvvj";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const { theme } = useContext(ThemeContext);

  const Contact = styled.div`
    svg {
      width: 100%;
    }
    .content {
      width: 85%;
      min-height: 84vh;
      position: relative;
      overflow-x: hidden;
      margin-top: 15vh;
      margin-left: 11%;
    }

    .parent_contact {
      direction: rtl;
      display: flex;
      flex-wrap: wrap;
    }

    .txt_social_contact {
      font-size: 45px;
      color: ${theme.fontColor};
      text-align: center;
      /* margin: 20px; */
      margin-bottom: 50px;
      margin-top: 30px;
    }
    .info {
      width: 50%;
      /* margin-right: 7%; */
      /* margin-left: 3%; */
      position: relative;
      height: 80vh;
      /* background: #000; */
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    .contact_bg_img {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
    }

    .parent_form {
      width: 45%;
      text-align: center;
      border-right: 1px solid rgba(255, 255, 255, 0.068);
      margin-right: 5%;
    }

    .parent_form input,
    .parent_form textarea {
      width: 80%;
      margin: 15px auto;
      direction: ltr;
      padding: 5px 10px;
      font-size: 15px;
      background: transparent;
      color: ${theme.fontColor};
    }
    input::placeholder,
    textarea::placeholder {
      color: ${theme.fontColor};
    }
    .parent_form input {
      background: transparent;
      border-radius: 0%;
      border-bottom: 1px solid ${theme.fontColor};
    }
    .parent_form textarea {
      border: 1px solid ${theme.fontColor};
      border-radius: 10px;
    }
    .btn_sent_mesaege {
      cursor: pointer;
      width: 50%;
      margin: 20px 0;
      padding: 15px 10px;
      border-radius: 35px;
      background: linear-gradient(
        90deg,
        rgba(112, 112, 238, 1) 0%,
        rgba(125, 68, 241, 1) 49%,
        rgba(120, 16, 188, 1) 100%
      );
      font-size: 13px;
      color: white;
    }
    .btn_sent_mesaege:hover {
      // background: white;
      box-shadow: 0px 0px 26px 4px rgb(122, 42, 196);
    }

    .contact_social {
      margin-left: 0;
    }
    .contact_social i {
      border-radius: 0;
    }

    .social {
      display: flex;
      justify-content: flex-start;
      margin-left: 5%;
      margin-top: 40px;
      flex-wrap: wrap;
    }

    .contact_social {
      margin-left: 0;
    }
    .contact_social i {
      border-radius: 0;
    }
    .icon_social {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: rgb(184, 179, 179);
      margin-right: 20px;
      margin-top: 20px;
    }
    .icon_social > i {
      font-size: 35px;
      /* padding: 10px  ; */
      background: #4e585d;
      border-radius: 10px;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media only screen and (max-width: 1300px) {
      .t_w90_m-auto {
        width: 90%;
        margin: 20px auto;
      }
      .contact_bg_img {
        position: relative;
      }
      .contact_bg_img img {
        width: 100%;
      }
      .info {
        height: auto;
      }
      .parent_form {
        border-right: none;
        border-top: 1px solid rgba(253, 253, 253, 0.247);
        padding-top: 20px;
      }
    }

    @media only screen and (min-width: 600px) and (max-width: 800px) {
      .m_w90_m-auto {
        width: 90% !important;
        margin: 20px auto;
      }
    }

    @media only screen and (max-width: 601px) {
      .m_w90_m-auto {
        width: 90% !important;
        margin: 20px auto;
        justify-content: center;
      }
    }
  `;

  function sendEmail(evt) {
    // Email Function
    evt.preventDefault();
    console.log(evt.target);
    emailjs
      .sendForm(
        "service_pljat46",
        "template_fzj2d0y",
        evt.target,
        "user_rhCwVeEZBC2UZloJGNs1Z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    evt.target.reset();
  }

  useEffect(() => {
    document.title = "Meisam Poorzand | Contact";
    window.scrollTo(0, 0)
  });

  return (
    <Contact>
      <main className="  m_w90_m-auto content ">
        <div className="parent_contact">
          <div className="info t_w90_m-auto">
            <div className="contact_bg_img">
              <ContactPageSVG className="contact_svg" />
            </div>
            <div>
              <a href="mailto: info@meisam.org" className="txt_social_contact">
                <p>info@meisam.org</p>
              </a>
              <div className="social contact_social m_w90_m-auto">
                <a
                  _blank
                  href="https://www.instagram.com/me.i.sam/"
                  className="icon_social"
                >
                  <i className="fab fa-instagram"></i>
                  {/* <p>Instagram</p> */}
                </a>
                <a
                  _blank
                  href="https://www.facebook.com/pmeisam"
                  className="icon_social"
                >
                  <i className="fab fa-facebook-f"></i>
                  {/* <p>Facebook</p> */}
                </a>
                <a
                  _blank
                  href="https://www.twitter.com/pmeisam"
                  className="icon_social"
                >
                  <i className="fab fa-twitter"></i>
                  {/* <p>Twitter</p> */}
                </a>
                <a
                  _blank
                  href="https://www.github.com/pmeisam"
                  className="icon_social"
                >
                  <i className="fab fa-github"></i>
                  {/* <p>GitHub</p> */}
                </a>
                <a
                  _blank
                  href="https://www.linkedin.com/in/pmeisam"
                  className="icon_social"
                >
                  <i className="fab fa-linkedin"></i>
                  {/* <p>LinkedIn</p> */}
                </a>
                <a
                  _blank
                  href="mailto: info@meisam.org"
                  className="icon_social"
                >
                  <i className="far fa-envelope"></i>
                  {/* <p>E-mail</p> */}
                </a>
              </div>
            </div>
          </div>
          <div className="parent_form t_w90_m-auto">
            <form onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Name *"
                required
                name="name"
                id=""
              />
              <input
                type="email"
                placeholder="Email *"
                required
                name="email"
                id=""
              />
              <input
                type="text"
                placeholder="Subject *"
                required
                name="subject"
                id=""
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="6"
                placeholder="Message *"
              ></textarea>
              <button className="btn_sent_mesaege">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      {/* <a className="title" href="https://www.meisam.org">
        <h1>MEISAM</h1>
        <h1>POORZAND</h1>
      </a>
      <a className="email" href="mailto: info@meisam.org">
        <h4>info@meisam.org</h4>
      </a>
      <div className="icons">
        <a _blank className="icon" href="https://www.linkedin.com/in/pmeisam">
          <i className="fab fa-linkedin"></i>
        </a>

        <a _blank className="icon" href="https://www.facebook.com/pmeisam">
          <i className="fab fa-facebook-square"></i>
        </a>

        <a _blank className="icon" href="https://www.twitter.com/pmeisam">
          <i className="fab fa-twitter-square"></i>
        </a>

        <a _blank className="icon" href="https://www.instagram.com/me.i.sam/">
          <i className="fab fa-instagram"></i>
        </a>

        <a _blank className="icon" href="https://www.github.com/pmeisam">
          <i className="fab fa-github"></i>
        </a>

        <a _blank className="icon" href="mailto: info@meisam.org">
          <i className="fas fa-envelope-open-text"></i>
        </a>
      </div> */}
    </Contact>
  );
};

export default ContactPage;

// jacekjeznach.com/skills/
// caferati.me
