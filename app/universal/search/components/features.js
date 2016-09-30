import React, { PropTypes } from 'react'
import { Map } from 'immutable-props'
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

SearchFeatures.propTypes = {
  features: Map.isRequired,
  toggleFeature: PropTypes.func.isRequired,
}

export default SearchFeatures
