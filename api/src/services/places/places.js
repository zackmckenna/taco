import fetch from 'node-fetch'
require('dotenv').config()

export const getPlaces = async ({ searchTerm, latitude, longitude }) => {
  const types = [
    'meal_takeaway,restaurant,food,establishment,point_of_interest',
  ]
  console.log(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1000&type=${types}&keyword=${searchTerm}&key=${process.env.PLACES_API_KEY}`
  )
  // const response = await fetch(
  //   `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchTerm}&inputtype=textquery&fields=photos,formatted_address,name,rating,price_level,user_ratings_total,opening_hours,geometry&key=${process.env.PLACES_API_KEY}&locationbias=point:${latitude},${longitude}&opennow&rankby=distance`
  // )

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&rankby=distance&type=restaurant&keyword=${searchTerm}&key=${process.env.PLACES_API_KEY}`
  )
  console.log(latitude)
  console.log(longitude)

  const json = await response.json()
  console.log(json)

  json.results.map((result) => {
    console.log(result.plus_code)
    console.log(result.types)
    result.photos.map((photo) => {
      const photoReference = photo.photo_reference
      photo.photo_url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${process.env.PLACES_API_KEY}`
    })
  })

  return {
    latitude,
    longitude,
    searchTerm,
    candidates: json.results,
    status: json.status,
  }
}
