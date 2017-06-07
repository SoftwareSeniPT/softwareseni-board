import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class BigText extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="big-text-component">
        {value}
      </div>
    );
  }
}

BigText.propTypes = {
  value: PropTypes.string,
};

export default BigText;
