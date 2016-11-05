import React, { Component } from 'react'

import { View } from 'components/layout'

export default class App extends Component {

  render() {

    const { children } = this.props

    return (
      <View>

        { children }

      </View>
    )

  }

}
