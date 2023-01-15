<h4 align="center"> 
	🚧  Pokédex App  🚀 Under construction...  🚧
</h4>

# # 😸 About the project Pokédex App

Application that simulates a pokédex.
With favorites system and pokemon search

## Run and clone this project

- [x] git clone (ssh or HTTPS)

- [x] install libs node_modules

```
$ yarn install --force
```

- [x] (install lib in ios)

```
$ cd ios && pod install && cd ..
```

```
$ yarn start -c
```

## Clearing trash in Android

```
$ del %appdata%\Temp\react-native- & cd android & gradlew clean & cd .. & del node_modules/ & yarn cache clean --force & yarn install & yarn start -- --reset-cache
```

```
$ rm -rf node_modules && yarn cache clean --force && yarn install --force
```

```
$ cd android && rm -rf build/ && cd app/ && rm -rf build/ && cd .. && ./gradlew clean && cd ..
```

## Clearing trash Ios

```
$ cd ios && rm -rf assets Pods Podfile.lock && pod cache clean --all && pod install && cd ..
```

## Requirements

- [x] Implement the following design using React Native Expo Bare
- [x] Request HTTP

## Technologies

- [x] Expo bare
- [x] React hook form
- [x] Axios
- [x] Styled Components
- [x] Async Storage
- [x] React native reanimated
- [x] Lottie react native

## Decisions during the development process

- [x] Passing data/state using context (since it is a small application with little data entry there was no need to use redux).
- [x] Persist data with async storage so the user doesn't lose saved pokémos.
- [x] Styled componets for having the facility to manipulate styles with javascript.
- [x] Animations to make the application attractive, beautiful and fun.
- [x] Use of flatlist so that the performance of the application is better and the visualization of the data is not impaired for the user.
- [x] Uso de hooke para renderizar componentes e evitar o uso de arrow function dentro do JSX ( o que prejudica a perfomance do apk).
- [x] Navigation hook to resolve typing issues in navigation.
- [x] Global styles and metrics for easier code maintenance.
- [x] Reactotron to facilitate the mapping of requests

## Features

- [x] Add unit tests. Under construction... 🚧
- [ ] Bring more information about pokemons, trainers and so on.
- [ ] Splash screen.
- [ ] Icon

## Interface

<p align="center">
<img src="https://https://github.com/priscilapoliveira/pokedex_mobile_app/blob/master/.github/assets/app.gif" width="320"/>
</p>
