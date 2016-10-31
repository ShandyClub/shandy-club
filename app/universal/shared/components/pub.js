import React from 'react'
import uuid from 'node-uuid'

const Pub = ({ address, features, name, postcode }) => {

  const renderFeatures = features.keySeq().map( f => features.get(f) ? (
    <div key={uuid.v4()}>{ f }</div>
  ) : null )

  return (
    <div>

      <h4>{ name }</h4>

      <h6>{ address } { postcode }</h6>

      { renderFeatures }

    </div>
  )

}

export default Pub
