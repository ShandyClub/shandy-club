import React, { Component, PropTypes } from 'react';
// import styles from '../../css/components/loader.css';

export default class Loader extends Component {

  render() {

    const { loading, children } = this.props;

    const spinner = <div className={styles.base}></div>;

    const content = loading ? spinner : children;

    return (
      <div>

        {content}

      </div>
    );

  }

}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired
};
