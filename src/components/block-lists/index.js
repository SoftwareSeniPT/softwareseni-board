import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class BlockLists extends Component {
  render() {
    const { value } = this.props;
    function getColor(score) {
      switch (score) {
        case 'S':
          return '#39cb74';
        case 'A':
          return '#1fc39f';
        case 'B':
          return '#f9bd60';
        default:
          return '#be3a31';
      }
    }
    return (
      <div className="blockList-component">
        {value && value.length && value.map((val, key) => {
          return (
            <div className="blockList--item" key={key}>
              <div className="blockList--itemWrapper">
                <div className="blockList--title">{val.projectname}</div>
                <div className="blockList--latestScore" style={{
                  backgroundColor: getColor(val[' score']),
                }}>{val[' score']}</div>
                <div className="blockList--lastWeekScores">{val[' previousweeksscore']}</div>
                <div className="blockList--member">{val[' member']}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

BlockLists.propTypes = {
  value: PropTypes.number,
};

export default BlockLists;
