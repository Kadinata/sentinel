import React from 'react';
import { StatsCard } from '../../../components/common/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const moddiv = (dividend, divisor) => ((dividend - (dividend % divisor)) / divisor);

const formatUptime = (uptime) => {

  if (uptime === null) {
    return '\u2014';
  }

  const seconds = String(uptime % 60).padStart(2,0);
  const minutes = String(moddiv(uptime, 60) % 60).padStart(2,0);
  const hours = String(moddiv(uptime, 3600) % 24).padStart(2,0);
  const days = moddiv(uptime, 86400);

  if (days > 0) {
    return `${days} d ${hours} h ${minutes} m ${seconds} s`;
  } else if (hours > 0) {
    return `${hours} h ${minutes} m ${seconds} s`;
  }

  return `${minutes} m ${seconds} s`;
};

const Uptime = ({ uptime, ...props }) => {
  return (
    <StatsCard
      label={"System Uptime"}
      value={formatUptime(uptime)}
      background={"#f8c04e"}
      icon={
        <FontAwesomeIcon
          className="fa-2x"
          icon={faClock}
        />
      }
    />
  );
};

Uptime.defaultProps = {
  uptime: 0,
};

export default Uptime;