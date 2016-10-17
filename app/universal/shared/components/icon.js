import React, { PropTypes } from 'react'
import classNames from 'classnames/bind'
import styles from 'css/components/icon.css'

const cx = classNames.bind(styles)

const Icon = ({ name, theme }) => {

  let className = cx({ [`${theme}`]: theme })

  return (
    <i className={`material-icons ${className}`}>
      { name }
    </i>
  )

}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  theme: PropTypes.string,
}

export default Icon
