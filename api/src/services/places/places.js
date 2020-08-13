export const getPlaces = ({ taco }) => {
  return {
    candidates: [
      {
        formatted_address:
          '2401 E Norris St, Philadelphia, PA 19125, United States',
        geometry: {
          location: {
            lat: 39.97683480000001,
            lng: -75.1272262,
          },
          viewport: {
            northeast: {
              lat: 39.97818292989272,
              lng: -75.12592532010729,
            },
            southwest: {
              lat: 39.97548327010728,
              lng: -75.12862497989273,
            },
          },
        },
        name: 'Loco Pez',
        opening_hours: {
          open_now: false,
        },
        photos: [
          {
            height: 3024,
            html_attributions: [
              'https://maps.google.com/maps/contrib/110764036160326959908',
            ],
            photo_reference:
              'CmRaAAAAHc2c8UaQYs86l14I8TmrO-djDsEQETDcoujUguiqlzvM4rMncnGC3xTHPRhwxsk1_kKOfr5EcGFDg4Ve-UOXUjbOvuLlVmo76AeEd_zWGjQoDGQkJWMAESR7lsEGpI81EhCDBvFXw512UEyWsAxGBimeGhSPrygkXBIU1kU4ff_kmAmhVKXlwA',
            width: 4032,
          },
        ],
        rating: 4.5,
      },
    ],
    status: 'OK',
  }
}
