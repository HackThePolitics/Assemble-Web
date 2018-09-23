import React from 'react';

import torontoElectionsMap from '../assets/toronto-election-map.png';
import ridingsPieChart from '../assets/ridings-pie-chart.svg';
import ridingsLegend from '../assets/ridings-legend.png';

import './RidingsMap.css';

const RidingsMap = () => (
  <div className="ridings-map-container">
    <div className="ridings-map-left">
      <div className="ridings-map-header">RIDINGS MAP</div>
      <img className="ridings-legend" src={ridingsLegend} />
    </div>
    <div>
      <img className="ridings-map-middle" src={torontoElectionsMap} />
    </div>
    <div className="ridings-map-right">
      <div className="ridings-map-header">PERCENTAGE FOR & AGAINST</div>
      <img src={ridingsPieChart} className="ridings-pie-chart" />
    </div>
  </div>
);

export default RidingsMap;
