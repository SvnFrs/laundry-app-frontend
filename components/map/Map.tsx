// Map.tsx
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

interface MapProps {
  initialRegion: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  onLocationSelect: (location: { latitude: number; longitude: number }) => void;
}

export default function Map({ initialRegion, onLocationSelect }: MapProps) {
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: initialRegion.latitude,
    longitude: initialRegion.longitude,
  });

  const handleMapPress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({ latitude, longitude });
    onLocationSelect({ latitude, longitude });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onPress={handleMapPress}
      >
        <Marker coordinate={selectedLocation} title="Selected Location" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});