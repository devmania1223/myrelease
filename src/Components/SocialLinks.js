import React, { useState, useRef, useEffect } from "react"
// import Button from './Custom/Button'
import {Reorder} from 'framer-motion'


const SocialLinks = ({ updatedLinks, setUpdatedLinks }) => {
  // const [list, setList] = useState(updatedLinks)

  const socialLinkRef = useRef(null)

  useEffect(() => {
    setUpdatedLinks(updatedLinks)
  }, [updatedLinks, setUpdatedLinks])

  return (
    <div className="elemContainer" ref={socialLinkRef}>
      <Reorder.Group
        axis="y"
        values={updatedLinks}
        onReorder={setUpdatedLinks}
        dragMomentum={true}
      >
        {updatedLinks.map((item) => (
          <Reorder.Item dragConstraints={socialLinkRef} key={item} value={item}>
            <button> {item} </button>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  )
}

export default SocialLinks
