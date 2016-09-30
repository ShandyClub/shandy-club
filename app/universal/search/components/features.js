import React from 'react'
import uuid from 'node-uuid'

import styles from 'css/components/search/feature.css'

const SearchFeatures = ({ features, toggleFeature }) => {

  const featureList = features.keySeq().map( f => (
    <div key={uuid.v4()} className={ features.get(f) ? styles.active : styles.base } onClick={ () => toggleFeature(f) }>{ f }</div>
  ))

  return (
    <div>
      { featureList }
    </div>
  )

}

export default SearchFeatures
