import React from 'react';
import Endpoint from '../../services/Endpoint';

const serializeRequests = async ({ ...endpoints }) => {
  const result = {};
  for (const key in endpoints) {
    const endpoint = endpoints[key];
    const data = await Endpoint.fetchData(endpoint);
    result[key] = data;
  }
  return result;
};

const createDataState = (initialData) => {
  const timestamp = 0;
  const data = initialData || {};
  return { timestamp, data };
};

const updateDataState = (prevData, newData) => {
  const timestamp = Date.now();
  const data = { ...prevData, ...newData };
  return { timestamp, data };
};

export const useResourceRequest = (endpoint_schema) => {

  const [dataState, setDataState] = React.useState(createDataState({}));
  const [completed, setCompleted] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchResource = React.useCallback(
    async () => {
      setCompleted(false);
      try {
        const newData = await serializeRequests(endpoint_schema);
        setDataState(({ data }) => updateDataState(data, newData));
      } catch (err) {
        setError(err);
      }
      setCompleted(true);
    },
    [setDataState, setCompleted, setError, endpoint_schema]
  );

  React.useEffect(() => {
    fetchResource();
  }, [fetchResource]);

  return { ...dataState, completed, error };
};


export const useResourceStream = (endpoint, enable, initialData = {}) => {

  const [event, setEvent] = React.useState(null);
  const [dataState, setDataState] = React.useState(createDataState(initialData));

  React.useEffect(() => {
    if (!enable || (event !== null)) return;
    const eventObj = Endpoint.subcsribe(endpoint, (newData) => {
      setDataState(({ data }) => updateDataState(data, newData));
    });
    setEvent(eventObj);
  }, [enable, event, endpoint, setDataState, setEvent]);

  return dataState;
};
