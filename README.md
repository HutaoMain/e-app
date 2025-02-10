# E-Book-App

# Overview

This project is a mobile application built using React Native. It is designed to be an educational app for children, featuring various interactive learning modules such as alphabets, numbers, animals, shapes, math, and emotions. The app also includes a video section with YouTube videos for kids.

# Features

- Alphabets: Learn alphabets with interactive GIFs and sounds.
- Numbers: Learn numbers with interactive GIFs and sounds.
- Animals: Learn about animals with interactive GIFs and sounds.
- Shapes: Learn shapes with interactive GIFs and sounds.
- Math: Learn basic math operations with interactive GIFs and sounds.
- Emotions: Learn about different emotions with interactive GIFs and sounds.
- Quizzes: Interactive quizzes for each learning module.
- Videos: A collection of YouTube videos for kids.

# **Technologies Used**

- **React Native:** For building the mobile application.

- **Expo:** For development and building the app.

- **Firebase:** For authentication and database.

- **Zustand:** For state management.

- **React Navigation:** For navigation within the app.

- **React Native Async Storage:** For local storage.

- **React Native Toast Message:** For displaying toast messages.

- **React Native Confetti Cannon:** For confetti animations in quizzes.

- **React Native YouTube Iframe:** For embedding YouTube videos.

# Project Structure

```
.expo/
.gitignore
.prettierrc
app.json
App.tsx
assets/
babel.config.js
eas.json
package.json
README.md
src/
  components/
  navigation/
  screens/
  zustand/
  types/
tsconfig.json
```

# Setup and Installation

1. Clone the repository:

```
git clone https://github.com/your-username/e-book-app.git
cd e-book-app
```

2. Install dependencies:

```
npm install
```

3. Start the Expo development server:

```
npm start
```

4. Run the app on an Android or iOS emulator:

```
npm run android
npm run ios
```

# Firebase Configuration

The Firebase configuration is located in the ENV.tsx file. Make sure to replace the values with your own Firebase project credentials.

```typescript
export const apiKey = "YOUR_API_KEY";
export const authDomain = "YOUR_AUTH_DOMAIN";
export const projectId = "YOUR_PROJECT_ID";
export const storageBucket = "YOUR_STORAGE_BUCKET";
export const messagingSenderId = "YOUR_MESSAGING_SENDER_ID";
export const appId = "YOUR_APP_ID";
```
