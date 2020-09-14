
# SpotifyChallengeXp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Installation
clone the repository and install its dependencies running:

  $ npm install

## Using your own credentials
You will need to register your app and get your own credentials from the Spotify for Developers Dashboard.

To do so, go to [your Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard) and create your application. For the examples, I registered these Redirect URIs:

* http://localhost:4200 (needed for the implicit grant flow)

Once you have created your app, replace the `clientID`, and `clientSecret` in the environments with the ones you get from My Applications.

## Run the project

Run `ng serve`|`npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
