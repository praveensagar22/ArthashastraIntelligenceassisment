import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import './MedalsLineChart.css'; // Import the CSS file

const MedalsLineChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch the data from the dummyData.json file (Replace the URL with your API endpoint)
    fetch('/Data/dummyData.json')
      .then((response) => response.json())
      .then((data) => {
        // Transform the fetched data to the format required by Plotly.js
        const xData = data.map(item => item.Year);
        const yData = data.map(item => item.Medals);
        setChartData({ x: xData.sort(), y: yData.sort() });
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  

  return (
    <div className="medals-chart-container">
      <Plot
        
        data={[
          {
            x: chartData.x,
            y: chartData.y,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'blue' },
            line: { shape: 'spline' },
            
          },
        ]}
        layout={{
          title: 'Medals Won by Year',
          xaxis: { title: 'Year'},
          yaxis: { title: 'No. of Medals' },
          
        }}
        config={{ displayModeBar: false }}
        className="medals-chart"
        
        
      />
    </div>
  );
};

export default MedalsLineChart;
