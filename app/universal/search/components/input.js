import React from 'react'
import classNames from 'classnames/bind'
import styles from 'css/components/search/input.css'

const cx = classNames.bind(styles)

const SearchInput = ({ term, handleSearchTerm, onFocus, onClick }) => {

  let className = cx({
    base: true
  })

  const onKeyUp = () => handleSearchTerm(SearchInput._input.value)

  return (
    <div>
      <input className={className} ref={ r => SearchInput._input = r } type='text' defaultValue={term} onKeyUp={onKeyUp} onFocus={onFocus} onClick={onClick} />
    </div>
  )

}

export default SearchInput
