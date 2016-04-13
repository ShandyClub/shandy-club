import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/component.css';

const cx = classNames.bind(styles);

const Component = (props, context) => {

  let className = cx({
    base: true
  });

  return (
    <div className={className}><%= module %> component</div>
  );

};

Component.propTypes = {

};

export default Component;
