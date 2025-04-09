const API_KEY = "b5e8dcdbfa8324ab31df7bac2e697b57"; // Replace with your key

export const fetchWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("City not found or API error");
  }
  return await res.json();
};

export const fetchForecast = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  const data = await response.json();
  return data;
};