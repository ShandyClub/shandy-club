import React from 'react'
// import classNames from 'classnames/bind'
// import styles from 'css/components/search/input.css'

// const cx = classNames.bind(styles)

const SearchInput = ({ term, handleSearchTerm }) => {

  // let className = cx({
  //   base: true
  // })

  const onKeyUp = () => handleSearchTerm(SearchInput._input.value)

  return (
    <div>
      <input ref={ r => SearchInput._input = r } type='text' defaultValue={term} onKeyUp={onKeyUp} />
    </div>
  )

}

export default SearchInput
