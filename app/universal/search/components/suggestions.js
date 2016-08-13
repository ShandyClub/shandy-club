import React from 'react'
import uuid from 'node-uuid'

const SearchSuggestions = ({ geocodes }) => {

  // TODO - on click pass g.center

  const suggestions = geocodes.map( g => (
    <div key={uuid.v4()}>{ g.get('place_name') }</div>
  ))

  return (
    <div>
      { suggestions }
    </div>
  )

}

export default SearchSuggestions
