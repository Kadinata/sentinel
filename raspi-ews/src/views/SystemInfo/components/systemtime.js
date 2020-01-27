import React from 'react';
import { StatsCard } from '../../../components/common/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

const SystemTime = ({ time, ...props }) => {
  const date = new Date(time);
  const date_options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  const time_options = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };

  return (
    <StatsCard
      label={date.toLocaleDateString('default', date_options)}
      value={date.toLocaleTimeString('default', time_options)}
      background={"#e67e22"}
      icon={
        <FontAwesomeIcon
          className="fa-2x"
          icon={faCalendarAlt}
        />
      }
    />
  );
};

SystemTime.defaultProps = {
  time: 0,
};


export default SystemTime;