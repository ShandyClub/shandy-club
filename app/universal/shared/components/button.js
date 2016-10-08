import React from 'react'

const Button = ({ label, callback }) => {

  return (
    <div onClick={ () => callback() }>
      { label }
    </div>
  )

}

export default Button
