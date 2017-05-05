import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Container extends Component {
  render() {
    return (
      <div className="container-component">
        {this.props.children}
      </div>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
