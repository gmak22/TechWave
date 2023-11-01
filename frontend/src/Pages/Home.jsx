import React from "react";
import Styled from "styled-components";
import hero_img from "../Assets/hero-img.png";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Css/utils.css";
import { faCheck, faPlay } from "@fortawesome/free-solid-svg-icons";
import learning_img from "../Assets/learning-people-img.png";

function Home() {
  return (
    <DIV>
      {/* ------- Hero section -------  */}
      <div className="hero-section">
        <div className="hero-left">
          <div className="hero-left-heading">
            <h1>
              An investment in <br />
              <span className="hero-left-heading-dark">Knowledge</span> pays the{" "}
              <br />
              the best interest
            </h1>
          </div>
          <div className="hero-left-paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur .<br />
              adipisicing elit. Voluptatum quisquam <br />
              Aperiam, debitis magnam.
            </p>
          </div>
          <div className="hero-left-enrole">
            <button className="big_dark_button">Enroll Now</button>
            <div className="hero-left-enrole-video-play">
              <div className="hero-left-enrole-video-play-icon">
                <FontAwesomeIcon
                  icon={faPlay}
                  style={{ color: "0056d2", fontSize: "20px" }}
                />
              </div>
              <p>Watch Video</p>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_img} alt="hero-image" />
        </div>
      </div>

      {/* ------- Learning Section ------ */}

      <div className="learning-section">
        <div className="learning-left">
          <img src={learning_img} alt="" />
        </div>
        <div className="learning-right">
          <div className="learning-right-heading">
            <h1>
              Enhance Your Learning with us <br />
              From Any Where
            </h1>
          </div>
          <div className="learning-right-paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur. adipisicing elit.
              <br /> Voluptatum quisquam Aperiam, debitis magnam hibru
              <br />
              dolor sit amet consectetur.
            </p>
          </div>

          <div className="learning-right-ticks">
            <div className="ticks-cover">
              <div className="ticks ticks-red">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "ffffff", fontSize: "20px" }}
                />
              </div>
              <p>Expert Traineer</p>
            </div>

            <div className="ticks-cover ">
              <div className="ticks ticks-green">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "ffffff", fontSize: "20px" }}
                />
              </div>
              <p>Great Result</p>
            </div>
            <div className="ticks-cover">
              <div className="ticks ticks-light-blue">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "ffffff", fontSize: "20px" }}
                />
              </div>
              <p>Online Learning</p>
            </div>
            <div className="ticks-cover">
              <div className="ticks ticks-dark-blue">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "ffffff", fontSize: "20px" }}
                />
              </div>
              <p>Life Time Access</p>
            </div>
          </div>
          <div>
            <button className="extra_big_dark_button">Dicover More</button>
          </div>
        </div>
      </div>
    </DIV>
  );
}

export default Home;

const DIV = Styled.div`
    font-family: var(--primary-font-family);

    /* -------- hero section ------- */

    .hero-section{
        width : 90%;
        margin: auto;
        display: flex;
        justify-content : space-between;
    }
    .hero-left{
        width : 50%;
        display : flex;
        flex-direction : column;
        justify-content : space-evenly;
        /* border : 1px solid red; */
    }
    .hero-left-heading{
      font-weight : 400;
      letter-spacing : 1px;
      /* height : 20%; */
    }
    .hero-left-heading-dark{
        color : var(--primary-color)
    }
    .hero-left-paragraph p{
        font-weight : 400;
        font-size : 18px;
    }
    .hero-left-enrole{
        display : flex;
        align-items : center;
    }
    .hero-left-enrole-video-play{
        display : flex;
        margin: 0 30px;
        justify-content : center;
        align-items : center;
    }
    .hero-left-enrole-video-play-icon{
        display : flex;
        width : 50px;
        height : 50px;
        justify-content : center;
        align-items : center;
        border-radius : 100px;
        box-shadow: var(--primary-color) 0px 1px 15px;
        cursor: pointer;
    }
    .hero-left-enrole-video-play p{
        margin : 0px 15px;
    }
    .hero-right{
        width : 50%;
        /* border : 1px solid red; */
    }
    .hero-right >img{
        width : 100%;
        object-fit: cover;
    }

    /* ------ learning Section --------- */

    .learning-section{
        width : 90%;
        margin: 5rem auto;
        display : flex;
    }
    .learning-left{
        width : 50%;
    }
    .learning-left img{
        width : 100%;
    }
    .learning-right{
        width : 50%;
        display : flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .learning-right-heading h1{
        font-weight : 500;
    }
    .learning-right-paragraph p{
        font-size : 18px;
    }
    .learning-right-ticks{
        display : grid;
        grid-template-columns : repeat(2,1fr); 
        gap : 1rem;
    }
    .ticks-cover{
        display : flex;
        align-items : center;
    }
    .ticks{
        display : flex;
        align-items : center;
        padding : 1rem;
        border-radius : 100px; 
    }
    .ticks-cover p{
        margin : 0 1rem;
    }
    .ticks-red{
        background-color : #f23f3c;
    }
    .ticks-green{
        background-color : #0fae53;
    }
    .ticks-light-blue{
        background-color : #0c81c7;
    }
    .ticks-dark-blue{
        background-color : #135e98;
    }

     /* @media (max-width:780px) { */
     @media (max-width:1080px) {


        /* -------- hero section ------- */

        .hero-section{
            flex-direction: column-reverse;
            gap: 2rem;
        }
        .hero-left{
            width : 100%;
            justify-content : space-between;
            gap: 2rem;
        }
        .hero-right{
            width : 100%;
        }

        /* ------ learning Section --------- */

        .learning-section{
            flex-direction: column;
        }
        .learning-left{
            width : 100%;
        }
        .learning-right{
            width : 100%;
            justify-content : space-between;
            gap: 2rem;
        }


     }
`;
