### How to start the project
Clone this repository, then navigate to the directory where you cloned it. Then run:
```sh
$ npm install
$ npm start
```

In a separate terminal window, you should run:
```sh
$ npm run android # For running on Android emulator or device
$ npm run ios # For running on iOS emulator or device
```

### Directory Structure
```
.
├── android             # Will be present after running 'react-native upgrade'
├── app                 # Where the app lies, the only folder that matters
└─├── components        # Dumb components go there
  ├── containers        # Smart componenets (containers) go there
  ├── global-styles.js  # Global React Styles for use in any component
  ├── reducers.js       # Each reducer should be injected here
  ├── scenes.js         # Scenes configuration, easy setup of new Scenes
  ├── store.js          # Application store
  ├── tests             # General tests should go here
  └── utils             # Utility modules that can be used on this project
├── app.js              # Entrypoint for the project
├── app.json            # Info about the App
├── images              # Images for assets
├── index.android.js    # Entrypoint for Android
├── index.ios.js        # Entrypoint for iOS
├── ios                 # Will be present after running 'react-native upgrade'
├── package.json        # NPM package.json
├── README.md           # This file
└── __tests__           # Tests should go in this folder
```

Inside each container folder, should have these files:
```
index.js      # Module that will be exported
reducer.js    # Redux reducer for that container
actions.js    # Redux actions for container's reducer
constants.js  # Constants definitions for better maintenance

sagas.js      # When start using redux-saga
selectors.js  # When start using Reselect
```

##### Components
Components are dumb React components, they have no logic, nor reducers or sagas.

##### Containers
Are called Containers, smart React components, that contains logic and/or reducers and/or sagas

### Styles
Styles are mostly handled by [styled-components/native](https://github.com/styled-components/styled-components)
that mimics CSS attributes, converting to React StyleSheet.

Most dumb components are built using *styled-components/native*

##### Global Styles
Since React StyleSheets can be treated as JavaScript Objects, extend *global-styles.js*
into your components/containers *styles.js* files, so you can inherit globally defined styles.
Helps keeping consistancy throughout the application.

### Third-Party Technologies
##### Already running
- [Styled-Compoenents](https://github.com/styled-components/styled-components)
- [NativeBase](https://nativebase.io/)
- [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)

##### Will run when integration begins
- [Redux-Saga](https://github.com/redux-saga/redux-saga)
- [Reselect](https://github.com/reactjs/reselect)
