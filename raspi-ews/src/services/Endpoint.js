const normalize = (path) => (`/${path}`);

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(normalize(endpoint), { credentials: 'include' });
    const result = await response.json();
    return response.ok ? result : Promise.reject(result);
  } catch (err) {
    return Promise.reject(err);
  }
};

const subcsribe = (endpoint, onMessage) => {
  const event = new EventSource(normalize(endpoint));
  event.onmessage = (ev) => {
    if (typeof onMessage !== 'function') return;
    const eventData = JSON.parse(ev.data);
    onMessage(eventData);
  };
  return event;
};

const postData = async (endpoint, data) => {
  try {
    const response = await fetch(normalize(endpoint), {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    return Promise.reject(err);
  }
};


export default {
  fetchData,
  postData,
  subcsribe,
};