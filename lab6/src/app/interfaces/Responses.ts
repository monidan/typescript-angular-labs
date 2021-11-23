interface WeatherResponse {
  name?: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  visibility: number;
}

export {
  WeatherResponse
}
