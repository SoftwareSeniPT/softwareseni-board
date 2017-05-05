import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './style.css';

class BlockWrapper extends Component {
  render() {
    const blockWrapperClass = className('block-wrapper-component', {
      'block-wrapper-1': this.props.columnWidth === 1,
      'block-wrapper-2': this.props.columnWidth === 2,
      'block-wrapper-3': this.props.columnWidth === 3,
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
  columnWidth: PropTypes.number,
};

export default BlockWrapper;
