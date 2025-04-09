export default function RecentSearches({ cities, onCityClick }) {
    return (
      <div className="space-y-2">
        {cities.map((city, index) => (
          <button
            key={index}
            className="bg-white hover:bg-blue-100 text-sm px-3 py-1 rounded w-full text-left shadow"
            onClick={() => onCityClick(city)}
          >
            {city}
          </button>
        ))}
      </div>
    );
  }
