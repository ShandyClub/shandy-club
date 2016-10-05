import React from 'react'
import styles from 'css/components/panel.css'

const Panel = ({ children }) => {

  return (
    <div className={styles.base}>
      { children }
    </div>
  )

}

export default Panel
