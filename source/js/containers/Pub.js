import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../components/loader';
import Pub from '../components/pub';
import * as PubActions from '../actions/pub';

class PubContainer extends Component {

  componentDidMount() {

    const { requestPub } = this.props;

    requestPub()

  }

  render() {

    const { pub, isFetching, status, errorMessage } = this.props;

    return (
      <div>

        <Loader loading={isFetching}>
          <Pub pub={pub} />
        </Loader>

      </div>
    );

  }

}

function mapStateToProps(state) {

  const { items: pub, isFetching, status, errorMessage } = state.pub;

  return {
    pub,
    isFetching,
    status,
    errorMessage
  };

}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(PubActions, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(PubContainer);
