//sorting function
import haversine_distance from './Haversine';

function sortObjectsByDistance(objects, fixedCoordinate) {
  // Custom sorting function based on distance
  const customSort = (a, b) => {
    const distanceA = haversine_distance(
      a.coordinates.lat,
      a.coordinates.lon,
      fixedCoordinate.lat,
      fixedCoordinate.lon
    );
    const distanceB = haversine_distance(
      b.coordinates.lat,
      b.coordinates.lon,
      fixedCoordinate.lat,
      fixedCoordinate.lon
    );

    return distanceA - distanceB;
  };

  // Sort the objects based on distance
  return [...objects].sort(customSort);
}

// Example usage
const fixedCoordinate = { lat: 12.9716, lon: 77.5946 }; // Replace with your fixed coordinate

// List of objects with their coordinates
const objects = [
  { name: 'Object1', coordinates: { lat: 12.9716, lon: 77.5946 } },
  { name: 'Object2', coordinates: { lat: 35.682839, lon: 139.759455 } },
  { name: 'Object3', coordinates: { lat: 40.7128, lon: -74.0060 } },
  // Add more objects as needed
];

// Sort the objects by distance
const sortedObjects = sortObjectsByDistance(objects, fixedCoordinate);

console.log(sortedObjects);
