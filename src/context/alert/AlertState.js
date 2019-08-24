import React, { useState } from 'react';
import AlertContext from './alertContext';

const AlertState = props => {
  const [alert, setAlert] = useState(null);
  // Set Alert
  const flashAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 8000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert,
        setAlert: flashAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
