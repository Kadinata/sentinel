import React from 'react';
import Endpoint from '../../../services/Endpoint';

const ENDPOINT_GPIO = 'api/v1/gpio';
const FLAG_PIN_OENABLE = (0x1 << 1);
const FLAG_PIN_HIGH = (0x1 << 0);

const _get_gpio_setting = (gpioControlState) => {
  const gpioSetting = {};
  for (const pinNum in gpioControlState) {
    let pinSetting = 0;
    const { used, output, high } = gpioControlState[pinNum];
    pinSetting |= output ? FLAG_PIN_OENABLE : 0;
    pinSetting |= high ? FLAG_PIN_HIGH : 0;
    if (used) gpioSetting[pinNum] = pinSetting;
  }

  return gpioSetting;
};

const useGpioController = () => {

  const [gpioControlState, setGpioControlState] = React.useState({});

  const handleChange = ({ pin, ...newState }) => {
    setGpioControlState((prevState) => ({ ...prevState, [pin]: newState }));
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const gpioSetting = _get_gpio_setting(gpioControlState);

    try {
      console.log({ gpioSetting });
      await Endpoint.postData(ENDPOINT_GPIO, gpioSetting);
    } catch (err) {
      console.log(err);
    }
  };

  return { handleChange, handleSubmit };
};

export default useGpioController;