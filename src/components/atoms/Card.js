import React, { useState } from "react"
import { Modal } from "../Modal/Modal"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  const [open, setopen] = useState(false)
  const images = [900, 800, 700, 600, 500].map(size => ({
    src: `https://picsum.photos/${size}/${size}`,
  }))

  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.7)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          href={projectLink}
          // onClick={() => setopen(true)}
        >
          Explore
        </a>
      </div>
      {/* <Modal show={open} handleClose={() => setopen(false)}> */}
      {/* <p>Modal</p> */}
      {/* <Carousel images={images} /> */}
      {/* </Modal> */}
    </div>
  )
}

export default Card
