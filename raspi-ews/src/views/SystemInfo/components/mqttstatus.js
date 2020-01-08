import React from 'react';
import { StatsCard } from '../../../components/common/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';

const MqttStatus = (props) => {

  return (
    <StatsCard
      label={"MQTT Server"}
      value={`Offline`}
      background={'#0abde3'}
      icon={
        <FontAwesomeIcon
          className="fa-2x"
          icon={faServer}
        />
      }
    />
  );
};

export default MqttStatus;