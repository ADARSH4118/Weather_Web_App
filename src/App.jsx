import { useState } from "react";
import SearchBar from "./components/searchbar";
import WeatherCard from "./components/weathercard";
import Loader from "./components/loader";
import RecentSearches from "./components/recentsearches";
import ForecastCard from "./components/forecastcard"; 
import { fetchWeatherData, fetchForecast } from "./api"; 

export default function App() {
  const [forecast, setForecast] = useState([]); 
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = async (searchCity) => {
    const cityToSearch = searchCity || city;
    if (!cityToSearch.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setCity(cityToSearch);
    setWeather(null);
    setForecast([]); 
    setError("");
    setLoading(true);

    try {
      const data = await fetchWeatherData(cityToSearch);
      setWeather(data);

      const forecastData = await fetchForecast(cityToSearch);
      const filtered = forecastData.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .slice(0, 5);

      const formatted = filtered.map((item) => ({
        date: new Date(item.dt_txt).toLocaleDateString("en-US", { weekday: "short" }),
        temp: Math.round(item.main.temp),
        icon: item.weather[0].icon,
        description: item.weather[0].main,
      }));

      setForecast(formatted);

      
      setRecentSearches((prev) => {
        const updated = [cityToSearch, ...prev.filter((c) => c.toLowerCase() !== cityToSearch.toLowerCase())];
        return updated.slice(0, 5);
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-indigo-300 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Weather Dashboard</h1>

      <div className="flex w-full max-w-6xl gap-8">
        
        {recentSearches.length > 0 && (
          <div className="w-1/4 hidden sm:block">
            <RecentSearches
              cities={recentSearches}
              onCityClick={(selectedCity) => handleSearch(selectedCity)}
            />
          </div>
        )}

       
        <div className="flex-1 flex flex-col items-center">
          <SearchBar onSearch={handleSearch} />
          {loading && <Loader />}
          {error && <p className="text-red-600 mt-4">{error}</p>}
          {weather && <WeatherCard weather={weather} />}
          
          {forecast.length > 0 && <ForecastCard forecast={forecast} />}
        </div>
      </div>
    </div>
  );
}
