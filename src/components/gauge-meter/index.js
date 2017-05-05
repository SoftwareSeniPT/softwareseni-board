import AnimateNumber from 'react-animate-number';
import PropTypes from 'prop-types';
import './style.css';
const React = require('react');
const ArcGauge = require('./arc');

let Gauge = React.createClass({
  getDefaultProps() {
    return {
      value: 0,
      size: 15,
      radius: 85,
      sections: ['#ccc', '#999', '#444'],
      arrow: null,
      label: null,
      legend: null
    }
  },

  propTypes: {
    value: PropTypes.number.isRequired,
    sections: PropTypes.any,
    size: PropTypes.number,
    radius: PropTypes.number,
    arrow: PropTypes.object,
    label: PropTypes.string,
    legend: PropTypes.any,
  },

  getInitialState() {
    return {
      width: 212,
    }
  },

  componentDidMount() {
    this.setState({
      width: this.node.offsetWidth
    })
  },

  componentWillReceiveProps(nextProps) {
    let history = this.state.history || new Array(100).fill(0);

    if (history.length > 100) {
      history.shift();
    }

    history.push(nextProps.value);

    this.setState({
      history: history,
      width: this.node.offsetWidth
    })
  },

  render() {
    return (
      <section
        ref={(node) => (this.node = node)}
        className="gauge">
        <div className="gauge-value">
          <AnimateNumber number={this.props.value} speed={500 / this.props.value} />
        </div>
        <ArcGauge
          value={this.props.value}
          size={this.props.size}
          radius={this.props.radius}
          sections={this.props.sections}
          arrow={this.props.arrow}
          label={this.props.label}
          legend={this.props.legend}
          width={this.state.width} />
      </section>
    );
  }
});


module.exports = Gauge;
