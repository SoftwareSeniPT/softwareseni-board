import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressList from '../progress-list';
import './style.css';

class Attendance extends Component {
  render() {
    return (
      <div className="attendance-component">
        <ProgressList
          lists={this.props.value}
          space={7} />
      </div>
    );
  }
}

Attendance.propTypes = {
  value: PropTypes.array,
};

export default Attendance;
