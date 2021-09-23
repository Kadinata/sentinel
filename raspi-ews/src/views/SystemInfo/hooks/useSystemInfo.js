import React from 'react';
import Endpoint from '../../../services/Endpoint';

const ENDPOINT_SYSINFO = 'api/v1/sysinfo';

const useSystemInfo = () => {

  const [data, setData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const fetchSysInfo = React.useCallback(
    async () => {
      setIsLoading(true);
      try {
        const data = await Endpoint.fetchData(ENDPOINT_SYSINFO);
        setData(data);
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

  return { data, error, isLoading };
};

export default useSystemInfo;