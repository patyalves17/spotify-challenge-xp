
# SpotifyChallengeXp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Installation
clone the repository and install its dependencies running:

  $ npm install

### Using your own credentials
You will need to register your app and get your own credentials from the Spotify for Developers Dashboard.

To do so, go to [your Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard) and create your application. For the examples, we registered these Redirect URIs:

* http://localhost:4200 (needed for the implicit grant flow)
* http://localhost:4200/token

Once you have created your app, replace the `clientID`, and `clientSecret` in the environments with the ones you get from My Applications.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
