import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns } from '@fortawesome/free-solid-svg-icons';

const routes = [
  {
    title: "Dashboard",
    path: "/systems",
    icon: <FontAwesomeIcon className="fa-sm" icon={faColumns} />,
  },
  {
    title: "GPIO",
    path: "/gpio",
    icon: <FontAwesomeIcon className="fa-sm" icon={faColumns} />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <FontAwesomeIcon className="fa-sm" icon={faColumns} />,
  },
];

export default routes;