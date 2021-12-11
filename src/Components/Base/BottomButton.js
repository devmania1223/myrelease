import React from 'react'


const BottomButton = (props) => {
    return (
      <div className="elemContainer">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <button onClick={props.onClick} >Click to edit Social</button>
        </div>
      </div>
    )
}

export default BottomButton
