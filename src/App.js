import './App.css';
import MainContainer from './Components/MainContainer';
import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Components/Custom/Modal';
function App() {
  const [isModal, setIsModal] = useState(false)
  const [updatedLinks, setUpdatedLinks] = useState([
    "Facebook",
    "Instagram",
    "Twitter",
    "Youtube",
    "Whatsapp",
  ])
  const showModal = () => {
    setIsModal(!isModal);
  }

  const modalVar = {
    hidden: {
      x: 0,
      opacity: 0,
    },
    visible: {
      x: 50,
      opacity: 1,
    },
    exit: {
      x: 100,
      opacity: 0
    },
  }




  return (
    <div className="App">
      <MainContainer
        showModal={showModal}
        setUpdatedLinks={setUpdatedLinks}
        updatedLinks={updatedLinks}
      />
      {isModal && (
        <motion.div
          // initial={{opacity: 1, x: 0}}
          transition={{ ease: "easeOut", duration: 0.5 }}
          variants={modalVar}
          className="modal"
          initial="hidden"
          animate="visible"
        >
          <Modal
            updatedLinks={updatedLinks}
            setUpdatedLinks={setUpdatedLinks}
          />
        </motion.div>
      )}
    </div>
  )
}

export default App;
