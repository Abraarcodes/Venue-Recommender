// import React from 'react';

// const VenueCard = ({ venue }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md max-w-sm">
//       <div className="h-48 w-full mb-3 overflow-hidden rounded">
//         {venue.image ? (
//           <img
//             src={venue.image}
//             alt={venue.name}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
//             No Image Available
//           </div>
//         )}
//       </div>
//       <h3 className="text-xl font-bold text-blue-700">{venue.name}</h3>
//       <p className="text-sm text-gray-600">{venue.address}</p>
//       <p className="mt-1 text-gray-700">{venue.description}</p>
//       <div className="mt-2">
//         <span className="inline-block text-sm bg-green-100 text-green-800 px-2 py-1 rounded mr-2">
//           ₹{venue.price_per_head}/head
//         </span>
//         <span className="inline-block text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
//           Capacity: {venue.capacity}
//         </span>
//       </div>
//       <div className="mt-2 text-sm">
//         <strong>Allows:</strong> {venue.allows.join(', ')}
//       </div>
//     </div>
//   );
// };

// export default VenueCard;








import React, { useState } from 'react';

const VenueCard = ({ venue }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-sm">
      <div className="h-48 w-full mb-3 overflow-hidden rounded bg-gray-100 flex items-center justify-center">
        {venue.image && !imgError ? (
          <img
            src={venue.image}
            alt={venue.name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            No Image Available
          </div>
        )}
      </div>
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
