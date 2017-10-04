import React from 'react';
import './Chart.css';

export default function Chart(props) {
  return (
    <div className="chart">
      {props.children}
    </div>
  );
}
