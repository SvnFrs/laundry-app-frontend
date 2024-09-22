export interface MapProps {
    initialRegion: {
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
    };
    onLocationSelect: (location: { latitude: number; longitude: number }) => void;    
}