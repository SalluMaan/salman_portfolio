import "./modal.css"
import React, { useState } from "react"

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none"

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="modal-close" onClick={handleClose}>
          Close
        </div>
      </section>
    </div>
  )
}
