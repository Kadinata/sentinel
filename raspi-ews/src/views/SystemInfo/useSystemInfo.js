import React from 'react';
import { fetchData } from '../../utils';

const HOSTNAME = 'raspberrypi.local';
const ENDPOINT_BASE = `http://${HOSTNAME}:3000`;
const ENDPOINT_SYSINFO = `${ENDPOINT_BASE}/api/v1/sysinfo`;
const ENDPOINT_STREAM = `${ENDPOINT_BASE}/api/v1/sysinfo/stream`;

const useSystemInfo = () => {

  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [listening, setListening] = React.useState(false);
  const [started, setStarted] = React.useState(false);

  const fetchSysInfo = React.useCallback(
    async () => {
      setIsLoading(true);
      try {
        const data = await fetchData(ENDPOINT_SYSINFO);
        setData(data);
        setListening(true);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    },
    [setData, setError, setIsLoading]
  );

  React.useEffect(() => {
    fetchSysInfo();
  }, [fetchSysInfo]);

  React.useEffect(() => {
    if ((!listening) || started) return;
    console.log('Sysinfo stream listener started.');
    const events = new EventSource(ENDPOINT_STREAM);
    events.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      setData(prevData => ({ ...prevData, ...parsedData }));
      setStarted(true);
    };

    // return () => {
    //   console.log('Closing sysinfo stream listener.');
    //   events.close();
    // };
  }, [listening, started, setData]);

  return { data, error, isLoading };
};

export default useSystemInfo;