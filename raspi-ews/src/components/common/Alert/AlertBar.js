import React from 'react';

import { Collapse } from '@material-ui/core';
import {
  Alert,
  AlertTitle
} from '@material-ui/lab';

import CloseButton from './CloseButton';

const AlertBar = ({ title, children, show, ...props }) => {

  const [open, setOpen] = React.useState(!!show);

  React.useEffect(() => {
    setOpen(!!show);
  }, [show]);

  return (
    <Collapse in={open}>
      <Alert
        {...props}
        action={
          <CloseButton onClick={() => setOpen(false)} />
        }
      >
        {!!title && <AlertTitle>{title}</AlertTitle>}
        {children}
      </Alert>
    </Collapse>
  );

};

export default AlertBar;