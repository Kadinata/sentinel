import React from 'react';
import Endpoint from '../../../services/Endpoint';

const ENDPOINT_GPIO = 'api/v1/gpio';
const ENDPOINT_USABLE_PINS = 'api/v1/gpio/usable_pins';

const useGpioState = () => {

  const [gpioState, setGpioState] = React.useState({});
  const [usablePins, setUsablePins] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const fetchGpioState = React.useCallback(
    async () => {
      setIsLoading(true);
      try {
        const newState = await Endpoint.fetchData(ENDPOINT_GPIO);
        const usableGpio = await Endpoint.fetchData(ENDPOINT_USABLE_PINS);
        setGpioState((prevState) => ({ ...prevState, ...newState }));
        setUsablePins(usableGpio);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    },
    [setGpioState, setIsLoading, setError]
  );

  React.useEffect(() => {
    fetchGpioState();
  }, [fetchGpioState]);

  return { gpioState, usablePins, error, isLoading };
};

export default useGpioState;