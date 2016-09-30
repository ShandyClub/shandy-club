import React, { PropTypes } from 'react'
import classNames from 'classnames/bind'
import styles from 'css/components/search/input.css'

const cx = classNames.bind(styles)

const SearchInput = ({ term, handleSearchTerm, onFocus, onClick }) => {

  let className = cx({
    base: true
  })

  const onChange = () => handleSearchTerm(SearchInput._input.value)

  return (
    <div>
      <input className={className} ref={ r => SearchInput._input = r } type='text' value={term || ''} onChange={onChange} onFocus={onFocus} onClick={onClick} />
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
