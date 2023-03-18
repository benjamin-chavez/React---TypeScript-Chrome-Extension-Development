import React from 'react';
import ReactDOM from 'react-dom';
import '@fontsource/roboto';
import './popup.css';
import WeatherCard from './WeatherCard';

const App: React.FC<{}> = () => {
  return (
    <div>
      <WeatherCard city="Miami" />
      <WeatherCard city="Barcelona" />
      <WeatherCard city="New York" />
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);

// useEffect hook is used if you have to perform parallel data fetching along side your standard react rendering
