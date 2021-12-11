import React from 'react'
import styles from '../../Styles/elements.module.css'

const Modal = ({ updatedLinks, setUpdatedLinks }) => {


    const valueChangeHandler = (e, inx) => {
        // console.log(e.target.value, inx)
        const allValues = [...updatedLinks]
        allValues[inx] = e.target.value
        setUpdatedLinks(allValues)
    }
  return (
    <div className={styles.modalContaine}>
      <h4>Change Button Text</h4>
      {updatedLinks.map((item, inx) => {
        return (
          <div key={inx} style={{ width: "80%" }}>
            <div
              style={{
                margin: "5px 0",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>Button {inx + 1}</label>
              <input value={item} onChange={(e) => valueChangeHandler(e, inx)} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Modal