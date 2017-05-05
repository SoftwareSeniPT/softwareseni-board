import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressList from '../progress-list';
import './style.css';

class OpenedPosition extends Component {
  render() {
    return (
      <div className="opened-position-component">
        <ProgressList
          lists={this.props.value}
          space={3} />
      </div>
    );
  }
}

OpenedPosition.propTypes = {
  value: PropTypes.array,
};

export default OpenedPosition;
