import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const useLocation = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return;
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({});
        setLocation({ latitude, longitude });
      } catch (error) {
        console.log('Location request permission error: ', error);
      }
    })();
  }, []);

  return location;
};
