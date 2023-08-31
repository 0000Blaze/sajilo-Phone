// Haversine.js

import React from 'react';

const haversine_distance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in kilometers

  // Convert latitude and longitude from degrees to radians
  const radLat1 = (Math.PI * lat1) / 180;
  const radLon1 = (Math.PI * lon1) / 180;
  const radLat2 = (Math.PI * lat2) / 180;
  const radLon2 = (Math.PI * lon2) / 180;

  // Haversine formula
  const dlat = radLat2 - radLat1;
  const dlon = radLon2 - radLon1;
  const a =
    Math.sin(dlat / 2) ** 2 +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dlon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
};

export default haversine_distance;
