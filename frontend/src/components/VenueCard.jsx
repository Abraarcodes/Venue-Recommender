import React from 'react';

const VenueCard = ({ venue }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-blue-700">{venue.name}</h3>
      <p className="text-sm text-gray-600">{venue.address}</p>
      <p className="mt-1 text-gray-700">{venue.description}</p>
      <div className="mt-2">
        <span className="inline-block text-sm bg-green-100 text-green-800 px-2 py-1 rounded mr-2">
          ₹{venue.price_per_head}/head
        </span>
        <span className="inline-block text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
          Capacity: {venue.capacity}
        </span>
      </div>
      <div className="mt-2 text-sm">
        <strong>Allows:</strong> {venue.allows.join(', ')}
      </div>
    </div>
  );
};

export default VenueCard;
