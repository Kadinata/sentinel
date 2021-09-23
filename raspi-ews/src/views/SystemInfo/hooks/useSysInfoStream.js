import React from 'react';
import Endpoint from '../../../services/Endpoint';

const ENDPOINT_STREAM = 'api/v1/sysinfo/stream';

const useSysInfoStream = ({ start, initialData = {} }) => {
  const { uptime, localtime, startTime, ...restData } = initialData;

  const [timeData, setTimeData] = React.useState({ uptime, localtime, startTime });
  const [data, setData] = React.useState(restData);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    if (!start || started) return;
    const event = Endpoint.subcsribe(ENDPOINT_STREAM, (data) => {

      const { uptime } = data;

      if (typeof uptime !== 'undefined') {
        setTimeData((prevData) => ({ ...prevData, ...data }));
      } else {
        setData((prevData) => ({ ...prevData, ...data }));
      }
      setStarted(true);
    });
  }, [started, start, setTimeData, setData]);

  return { data, timeData };
};

export default useSysInfoStream;