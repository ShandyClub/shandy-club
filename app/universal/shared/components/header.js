import React from 'react'
import Logo from './logo'
import Text from './text'

import { APP_NAME } from '../constants'

const Header = () => {

  return (
    <div>
      <Logo />
      <Text tag={'h3'} content={APP_NAME} />
    </div>
  )

}

export default Header
