import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './style.css';

class BlockWrapper extends Component {
  render() {
    const blockWrapperClass = className('block-wrapper-component', {
      'block-square': this.props.type === 'square',
      'block-long': this.props.type === 'long',
    });
    return (
      <div className={blockWrapperClass}>
        {this.props.children}
      </div>
    );
  }
}

BlockWrapper.propTypes = {
  children: PropTypes.array,
  type: PropTypes.oneOf(['square', 'long']),
};

export default BlockWrapper;
