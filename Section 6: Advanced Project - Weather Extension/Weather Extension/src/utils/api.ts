// FIXME: YOU WOULD NOT EVER DEPLOY THIS SINCE THE API KEY IS ON THE FRONTEND
const OPEN_WEATHER_API_KEY = 'a03b25fa03348b7e84b61ab2a0db4b1f';

// Define the type data returned by the API
export interface OpenWeatherData {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
}

// export async function fetchOpenWeatherData(city: string): Promise<any> {
export async function fetchOpenWeatherData(
  city: string
): Promise<OpenWeatherData> {
  const units = 'metric';

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${OPEN_WEATHER_API_KEY}`
  );

  if (!res.ok) {
    throw new Error('City not found');
  }

  // const data = await res.json();
  const data: OpenWeatherData = await res.json();
  return data;
}
