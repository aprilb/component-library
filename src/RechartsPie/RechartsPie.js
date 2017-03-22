import React, { PropTypes } from 'react';
import {
 PieChart, Pie, Cell, Legend,
} from 'recharts';

const RechartsPie = ({ data, colors, styles, chartProportions }) =>
  <div style={{ display: 'flex', justifyContent: 'space-around', margin: 'auto' }} >
    <PieChart width={chartProportions.chartWidth} height={chartProportions.chartHeight} data={data} >
      <Legend layout="vertical" iconSize={chartProportions.iconSize} wrapperStyle={styles} iconType="square" verticalAlign="middle" align="right" />
      <Pie data={data} cx="50%" cy="50%" innerRadius={chartProportions.pieInnerRadius} outerRadius={chartProportions.pieOuterRadius} >
        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))
        }
      </Pie>
    </PieChart>
  </div>;

RechartsPie.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  colors: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.object,
  chartProportions: PropTypes.object,
};

export default RechartsPie;
