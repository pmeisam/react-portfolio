import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../Context/ThemeContext";
import ContactPageSVG from "./undraw_festivities_tvvj";
import emailjs from "emailjs-com";
import SubmitPopup from "../../Components/SubmitPopup/SubmitPopup";
import Input from "../../Components/Shared/Input";
import TextArea from "../../Components/Shared/Textarea";
import { motion } from "framer-motion/dist/framer-motion";

const ContactPage = () => {
  const { theme } = useContext(ThemeContext);
  const [popup, setPopup] = useState(false);
  // const [form, setForm] = useState({});
  const Contact = styled.div`
    .header {
      display: none;
    }
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
      direction: unset;
      display: flex;
      flex-wrap: wrap;
      overflow-y: hidden;
    }

    .txt_social_contact {
      font-size: 45px;
      font-family: "Roboto", sans-serif;
      font-weight: 100;
      color: ${theme.fontColor};
      text-align: center;
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
    }
    .btn-send-message {
      width: 240px;
      height: 50px;
      margin: 20px 0;
      padding: 15px 10px;
      border-radius: 5px;
      background: linear-gradient(
        90deg,
        rgba(112, 112, 238, 1) 0%,
        rgba(125, 68, 241, 1) 49%,
        rgba(120, 16, 188, 1) 100%
      );
      background-image: linear-gradient(
        to bottom,
        rgb(117, 101, 236),
        rgb(122, 42, 196)
      ) !important;
      font-size: 16px;
      color: white;
      font-weight: 300;
    }
    .btn-send-message:hover {
      box-shadow: 0px 0px 26px 4px rgb(122, 42, 196);
      cursor: pointer;
    }
    .btn-send-message:disabled,
    .btn-send-message[disabled] {
      border: 1px solid #999999;
      background: #cccccc;
      color: #666666;
      cursor: none;
    }
    .contact_social {
      margin-left: 0;
    }
    .contact_social i {
      border-radius: 0;
    }

    .social {
      display: flex;
      justify-content: center;
      margin: 30px auto;
      flex-wrap: wrap;
      width: 100%;
    }

    .contact_social i {
      border-radius: 0;
    }
    .icon_social {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(
        to bottom,
        rgb(117, 101, 236),
        rgb(122, 42, 196)
      ) !important;
      color: #fff;
      margin-top: 20px;
      margin-right: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .icon_social > i {
      font-size: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .icon_social:hover {
      box-shadow: 0px 0px 26px 4px rgb(117, 101, 236);
    }

    @media only screen and (max-width: 1300px) {
      .header {
        display: block;
        font-family: "Saira Stencil One", cursive;
        font-size: 70px;
      }
      .content {
        margin-top: 10vh;
      }
      .t_w90_m-auto {
        width: 90%;
        margin: 0 auto;
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
        border-bottom: 1px solid rgba(253, 253, 253, 0.247);
        padding-bottom: 20px;
      }
      svg {
        margin-top: 30px;
      }
    }

    @media only screen and (min-width: 600px) and (max-width: 800px) {
      .m_w90_m-auto {
        width: 90% !important;
        margin: 20px auto;
      }
      .header {
        margin-top: 90px;
      }
    }

    @media only screen and (max-width: 601px) {
      .header {
        margin-top: 70px;
        font-size: 35px;
        text-align: left;
      }
      .m_w90_m-auto {
        width: 90% !important;
        margin: 20px auto;
        justify-content: center;
      }

      .txt_social_contact {
        font-size: 18px;
      }

      .icon_social {
        margin-right: 10px;
        margin-top: 10px;
      }
      .icon_social > i {
        width: 40px;
        height: 40px;
        font-size: 18px;
        border-radius: 5px;
      }
      svg {
        width: 80%;
        margin: 0 auto;
        display: block;
      }
      .t_w90_m-auto {
        margin-top: 0;
      }
      .btn-send-message {
        font-size: 12px;
      }
    }
  `;

  const closePopup = () => {
    setPopup(false);
  };

  function sendEmail(evt) {
    // Email Function
    evt.preventDefault();
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

    setPopup(true);
    evt.target.reset();
  }

  useEffect(() => {
    document.title = "Meisam Poorzand | Contact";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Contact>
      {popup ? <SubmitPopup closePopup={closePopup} /> : null}
      <main className="  m_w90_m-auto content ">
        <div className="parent_contact">
          <motion.div
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
            initial={{ scale: 0 }}
            className="parent_form t_w90_m-auto"
          >
            <form onSubmit={sendEmail}>
              <h1 className="header">Contact me</h1>
              <Input
                placeholder="Name"
                name="name"
                type="text"
                required={true}
                onChange={null}
                id="name"
              />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                // onChange={onChange}
                required={true}
                onChange={null}
                id="email"
              />
              <Input
                type="text"
                placeholder="Subject "
                name="subject"
                // onChange={onChange}
                required={true}
                onChange={null}
                id="subject"
              />
              <TextArea
                name="message"
                cols="30"
                rows="6"
                // onChange={onChange}
                placeholder="Message"
                required={true}
                onChange={null}
                id="message"
              ></TextArea>
              <button
                className="btn-send-message"
                type="submit"
                // disabled={!isEnabled}
              >
                Send
              </button>
            </form>
          </motion.div>
          <div className="info t_w90_m-auto">
            <motion.div
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              initial={{ scale: 0 }}
              className="contact_bg_img"
            >
              <ContactPageSVG className="contact_svg" />
            </motion.div>
            <div>
              <div className="social contact_social">
                <motion.a
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 }}
                  initial={{ scale: 0 }}
                  target="_blank"
                  href="https://www.github.com/pmeisam"
                  className="icon_social"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                  {/* <p>GitHub</p> */}
                </motion.a>
                <motion.a
                  animate={{ scale: 1 }}
                  transition={{ delay: 2 }}
                  initial={{ scale: 0 }}
                  target="_blank"
                  href="https://www.linkedin.com/in/pmeisam"
                  className="icon_social"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                  {/* <p>LinkedIn</p> */}
                </motion.a>
                <motion.a
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.5 }}
                  initial={{ scale: 0 }}
                  target="_blank"
                  href="mailto: meisam.poorzand@gmail.com"
                  className="icon_social"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-envelope"></i>
                  {/* <p>E-mail</p> */}
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Contact>
  );
};

export default ContactPage;

// jacekjeznach.com/skills/
// caferati.me
