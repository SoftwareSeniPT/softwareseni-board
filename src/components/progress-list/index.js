import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressListItem from '../progress-list-item';
import './style.css';

class ProgressList extends Component {
  computePercentage(lists = []) {
    const total = lists.map((list) => list.number).reduce((a, b) => (a + b), 0);
    return lists.map((list) => {
      const percentage = (list.number / total) * 100;
      return Object.assign({}, list, { percentage });
    });
  }

  render() {
    const { lists = [] } = this.props;

    if (!lists.length) {
      return (
        <div className="list-error">
          Not a list.
        </div>
      );
    }

    const listsWithPercentage = this.computePercentage(lists);
    return (
      <div className="progress-list-component">
        {listsWithPercentage.map((list, key) => (
          <ProgressListItem
            key={key}
            title={list.title}
            number={list.number}
            space={this.props.space}
            percentage={list.percentage} />
        ))}
      </div>
    );
  }
}

ProgressList.propTypes = {
  lists: PropTypes.array,
  space: PropTypes.number,
};

export default ProgressList;
