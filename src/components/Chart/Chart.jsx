// src/components/Chart.js

import React, { useEffect } from 'react';
import Highcharts from 'highcharts'; // Import Highcharts
import HighchartsReact from 'highcharts-react-official'; // Import HighchartsReact wrapper

function Chart() {
  // Sample chart configuration
  const chartOptions = {
    title: {
      text: 'My Highcharts Chart'
    },
    series: [
      {
        data: [1, 2, 3, 4, 5]
      }
    ]
  };

  useEffect(() => {
    // Initialize and render the Highcharts chart
    Highcharts.chart('chart-container', chartOptions);
  }, []);

  return (
    <div id="chart-container">
      {/* This div will be used to render the Highcharts chart */}
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}

export default Chart;