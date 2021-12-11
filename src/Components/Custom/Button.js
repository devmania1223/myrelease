import React, {useRef} from 'react'

const Button = () => {

    const linkRef = useRef()


    return (
      <div>
        <a
          data-link="okay"
          ref={linkRef}
          href="google.com"
          target="_blank"
          onClick={() =>
            console.log(linkRef.current.getAttribute("data-link"))
          }
        >
          FaceBook
        </a>
      </div>
    )
}

export default Button
