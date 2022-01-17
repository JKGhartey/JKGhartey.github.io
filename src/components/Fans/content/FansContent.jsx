import React from "react";
import "./fansContent.css";
import "./responsive.css";
import chatImg from "../../../images/chat-img.png";

const FansContent = () => {
  return (
    <section className="fans-content">
      <div className="fans--container">
        <div className="inner-container">
          <div className="fans-content-wrapper">
            <div className="fans-container-content">
              <div className="section-icon-wrapper">
                <button className="button">Fans</button>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="30.75"
                    stroke="#FFBB62"
                    strokeWidth="2.5"
                  ></circle>
                  <path
                    d="M33.74 46L32 45L36 38H42C42.5304 38 43.0391 37.7893 43.4142 37.4142C43.7893 37.0391 44 36.5304 44 36V24C44 23.4696 43.7893 22.9609 43.4142 22.5858C43.0391 22.2107 42.5304 22 42 22H22C21.4696 22 20.9609 22.2107 20.5858 22.5858C20.2107 22.9609 20 23.4696 20 24V36C20 36.5304 20.2107 37.0391 20.5858 37.4142C20.9609 37.7893 21.4696 38 22 38H31V40H22C20.9391 40 19.9217 39.5786 19.1716 38.8284C18.4214 38.0783 18 37.0609 18 36V24C18 22.9391 18.4214 21.9217 19.1716 21.1716C19.9217 20.4214 20.9391 20 22 20H42C43.0609 20 44.0783 20.4214 44.8284 21.1716C45.5786 21.9217 46 22.9391 46 24V36C46 37.0609 45.5786 38.0783 44.8284 38.8284C44.0783 39.5786 43.0609 40 42 40H37.16L33.74 46Z"
                    fill="white"
                  ></path>
                  <path d="M40 26H24V28H40V26Z" fill="white"></path>
                  <path d="M34 32H24V34H34V32Z" fill="white"></path>
                </svg>
              </div>
              <h2>Be assured of replies</h2>
              <p>
                With ear1, we assure you of getting a response to your messages.
                Don't be part of the noise in the dms. Get ahead of the game by
                paying a small fee.
              </p>
            </div>
          </div>
          <div className="chat-box">
            <div className="chat-box-container">
              <div className="profile">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 16L20 6L21.4 7.4L12.8 16L21.4 24.6L20 26L10 16Z"
                    fill="black"
                  ></path>
                </svg>
                <div className="img-profile">
                  <img src={chatImg} alt="chatImg" />
                </div>
                <p>Chris Ekpenyong</p>
              </div>
              <div className="chats active">
                <div className="chat1-wrapper">
                  <div className="chat1">
                    <p className="chat1-text">
                      Hey Boss, I am Charles an upcoming producer and I make
                      beats which I'd like you to hear
                    </p>
                    <p className="date">9:05pm</p>
                  </div>
                </div>
                <div className="chat2-wrapper">
                  <div className="chat2">
                    <p className="chat2-text">Hey, Nice to meet you</p>
                    <p className="date">9:05pm</p>
                  </div>
                </div>
                <div className="chat3-wrapper">
                  <div className="chat3">
                    <p className="chat3-text">
                      I am not looking to hire a producer now
                    </p>
                    <p className="date">9:0.5pm</p>
                  </div>
                </div>
              </div>
              <div className="input-section">
                <div className="input-section-container">
                  <div className="section-inner-container">
                    <p>Sorry. Another time</p>
                    <div className="input-icons">
                      <svg
                        className="attachment"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.9 18.8999L18.9 3.89994C21.4 1.29994 25.5 1.29994 28.1 3.79994C30.7 6.29994 30.7 10.4999 28.1 12.9999L28 13.0999L25.2 15.9999L23.8 14.5999L26.7 11.6999C28.4 9.99994 28.4 7.09994 26.7 5.39994C25 3.69994 22.1 3.59994 20.4 5.29994C20.4 5.29994 20.4 5.29994 20.3 5.39994L5.4 20.2999C3.6 21.9999 3.6 24.8999 5.3 26.5999C7 28.3999 9.9 28.3999 11.6 26.6999C11.6 26.6999 11.6 26.6999 11.7 26.5999L19.1 19.1999C20.1 18.1999 20 16.5999 19.1 15.6999C18.1 14.7999 16.6 14.7999 15.6 15.6999L11.5 19.7999L10.1 18.3999L14.3 14.1999C16.1 12.4999 18.9 12.5999 20.6 14.3999C22.2 16.0999 22.2 18.7999 20.6 20.5999L13.1 28.0999C10.6 30.6999 6.5 30.6999 3.9 28.1999C1.3 25.6999 1.3 21.4999 3.9 18.8999C3.9 18.9999 3.9 18.8999 3.9 18.8999Z"
                          fill="#BBBBBB"
                        ></path>
                      </svg>
                      <svg
                        className="mic"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23 14V17C23 18.8565 22.2625 20.637 20.9497 21.9497C19.637 23.2625 17.8565 24 16 24C14.1435 24 12.363 23.2625 11.0503 21.9497C9.7375 20.637 9 18.8565 9 17V14H7V17C7.00105 19.2131 7.81745 21.3482 9.29322 22.9973C10.769 24.6465 12.8006 25.6941 15 25.94V28H11V30H21V28H17V25.94C19.1994 25.6941 21.231 24.6465 22.7068 22.9973C24.1825 21.3482 24.9989 19.2131 25 17V14H23Z"
                          fill="#BBBBBB"
                        ></path>
                        <path
                          d="M16 22C17.3261 22 18.5979 21.4732 19.5355 20.5355C20.4732 19.5979 21 18.3261 21 17V7C21 5.67392 20.4732 4.40215 19.5355 3.46447C18.5979 2.52678 17.3261 2 16 2C14.6739 2 13.4021 2.52678 12.4645 3.46447C11.5268 4.40215 11 5.67392 11 7V17C11 18.3261 11.5268 19.5979 12.4645 20.5355C13.4021 21.4732 14.6739 22 16 22ZM13 7C13 6.20435 13.3161 5.44129 13.8787 4.87868C14.4413 4.31607 15.2044 4 16 4C16.7956 4 17.5587 4.31607 18.1213 4.87868C18.6839 5.44129 19 6.20435 19 7V17C19 17.7956 18.6839 18.5587 18.1213 19.1213C17.5587 19.6839 16.7956 20 16 20C15.2044 20 14.4413 19.6839 13.8787 19.1213C13.3161 18.5587 13 17.7956 13 17V7Z"
                          fill="#BBBBBB"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="send-icon">
                  <svg
                    className="send"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.45 15.11L5.45 4.11001C5.27757 4.02377 5.08389 3.98922 4.89228 4.01051C4.70067 4.0318 4.5193 4.10803 4.37 4.23001C4.22742 4.3495 4.12101 4.50639 4.06271 4.68305C4.00441 4.85971 3.99655 5.04912 4.04 5.23001L7 16L4 26.74C3.95923 26.8911 3.95447 27.0496 3.98611 27.2028C4.01774 27.356 4.08489 27.4997 4.18216 27.6223C4.27943 27.7448 4.40409 27.8428 4.54613 27.9084C4.68818 27.9741 4.84363 28.0054 5 28C5.15654 27.9991 5.31068 27.9614 5.45 27.89L27.45 16.89C27.6138 16.8061 27.7513 16.6786 27.8473 16.5216C27.9432 16.3645 27.994 16.1841 27.994 16C27.994 15.816 27.9432 15.6355 27.8473 15.4785C27.7513 15.3214 27.6138 15.1939 27.45 15.11ZM6.55 25.11L8.76 17H18V15H8.76L6.55 6.89001L24.76 16L6.55 25.11Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FansContent;
