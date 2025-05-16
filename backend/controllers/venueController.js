const axios = require('axios');

exports.getVenues = async (req, res) => {
  const { budget, location, occasion, people, extras } = req.body;

  const prompt = `
You are a smart venue recommendation engine. Based on the following inputs:
- Budget: ₹${budget}
- Location: ${location}
- Occasion: ${occasion}
- People attending: ${people}
- Extra requirements: ${extras.join(', ')}

Return a list of 5 venue recommendations in JSON format ONLY, no explanation.

Each venue object should contain:
- name
- address
- price_per_head
- capacity
- allows (array of extra requirements it supports)
- description

Respond only with JSON. Example:
[
  {
    "name": "Grand Palace",
    "address": "MG Road, ${location}",
    "price_per_head": 1200,
    "capacity": 300,
    "allows": ["loud music", "firecrackers"],
    "description": "A premium banquet hall ideal for weddings with ample space and modern amenities."
  },
  ...
]
`;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      }
    );

    const raw = response.data.candidates[0].content.parts[0].text;

    // Extract JSON from response
    const jsonMatch = raw.match(/\[.*\]/s);
    if (jsonMatch) {
      const venues = JSON.parse(jsonMatch[0]);
      res.json({ venues });
    } else {
      throw new Error("JSON not found in Gemini response.");
    }
  } catch (error) {
    console.error("Gemini API error:", error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get structured venues from AI.' });
  }
};
