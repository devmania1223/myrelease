import React from 'react'
import styles from '../Styles/elements.module.css'
import BottomButton from './Base/BottomButton'
import HeroTop from './Base/HeroTop'
import SocialLinks from './SocialLinks'

const MainContainer = (props) => {
 
    return (
      <>
        <div className={styles.mainContainer}>
          <HeroTop />
          <SocialLinks
            setUpdatedLinks={props.setUpdatedLinks}
            updatedLinks={props.updatedLinks}
          />
          <BottomButton onClick={props.showModal} />
        </div>
      </>
    )
}

export default MainContainer
