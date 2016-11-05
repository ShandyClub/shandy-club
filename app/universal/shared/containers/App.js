import React, { Component } from 'react'

import { Image } from 'components/image'
import { TitleText } from 'components/text'
import { View } from 'components/layout'

import { APP_NAME } from '../constants'

export default class App extends Component {

  render() {

    const { children } = this.props

    return (
      <View>

        <Image src='shandy-club.png' width='50px' height='50px' center />
        <TitleText>{ APP_NAME }</TitleText>

        { children }

      </View>
    )

  }

}
