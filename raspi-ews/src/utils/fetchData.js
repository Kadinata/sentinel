const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const result = await response.json();
    return result;
  } catch (err) {
    return Promise.reject(err);
  }
};

export default fetchData;