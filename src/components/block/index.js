import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Block extends Component {
  render() {
    return (
      <div className="block-component">
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
};

export default Block;
