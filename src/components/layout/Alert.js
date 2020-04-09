import React from 'react';

function Alert({ alert }) {
  if (!alert) return null;

  return (
    <div className={`alert alert-${alert.type}`}>
      <i className='fas fa-info-circle'></i>
      {alert.msg}
    </div>
  );
}

export default Alert;
