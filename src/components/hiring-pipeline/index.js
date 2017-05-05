import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Total from '../total';
import './style.css';

class HiringPipeline extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="hiring-pipeline-component">
        <Total value={value} />
      </div>
    );
  }
}

HiringPipeline.propTypes = {
  value: PropTypes.number,
};

export default HiringPipeline;
