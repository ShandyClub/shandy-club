import React, { Component } from 'react';
// import Header from '../component/header';

export default class App extends Component {

  render() {

    return (
      <div>

        {/*<Header />*/}

        {/* render containers dynamically based on route */}
        {this.props.children}

      </div>
    );

  }

}
