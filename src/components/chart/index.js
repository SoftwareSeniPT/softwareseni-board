import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import moment from 'moment';
import labelMapping from './label-mapping';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './style.css';

class Chart extends Component {
  render() {
    const { value = [] } = this.props;

    if (!value.length) {
      return (
        <div className="chart-error">
          No data
        </div>
      );
    }

    // Define lines
    const lines = [];
    const colors = ['#3fb4f9', '#e5c852', '#e0614d', '#0f9d58', '#f07a19', '#ffffff', '#F62459', '#81CFE0', '#87D37C'];
    Object.keys(value[0].content).map((key, i) => {
      lines.push({
        name: labelMapping(key),
        color: colors[i] || '#3fb4f9',
      });
    });

    // Define chart Object
    const chartObject = value.map((val) => {
      const { content } = val;
      const contentObject = {};
      Object.keys(content).map((key) => {
        const label = labelMapping(key);
        contentObject[label] = parseInt(content[key], 10);
      });

      // transform date
      const date = moment(val.title, 'MM-DD-YYYY');

      const object = Object.assign({}, {
        date: date.isValid() ? date.format('D MMM') : val.title,
      }, val, contentObject);
      return object;
    });

    const blockWrapperClass = className('block-component-chart');

    return (
      <div className={blockWrapperClass}>
        <ResponsiveContainer>
          <LineChart
            margin={{ top: 0, bottom: 0, left: 0 }}
            data={chartObject}>
            <XAxis axisLine={false} dataKey="date" />
            <YAxis axisLine={false} />
            <CartesianGrid vertical={false} />
            <Tooltip />
            <Legend align="right" verticalAlign="top" />
            {lines.map((line, key) => (
              <Line key={key} type="monotone" dataKey={line.name} stroke={line.color} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

Chart.propTypes = {
  value: PropTypes.array,
};

export default Chart;
