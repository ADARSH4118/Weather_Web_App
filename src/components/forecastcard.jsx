export default function ForecastCard({ forecast }) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-6">
        {forecast.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow">
            <p className="font-semibold">{item.date}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt={item.description}
              className="w-12 h-12 mx-auto"
            />
            <p className="text-sm">{item.description}</p>
            <p className="text-lg font-bold">{item.temp}°C</p>
          </div>
        ))}
      </div>
    );
  }
  