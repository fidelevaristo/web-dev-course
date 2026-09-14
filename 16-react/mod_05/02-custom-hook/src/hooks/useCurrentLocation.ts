import { useState } from "react";

type Location = {
  latitude: number;
  longitude: number;
};

export function useCurrentLocation() {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function getCurrentLocation() {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      },
    );
  }

  return {
    location,
    error,
    loading,
    getCurrentLocation,
  };
}
