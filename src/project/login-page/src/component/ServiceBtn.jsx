import React from 'react';
import './ServiceBtn.css'

function ServiceBtn() {
  const handleService = () => {
    document.cookie = `username=${localStorage.getItem('user') || ''}`
    window.location.href = "/serv"
  };

  return (
    <button className="service-btn" onClick={handleService}>GO TO SERVICE</button>
  );
}

export default ServiceBtn