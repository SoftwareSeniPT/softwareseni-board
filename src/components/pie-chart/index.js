import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './style.css';

class PieChartC extends Component {
  render() {
    const blockWrapperClass = className('block-component-chart');
    const COLORS = ['#2ECC71', '#00C49F', '#FABE58', '#C0392B'];

    if (!this.props.value) return null;

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = (value) => {
      console.log(value, 'val');
      const { cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload } = value;
     	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x  = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy  + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {payload.name} ({payload.value} %)
        </text>
      );
    };

    return (
      <div className={blockWrapperClass}>
        <PieChart width={400} height={150}>
          <Pie
            labelLine={false}
            label={renderCustomizedLabel}
            isAnimationActive={false} data={this.props.value} outerRadius={70} fill="#8884d8">
            { this.props.value && this.props.value.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />) }
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    );
  }
}

PieChartC.propTypes = {
  value: PropTypes.array,
};

export default PieChartC;
