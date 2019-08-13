import React from 'react';
import './styles.css';

const GeneralInfo = (props) => {

  const data = {
    "Hostname": `${props.data.hostname} (${props.data.host_ip})`,
    "Kernel": `${props.data.type} ${props.data.release}`,
    "Processor": `${props.data.processor}`,
    "Distribution": `${props.data.distribution}`,
    "CPU Load Avg": `${props.data.load_1.toFixed(2)}, ${props.data.load_5.toFixed(2)}, ${props.data.load_15.toFixed(2)}`,
    "CPU Temperature": `${props.data.cpu_temp}°C`,
  };

  const items = Object.keys(data).map((key, index) => {
    return (
      <div className="tb-row" key={index}>
        <div className="tb-cell">
          {key}
        </div>
        <div className="tb-cell">
          {data[key]}
        </div>
      </div>
    );
  });

  return (
    <div className="tb-container">
      {items}
    </div>
  );
};

export default GeneralInfo;