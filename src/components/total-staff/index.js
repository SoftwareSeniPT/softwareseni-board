import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gauge from '../gauge-meter';
import './style.css';

class TotalStaff extends Component {
  render() {
    return (
      <div className="total-staff-component">
        <Gauge
          value={this.props.value}
          size={10}
          radius={100}
          sections={['#ffffff']}
          arrow={{ height: 60, width: 6, color: '#ccc' }}
          label="82" />
      </div>
    );
  }
}

TotalStaff.propTypes = {
  value: PropTypes.number,
};

export default TotalStaff;
