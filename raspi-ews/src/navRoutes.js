import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faColumns,
  faMicrochip,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';

const routes = [
  {
    title: "System Info",
    path: "/systems",
    icon: <FontAwesomeIcon className="fa-sm" icon={faChartBar} />,
  },
  {
    title: "GPIO",
    path: "/gpio",
    icon: <FontAwesomeIcon className="fa-sm" icon={faMicrochip} />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <FontAwesomeIcon className="fa-sm" icon={faColumns} />,
  },
];

export default routes;