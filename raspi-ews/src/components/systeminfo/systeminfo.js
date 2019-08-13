import React from 'react';
import Card from '../common/Card';
import GeneralInfo from './general';

import Data from '../../models/data';

class SystemInfo extends React.Component {

  render() {
    return (
      <Card>
        <h4>System Information</h4>
        <GeneralInfo data={{ ...Data.os_info, ...Data.cpu_info }} />
      </Card>
    );
  }
};

export default SystemInfo;