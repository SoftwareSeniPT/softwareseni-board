import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressList from '../progress-list';
import './style.css';

class StaffDivision extends Component {
  render() {
    return (
      <div className="staff-division-component">
        <ProgressList
          lists={this.props.value}
          space={4} />
      </div>
    );
  }
}

StaffDivision.propTypes = {
  value: PropTypes.array,
};

export default StaffDivision;
