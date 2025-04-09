export default function WeatherCard({ weather }) {
    const { name, main, weather: w, wind } = weather;
    const icon = `https://openweathermap.org/img/wn/${w[0].icon}@2x.png`;
  
    return (
      <div className="bg-white p-6 rounded shadow mt-6 text-center max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <img src={icon} alt={w[0].description} className="mx-auto" />
        <p className="text-xl">{w[0].main}</p>
        <p className="text-lg">Temp: {main.temp} °C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} km/h</p>
      </div>
   

    );
  }
  
