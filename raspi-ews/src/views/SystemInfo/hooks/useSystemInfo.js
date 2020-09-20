import React from 'react';
import Endpoint from '../../../services/Endpoint';

const ENDPOINT_SYSINFO = 'api/v1/sysinfo';
const ENDPOINT_STREAM = 'api/v1/sysinfo/stream';

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
        const data = await Endpoint.fetchData(ENDPOINT_SYSINFO);
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
    const event = Endpoint.subcsribe(ENDPOINT_STREAM, (data) => {
      setData((prevData) => ({ ...prevData, ...data }));
      setStarted(true);
    });
  }, [listening, started, setData]);

  return { data, error, isLoading };
};

export default useSystemInfo;