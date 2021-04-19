import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              <br></br>

              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              {/* <br></br>
              <br></br>
              {data.aboutParaThree} */}
            </p>
          </div>
          <div className="image-wrapper">
            <img
              src={data.aboutImage}
              alt="about"
              height={400}
              width={400}
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
