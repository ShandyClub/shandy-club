import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
// TODO - can resolve.alias be used here?
import styles from '../../../client/css/components/rating.css';

const cx = classNames.bind(styles);

const Component = ({ cheers }, context) => {

  let className = cx({
    base: true
  });

  return (
    <div className={className}>Cheers: {cheers}</div>
  );

};

Component.propTypes = {
  cheers: PropTypes.number.isRequired
};

export default Component;
