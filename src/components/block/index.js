import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './style.css';

class Block extends Component {
  render() {
    const blockWrapperClass = className('block-component', {
      'block-square': this.props.type === 'square',
      'block-long-vertical': this.props.type === 'long-vertical',
      'block-long-horizontal': this.props.type === 'long-horizontal',
    });

    return (
      <div className={blockWrapperClass}>
        <div className="block-component-inner">
          <div className="block-component-title">
            {this.props.title}
          </div>
          <div className="block-component-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Block.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  type: PropTypes.oneOf(['square', 'long-vertical', 'long-horizontal']),
};

export default Block;
