### Taco.io

Taco.io is a web app builtin Redwood.js, that uses AWS Lambda Functions to request data for the closest taco joint. Once you give the app permission, it will use your browsers geolocation api to get your latitude and longitude, then use them to in the api call to Google Places. The app then calculates the closest location with MATH to find your nearest taco.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

### Hook up Places API

Once you get a Google Places API key, set it up in your .env file as
```
PLACES_API_KEY={YOUR_API_KEY}
```
