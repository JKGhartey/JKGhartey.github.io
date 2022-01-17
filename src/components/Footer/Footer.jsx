import React from "react";
import "./footer.css";
import "./responsive.css";
import FooterLogo from "../../images/fotterlogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="submit-form">
          <p>
            <strong>Be in the know. </strong>
            Get access to amazing offers and discount
          </p>
          <input type="text" placeholder="Enter your email address" />
          <button>Submit</button>
        </div>
        <div className="footer-inner-container">
          <div className="social-media-wrapper">
            <div className="footer-logo">
              <img src={FooterLogo} alt="FooterLogo" />
            </div>
            <div className="social-media-links">
              <div className="social-icon-wrapper">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="24" fill="#F2F2F2" />
                  <path
                    d="M25 21H29.5L29 23H25V32H23V23H19V21H23V19.128C23 17.345 23.186 16.698 23.534 16.046C23.875 15.4018 24.4018 14.875 25.046 14.534C25.698 14.186 26.345 14 28.128 14C28.65 14 29.108 14.05 29.5 14.15V16H28.128C26.804 16 26.401 16.078 25.99 16.298C25.686 16.46 25.46 16.686 25.298 16.99C25.078 17.401 25 17.804 25 19.128V21Z"
                    fill="#121212"
                  />
                </svg>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="24" fill="#F2F2F2" />
                  <path
                    d="M27.3 17.5501C26.54 17.55 25.8103 17.8482 25.2679 18.3807C24.7255 18.9131 24.4139 19.6372 24.4 20.3971L24.372 21.9721C24.3704 22.0567 24.3509 22.1399 24.3148 22.2164C24.2787 22.2929 24.2269 22.3609 24.1626 22.416C24.0984 22.471 24.0233 22.5119 23.9422 22.5359C23.8611 22.5599 23.7758 22.5664 23.692 22.5551L22.131 22.3431C20.077 22.0631 18.109 21.1171 16.221 19.5441C15.623 22.8541 16.791 25.1471 19.604 26.9161L21.351 28.0141C21.434 28.0663 21.503 28.138 21.5518 28.223C21.6007 28.308 21.628 28.4036 21.6314 28.5016C21.6347 28.5996 21.614 28.6969 21.5711 28.785C21.5281 28.8731 21.4642 28.9494 21.385 29.0071L19.793 30.1701C20.74 30.2291 21.639 30.1871 22.385 30.0391C27.103 29.0971 30.24 25.5471 30.24 19.6911C30.24 19.2131 29.228 17.5501 27.3 17.5501ZM22.4 20.3601C22.4175 19.3962 22.7189 18.4588 23.2666 17.6653C23.8142 16.8719 24.5838 16.2576 25.4789 15.8995C26.374 15.5413 27.3549 15.4552 28.2987 15.6519C29.2426 15.8485 30.1074 16.3193 30.785 17.0051C31.496 17.0001 32.101 17.1801 33.454 16.3601C33.119 18.0001 32.954 18.7121 32.24 19.6911C32.24 27.3331 27.543 31.0491 22.777 32.0001C19.509 32.6521 14.757 31.5811 13.395 30.1591C14.089 30.1051 16.909 29.8021 18.539 28.6091C17.16 27.7001 11.671 24.4701 15.278 15.7861C16.971 17.7631 18.688 19.1091 20.428 19.8231C21.586 20.2981 21.87 20.2881 22.401 20.3611L22.4 20.3601Z"
                    fill="#121212"
                  />
                </svg>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="24" fill="#F2F2F2" />
                  <path
                    d="M28.8042 20.2757C29.4006 20.2757 29.8842 19.7922 29.8842 19.1957C29.8842 18.5993 29.4006 18.1157 28.8042 18.1157C28.2077 18.1157 27.7242 18.5993 27.7242 19.1957C27.7242 19.7922 28.2077 20.2757 28.8042 20.2757Z"
                    fill="#121212"
                  />
                  <path
                    d="M24 19.3784C23.0859 19.3784 22.1924 19.6495 21.4323 20.1573C20.6723 20.6651 20.0799 21.3869 19.7301 22.2314C19.3803 23.0759 19.2888 24.0052 19.4671 24.9017C19.6455 25.7982 20.0856 26.6217 20.732 27.2681C21.3783 27.9144 22.2018 28.3546 23.0983 28.5329C23.9949 28.7112 24.9241 28.6197 25.7686 28.2699C26.6131 27.9201 27.3349 27.3277 27.8427 26.5677C28.3506 25.8077 28.6216 24.9141 28.6216 24.0001C28.6216 22.7743 28.1347 21.5988 27.268 20.7321C26.4013 19.8653 25.2257 19.3784 24 19.3784ZM24 27.0001C23.4066 27.0001 22.8266 26.8241 22.3333 26.4945C21.8399 26.1648 21.4554 25.6963 21.2283 25.1481C21.0013 24.5999 20.9419 23.9967 21.0576 23.4148C21.1734 22.8329 21.4591 22.2983 21.8787 21.8787C22.2982 21.4592 22.8328 21.1735 23.4147 21.0577C23.9967 20.942 24.5999 21.0014 25.148 21.2284C25.6962 21.4555 26.1647 21.84 26.4944 22.3334C26.824 22.8267 27 23.4067 27 24.0001C27 24.7957 26.6839 25.5588 26.1213 26.1214C25.5587 26.684 24.7956 27.0001 24 27.0001Z"
                    fill="#121212"
                  />
                  <path
                    d="M24 16.6216C26.4031 16.6216 26.6878 16.6308 27.6368 16.6742C28.2075 16.6809 28.7728 16.7858 29.308 16.9841C29.6961 17.1338 30.0486 17.3632 30.3428 17.6573C30.6369 17.9515 30.8663 18.304 31.016 18.6921C31.2143 19.2273 31.3191 19.7926 31.3259 20.3633C31.3692 21.3123 31.3784 21.597 31.3784 24.0001C31.3784 26.4031 31.3693 26.6878 31.3259 27.6368C31.3191 28.2075 31.2143 28.7728 31.016 29.3081C30.8663 29.6962 30.6369 30.0487 30.3428 30.3428C30.0486 30.637 29.6961 30.8663 29.308 31.0161C28.7728 31.2144 28.2075 31.3192 27.6368 31.326C26.6879 31.3693 26.4033 31.3785 24 31.3785C21.5967 31.3785 21.3122 31.3694 20.3632 31.326C19.7925 31.3192 19.2272 31.2144 18.692 31.0161C18.3039 30.8663 17.9514 30.637 17.6572 30.3428C17.3631 30.0487 17.1337 29.6962 16.984 29.3081C16.7857 28.7728 16.6809 28.2075 16.6741 27.6368C16.6308 26.6878 16.6216 26.4031 16.6216 24.0001C16.6216 21.597 16.6307 21.3123 16.6741 20.3633C16.6809 19.7926 16.7857 19.2273 16.984 18.6921C17.1337 18.304 17.3631 17.9515 17.6572 17.6573C17.9514 17.3631 18.3039 17.1337 18.692 16.984C19.2272 16.7857 19.7925 16.6809 20.3632 16.6741C21.3122 16.6308 21.5969 16.6216 24 16.6216V16.6216ZM24 15C21.5557 15 21.2492 15.0103 20.2893 15.0541C19.5428 15.0691 18.8042 15.2106 18.105 15.4725C17.507 15.7037 16.964 16.0573 16.5107 16.5107C16.0573 16.964 15.7037 17.507 15.4725 18.105C15.2106 18.8043 15.0691 19.543 15.0541 20.2897C15.0103 21.2492 15 21.5557 15 24C15 26.4443 15.0103 26.7508 15.0541 27.7107C15.0691 28.4573 15.2106 29.196 15.4725 29.8954C15.7037 30.4933 16.0573 31.0364 16.5107 31.4897C16.964 31.943 17.507 32.2966 18.105 32.5279C18.8043 32.7898 19.543 32.9313 20.2897 32.9462C21.2492 32.9897 21.5557 33 24 33C26.4443 33 26.7508 32.9896 27.7107 32.9459C28.4573 32.9309 29.196 32.7894 29.8954 32.5275C30.4933 32.2963 31.0364 31.9426 31.4897 31.4893C31.943 31.036 32.2966 30.493 32.5279 29.895C32.7898 29.1957 32.9313 28.457 32.9462 27.7103C32.9897 26.7508 33 26.4443 33 24C33 21.5557 32.9896 21.2492 32.9459 20.2893C32.9309 19.5428 32.7894 18.8042 32.5275 18.105C32.2962 17.5071 31.9426 16.9641 31.4893 16.5109C31.0359 16.0576 30.4929 15.7041 29.895 15.4729C29.1957 15.2109 28.457 15.0695 27.7103 15.0545C26.7508 15.0104 26.4443 15 24 15Z"
                    fill="#121212"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <ul className="footer">
              <li>
                <strong className="footer-head">Links</strong>
              </li>
              <li>Home</li>
              <li>For fans</li>
              <li>For influencers</li>
              <li>FAQ's</li>
            </ul>
            <ul className="footer">
              <li>
                <strong className="footer-head">Get Help</strong>
              </li>
              <li>Support</li>
              <li>FAQ's</li>
              <li>Partnership</li>
            </ul>
            <ul className="footer">
              <li>
                <strong className="footer-head">Download</strong>
              </li>
              <li>Android</li>
              <li>IOS</li>
            </ul>
            <ul className="footer">
              <li>
                <strong className="footer-head">Resources</strong>
              </li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
