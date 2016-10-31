import React, { PropTypes } from 'react'

const SearchInput = ({ term, handleSearchTerm, onFocus, onClick }) => {

  const onChange = () => handleSearchTerm(SearchInput._input.value)

  return (
    <div>
      <input ref={ r => SearchInput._input = r } type='text' value={term || ''} onChange={onChange} onFocus={onFocus} onClick={onClick} />
    </div>
  )

}

SearchInput.propTypes = {
  term: PropTypes.string,
  handleSearchTerm: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SearchInput
