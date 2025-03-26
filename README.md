# 📱 Pokédex App

<p align="center">An interactive and animated Pokédex built with React Native using the Expo Bare Workflow.</p>

---

## 😸 About the Project

**Pokédex App** is a cross-platform mobile application built with React Native and Expo Bare Workflow. It simulates a Pokédex, allowing users to search, view, and save Pokémon to their favorites. The app features smooth animations, persistent storage, and a modern UI/UX approach for an enjoyable experience.

---

## 🧰 Technologies

### Runtime & Framework
- React Native 0.74.1
- Expo SDK 51
- TypeScript ~5.3.3

### Navigation & UI
- @react-navigation/native
- @react-navigation/stack
- styled-components
- @expo/vector-icons
- polished
- react-native-reanimated
- lottie-react-native
- react-native-progress
- react-native-modalize
- react-native-svg
- react-native-safe-area-context
- react-native-screens
- react-native-responsive-fontsize
- @expo-google-fonts/poppins
- expo-font
- expo-status-bar

### State & Forms
- react-hook-form
- react-query (TanStack)
- Context API

### API & Persistence
- axios
- @react-native-async-storage/async-storage

### Developer Tools
- reactotron-react-native
- jest / jest-expo
- @testing-library/react-native / jest-native
- eslint / prettier / babel-plugin-module-resolver
- ts-prune (dead code detection)

---

## 🧠 Architecture Decisions

- Context API for global state management due to the simplicity of the app.
- Persistent data storage via Async Storage for saving favorite Pokémon.
- Animations implemented with Lottie and Reanimated for better engagement.
- Component styling with styled-components for improved maintainability.
- Use FlatList to ensure high performance when rendering lists.
- Navigation typed using React Navigation + hooks.
- Global theming and responsive metrics for consistent UI.
- Reactotron is used to track API calls and debugging in development.

---

## 📂 Folder Structure

```bash
pokedex-mobile-app/
├── android/                 # Native Android project
├── ios/                     # Native iOS project
├── assets/                 # Static images and splash/icon assets
├── src/                    # Main application source code
│   ├── @types/             # Global type declarations
│   ├── assets/img/         # App-specific images
│   ├── components/         # Reusable components
│   ├── config/             # Environment config & Reactotron
│   ├── context/            # Global context (e.g., Favorites)
│   ├── global/             # Global styles, themes, metrics
│   ├── hooks/              # Custom React hooks
│   ├── routes/             # App routes and navigation map
│   ├── screens/            # App screens (Favorites, Home, Details, etc)
│   ├── services/           # API layers and React Query configs
│   └── App.tsx             # App entry point
├── .github/assets/         # GitHub assets for README
├── __mocks__/              # Test mocks for Async Storage
├── test/, setup-tests.js   # Test config files
├── .eslintrc.js, prettier  # Lint and format config
├── jest.config.js, tsconfig.json
└── package.json, yarn.lock, metro.config.js
```

---

## 🧪 Testing

To run tests:
```bash
yarn test
```

- Tests are written using Jest and React Native Testing Library.
- Mock support is provided for Async Storage and other native modules.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/pokedex-app.git
cd pokedex-app
```

### 2. Install dependencies
```bash
yarn install --force
```

### 3. iOS setup (macOS only)
```bash
cd ios && pod install && cd ..
```

### 4. Start the development server
```bash
yarn start -c
```

### 5. Run on devices
```bash
yarn android     # for Android
yarn ios         # for iOS
```

---

## 🧹 Cleaning Cache

### Android
```bash
del %appdata%\Temp\react-native- & cd android & gradlew clean & cd .. & del node_modules/ & yarn cache clean --force & yarn install & yarn start -- --reset-cache
```
```bash
rm -rf node_modules && yarn cache clean --force && yarn install --force
```
```bash
cd android && rm -rf build/ && cd app/ && rm -rf build/ && cd .. && ./gradlew clean && cd ..
```

### iOS
```bash
cd ios && rm -rf assets Pods Podfile.lock && pod cache clean --all && pod install && cd ..
```

---

## 🖼 Interface

<p align="center">
  <img src=".github/assets/app.gif" width="320" alt="App preview"/>
</p>

---

## 📄 License

This project is licensed under the MIT License.

---



