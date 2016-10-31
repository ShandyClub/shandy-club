import React, { PropTypes } from 'react'
import { Map } from 'immutable-props'
import uuid from 'node-uuid'

const SearchFeatures = ({ features, toggleFeature }) => {

  const featureList = features.keySeq().map( f => (
    <div key={uuid.v4()} className={ features.get(f) ? 'TODO active' : 'TODO normal' } onClick={ () => toggleFeature(f) }>{ f }</div>
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
