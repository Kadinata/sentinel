import React from 'react';
import { StatsCard } from '../../../components/common/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

const cardIcon = (<FontAwesomeIcon className="fa-2x" icon={faThermometerHalf} />);

const CpuTemp = ({ temperature, ...props }) => {
  temperature = temperature === null ? '\u2014' : temperature.toFixed(2);

  return (
    <StatsCard
      label={"Core Temp"}
      value={`${temperature} \u2103`}
      background={"#c0392b"}
      icon={cardIcon}
    />
  );
};

CpuTemp.defaultProps = {
  temperature: null,
};

export default CpuTemp;