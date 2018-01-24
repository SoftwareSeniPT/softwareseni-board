import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnimateNumber from 'react-animate-number';
import className from 'classnames';
import './style.css';

class ProgressListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }
  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }
  render() {
    const { title, number, percentage, space, progress, noRound } = this.props;
    const progressClass = className('progress-list-item', {
      isLoaded: this.state.isLoaded,
      notLoaded: !this.state.isLoaded,
      noProgress: !progress,
    });
    return (
      <div className={progressClass} style={{ marginBottom: `${space}vh` }}>
        <div className="progress-list-item-text">
          <div className="progress-list-item-title">{title}</div>
          <div className="progress-list-item-total">
            {noRound ? (
              <span>
                {number}
              </span>
            ) : (
              <AnimateNumber number={number} speed={500 / number} />
            )}
          </div>
        </div>
        {progress && (
          <div className="progress-list-item-bar">
            <div className="progress-list-item-percentage" style={{ width: `${percentage}%` }} />
          </div>
        )}
      </div>
    );
  }
}

ProgressListItem.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  percentage: PropTypes.number,
  space: PropTypes.number,
  progress: PropTypes.boolean,
  noRound: PropTypes.boolean,
};

export default ProgressListItem;
