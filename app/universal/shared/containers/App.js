import React, { Component } from 'react'

import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Image } from '../components/image'
import { TitleText } from '../components/text'

import { APP_NAME } from '../constants'

export default class App extends Component {

  render() {

    const { children } = this.props

    return (
      <div>

        <Header>
          <Image src='shandy-club-logo.png' width='40px' height='40px' />
          <TitleText>{ APP_NAME }</TitleText>
        </Header>

        { children }

        <Footer />

      </div>
    )

  }

}
