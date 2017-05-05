import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnimateNumber from 'react-animate-number';
import './style.css';

class Total extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="total-component">
        <AnimateNumber number={value} speed={500 / value} />
      </div>
    );
  }
}

Total.propTypes = {
  value: PropTypes.number,
};

export default Total;
