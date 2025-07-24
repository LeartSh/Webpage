import React from 'react';

const RedirectButton = () => {
  const handleRedirect = () => {
    window.location.href = 'https://labiwine.store';  // Redirect to LabiWine
  };

  return (
    <button onClick={handleRedirect}>Go to LabiWine</button>  // Button text
  );
};

export default RedirectButton;
