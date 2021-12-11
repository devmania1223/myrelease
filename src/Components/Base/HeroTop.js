import React, {useRef} from 'react'
import {motion} from "framer-motion"
const HeroTop = () => {

  const dragConstraints = useRef(null)
    return (
      <div className="elemContainer" ref={dragConstraints}>
        {/* User picture */}
        <motion.img
          drag
          dragConstraints={dragConstraints}
          transition={{stiffness: 100}}
          src="/pimage.jpg"
          alt="profilePicture"
          height={70}
          width={70}
          style={{ borderRadius: 50 }}
        />
        {/* User Name */}
        <motion.h3 drag dragConstraints={dragConstraints}>
          User Name
        </motion.h3>

        {/* Desctiption */}
        <motion.h6
          style={{ textAlign: "center", fontWeight: "lighter" }}
          drag
          dragConstraints={dragConstraints}
        >
          Dolore commodo adipisicing non cupidatat laborum Lorem incididunt
          culpa elit commodo et culpa. Ea velit ut qui est Lorem dolor nostrud
          nulla. Amet cupidatat labore cillum quis tempor culpa esse pariatur ea
          mollit sunt id do. Enim irure id enim non commodo id velit et labore
          proident proident do eu.
        </motion.h6>
      </div>
    )
}

export default HeroTop
