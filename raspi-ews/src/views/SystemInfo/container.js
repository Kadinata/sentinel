import React, { useEffect, useState } from 'react';
import { fetchData } from '../../utils';
import SystemInfoPage from './SystemInfo';

import Data from '../../models/data';

const ENDPOINT_BASE = 'http://192.168.1.6:3000';
const ENDPOINT_SYSINFO = `${ENDPOINT_BASE}/api/v1/sysinfo`;
const ENDPOINT_STREAM = `${ENDPOINT_BASE}/api/v1/sysinfo/stream`;

const SystemInfo = ({ ...props }) => {

  const [data, setData] = useState();
  const [listening, setListening] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchData(ENDPOINT_SYSINFO);
        setData(result);
        setListening(true);
      } catch {
        setData(Data);
      }
    })();
  }, []);

  useEffect(() => {
    if (!listening) return;
    if (!started) {
      console.log('listener started');
      const events = new EventSource(ENDPOINT_STREAM);
      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        setData(prevData => ({ ...prevData, ...parsedData }));
      };
      setStarted(true);
    }
  }, [listening, started]);

  return (<SystemInfoPage data={data} />);
};

export default SystemInfo;