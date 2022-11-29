const apiKey = "b39f4410b4c55760d6cfdb613165fc18";
const units = "metric";
let lat: number;
let lng: number;

navigator.geolocation.getCurrentPosition((pos) => {
  lat = pos.coords.latitude;
  lng = pos.coords.longitude;
});

export interface weatherApi {
  weather: [{ id: number; main: string; description: string; icon: string }];
  main: {
    temp: number;
    feels_like: number;
  };
  name: string;
  cod: number;
}

export function getWeathers() {
  const json = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=${units}`
  ).then((res) => res.json());
  return json;
}
