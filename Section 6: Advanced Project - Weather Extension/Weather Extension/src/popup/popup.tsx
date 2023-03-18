import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Box,
  Grid,
  InputBase,
  IconButton,
  Paper,
  Input,
} from '@material-ui/core';
import { Add, Add as AddIcon } from '@material-ui/icons';
import '@fontsource/roboto';
import './popup.css';
import WeatherCard from './WeatherCard';

const App: React.FC<{}> = () => {
  const [cities, setCities] = useState<string[]>([
    'Miami',
    'Barcelona',
    'Error',
  ]);

  const [cityInput, setCityInput] = useState<string>('');

  const handleCityButtonClick = () => {
    if (cityInput === '') {
      return;
    }
    setCities([...cities, cityInput]);
    setCityInput('');
  };

  const handleCityDeleteButtonClick = (index: number) => {
    cities.splice(index, 1);
    setCities([...cities]);
  };

  return (
    <Box mx="8px" my="16px">
      <Grid container>
        <Grid item>
          <Paper>
            <Box px="15px" py="5px">
              <InputBase
                placeholder="Add a city name"
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
              />
              <IconButton onClick={handleCityButtonClick}>
                <AddIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {cities.map((city, index) => (
        <WeatherCard
          city={city}
          key={index}
          onDelete={() => handleCityDeleteButtonClick(index)}
        />
      ))}
      <Box height="16px" />
    </Box>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);

// useEffect hook is used if you have to perform parallel data fetching along side your standard react rendering
