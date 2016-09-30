import React, { PropTypes } from 'react'
import uuid from 'node-uuid'

const SearchSuggestions = ({ geocodes, setGeocode }) => {

  const suggestions = geocodes.map( g => (
    <div key={uuid.v4()} onClick={ () => setGeocode(g.get('center'), g.get('place_name')) }>
      { g.get('place_name') }
    </div>
  ))

  return (
    <div>
      { suggestions }
    </div>
  )

}

SearchSuggestions.propTypes = {
  geocodes: PropTypes.object.isRequired,
  setGeocode: PropTypes.func.isRequired,
}

export default SearchSuggestions
