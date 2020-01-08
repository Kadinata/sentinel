import React from 'react';
import { StatsCard } from '../../../components/common/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

const CpuTemp = ({ temperature, ...props }) => {
  temperature = temperature === null ? '\u2014' : temperature.toFixed(2);

  return (
    <StatsCard
      label={"Core Temp"}
      value={`${temperature} \u2103`}
      background={"#c0392b"}
      icon={
        <FontAwesomeIcon
          className="fa-2x"
          icon={faThermometerHalf}
        />
      }
    />
  );
};

CpuTemp.defaultProps = {
  temperature: null,
};

export default CpuTemp;