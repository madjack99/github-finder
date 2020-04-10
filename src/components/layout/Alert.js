import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

function Alert() {
  const { alert } = useContext(AlertContext);
  if (!alert) return null;

  return (
    <div className={`alert alert-${alert.type}`}>
      <i className='fas fa-info-circle'></i>
      {alert.msg}
    </div>
  );
}

export default Alert;
