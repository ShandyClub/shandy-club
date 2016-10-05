import React from 'react'
// import { avatar, features, subtitle, title } from './'
import styles from 'css/components/pub.css'

const Pub = ({ address, features, name, postcode }) => {

  console.log(address, features, name, postcode)

  return (
    <div className={styles.base}>
      Pub
    </div>
  )

}

export default Pub
