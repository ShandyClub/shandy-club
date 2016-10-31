import React, { PropTypes } from 'react'

const Icon = ({ name, theme }) => {

  return (
    <i className={`material-icons ${theme}`}>
      { name }
    </i>
  )

}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  theme: PropTypes.string,
}

export default Icon
