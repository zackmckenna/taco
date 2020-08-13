import fetch from 'node-fetch'
require('dotenv').config()

export const getPlaces = async ({ searchTerm, latitude, longitude }) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchTerm}&inputtype=textquery&fields=photos,formatted_address,name,rating,price_level,user_ratings_total,opening_hours,geometry&key=${process.env.PLACES_API_KEY}&locationbias=point:${latitude},${longitude}`
  )

  const json = await response.json()

  json.candidates.map((candidate) => {
    candidate.photos.map((photo) => {
      const photoReference = photo.photo_reference
      photo.photo_url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${process.env.PLACES_API_KEY}`
    })
  })

  return {
    searchTerm,
    candidates: json.candidates,
  }
}
