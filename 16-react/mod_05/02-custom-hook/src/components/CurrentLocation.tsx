import { useCurrentLocation } from "../hooks/useCurrentLocation";

export function CurrentLocation() {
  const { location, error, loading, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      <button onClick={getCurrentLocation}>Get current location</button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
}
