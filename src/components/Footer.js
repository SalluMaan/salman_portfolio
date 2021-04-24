import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { Modal } from "./Modal/Modal"
import CVIcon from "../images/cv.svg"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <br />
          <a className="email-link">{data.contactPhone}</a>
          {/* <a className="cv-link" href="#" style={{ display: "flex" }}>
            <img src={CVIcon} alt="css" style={{ height: 35, width: 35 }}></img>
            <div className="email-link">Salman's CV</div>
          </a> */}
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
            Made With <icon>❤</icon> by Muhammad Salman Hafeez
            {/* <a href="https://www.chetanverma.com/">Muhammad Salman Hafeez</a> */}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
