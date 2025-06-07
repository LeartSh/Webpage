import React from 'react';

const RedirectButton = () => {
  const handleRedirect = () => {
    window.location.href = 'https://labiwine.store';
  };

  return (
    <button onClick={handleRedirect}>Go to LabiWine</button>
  );
};

export default RedirectButton;
