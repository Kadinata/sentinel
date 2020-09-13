import React from 'react';
import TestView from './Test';
import Endpoint from '../../services/Endpoint';

const TestViewContainer = ({ ...props }) => {

  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const fetchData = React.useCallback(
    async () => {
      setLoading(true);
      setData(null);
      setError(null);
      try {
        const data = await Endpoint.fetchData('api/v1/test/protected');
        console.log('data', data);
        setData(data);
      } catch (err) {
        console.log('error', err);
        setError(err);
      }
      setLoading(false);
    },
    [setData, setError, setLoading]
  );

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  // const [listening, setListening] = useState(false);

  // useEffect(() => {
  //   if (!listening) {
  //     const events = new EventSource(`http://192.168.1.6:3000/api/v1/sse-test`);
  //     events.onmessage = (event) => {
  //       setData(JSON.parse(event.data));
  //     };
  //     setListening(true);
  //   }
  // }, [listening]);

  return (<TestView data={data} error={error} loading={loading} />);
};

export default TestViewContainer;