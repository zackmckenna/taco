import fetch from 'node-fetch'
require('dotenv').config()

export const getPlaces = async ({ searchTerm }) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchTerm}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${process.env.PLACES_API_KEY}`
  )

  const json = await response.json()

  return {
    searchTerm,
    candidates: json.candidates,
  }
}
