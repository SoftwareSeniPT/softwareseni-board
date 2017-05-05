import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Total from '../total';
import './style.css';

class OfficePlants extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="office-plants-component">
        <Total value={value} />
      </div>
    );
  }
}

OfficePlants.propTypes = {
  value: PropTypes.number,
};

export default OfficePlants;
