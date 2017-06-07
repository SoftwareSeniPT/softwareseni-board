import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gauge from '../gauge-meter';
import './style.css';

class EnglishLevel extends Component {
  render() {
    return (
      <div className="english-level-component">
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

EnglishLevel.propTypes = {
  value: PropTypes.number,
};

export default EnglishLevel;
