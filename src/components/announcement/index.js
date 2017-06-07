import React, { Component } from 'react';
import PropTypes from 'prop-types';
import timeago from 'timeago.js';
import './style.css';

class Announcement extends Component {
  render() {
    const { value = [] } = this.props;
    return (
      <div className="announcement-component">
        <div className="announcement-component-updated">Last update: {timeago().format(value[0].updated)}</div>
        {value.map((val, key) => (
          <div key={key} className="announcement-component-wrapper">
            <div className="announcement-component-key">{(key + 1)}</div>
            <div className="announcement-component-value">{val.text}</div>
          </div>
        ))}
      </div>
    );
  }
}

Announcement.propTypes = {
  value: PropTypes.array,
};

export default Announcement;
