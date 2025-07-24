import React from 'react';
import RedirectButton from './RedirectButton'; // Import the RedirectButton component

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to Our Site</h1>
      <RedirectButton /> {'./RedirectButton'}
    </div>
  );
};

export default App;
