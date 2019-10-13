import React, { useState } from 'react';
import AlertContext from './alertContext';

const AlertState = props => {
  const [alert, setAlert] = useState(null);
  // Set Alert
  /**
   * @param {string} msg 
   * @param {string} type - ['primary','light','dark','success','white']
   */
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
