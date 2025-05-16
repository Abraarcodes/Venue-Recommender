import React, { useState } from 'react';
import axios from 'axios';
import VenueCard from './components/VenueCard';

const App = () => {
  const [form, setForm] = useState({
    budget: '',
    location: '',
    occasion: '',
    people: '',
    extras: '',
  });
  const [venues, setVenues] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const extrasArray = form.extras.split(',').map(s => s.trim());

    const res = await axios.post('http://localhost:5000/api/venues', {
      ...form,
      extras: extrasArray
    });

    setVenues(res.data.venues);
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">Venue Finder AI</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
        <input type="text" name="budget" placeholder="Budget (in INR)" onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="location" placeholder="City/Location" onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="occasion" placeholder="Occasion (e.g., Wedding)" onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="people" placeholder="Number of People" onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="extras" placeholder="Extra requirements (comma separated)" onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Find Venues</button>
      </form>

      {venues.length > 0 && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {venues.map((venue, idx) => (
            <VenueCard key={idx} venue={venue} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
