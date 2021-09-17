# Would Your Rather...?

## Overview

Let's play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.
In this app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

To install dependancies and start the project:

    * install all project dependencies with `yarn install` or `npm install`
    * start the development server with `yarn start` or `npm start`

## Project Structure

```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── public
|   ├── App.css # Application Styles.
|   ├── favicon.ico # React Icon.
|   ├── logo192.png # React Logo.
|   ├── logo512.png # React Logo.
|   ├── manifest.json
|   ├── index.html # DO NOT MODIFY.
|   ├── assets # Contains images used in application.
|   |   ├── error-404.png # Error 404 image.
|   |   └── react-redux.png # React-Redux logo.
|   └── profile_pics # Contain profile avatars.
|       ├── johndoe.png
|       ├── sarahedo.png
|       └── tylermcginnis.png
└── src
    ├── index.js # It is used for DOM rendering and creating redux store.
    ├── actions # Application action creators.
    |   ├── authedUser.js # Authenticated User.
    |   ├── questions.js # Receiving Questions Data.
    |   ├── shared.js # For API requests and mixed actions.
    |   └── users.js # Rececing Application Users.
    ├── components # Contain used components.
    │   ├── AnsweredQuestion.js # Answered Question Component.
    │   ├── App.js # Application Component.
    │   ├── CreateQuestion.js # Create Question Component.
    │   ├── Leaderboard.js # Display Leaderboard.
    |   ├── Login.js # Login form component.
    |   ├── LoginDetails.js # Authenticated user details.
    |   ├── Navbar.js # Navigation bar component.
    |   ├── QuestionCard.js # Question card component.
    |   ├── QuestionList.js # Listing Answered and Unanswered Question Cards.
    |   ├── QuestionPage.js # Question Page Component.
    |   ├── Questions.js # Question Lists Container.
    |   ├── SelectUser.js # User Selector Component.
    |   ├── UnansweredQuestion.js # Display for Unanswered Question.
    |   └── UserScoreCard.js # Display Each User Score.
    ├── middleware # Contains middlewares.
    │   ├── index.js # Apply Middlewares.
    │   └── logger.js # Logging action type and the new application state.
    ├── reducers # Contains Application Reducers.
    │   ├── authedUser.js # Authenticated User Reducer.
    │   ├── index.js # Combine App Reducers.
    │   ├── questions.js # Question Reducers.
    │   └── users.js # Users Reducers.
    └── utils # Contain routes components.
        ├── _DATA.js # Contains Initial Data and API Methods.
        └── README.md # API Read Me.
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Dependencies

This project built using this packges, and Matrial-UI for styles.
  - [Material-UI](https://mui.com/)
  - [react-redux](https://github.com/reduxjs/react-redux)
  - [react-redux-loading](https://github.com/tylermcginnis/react-redux-loading-bar)
  - [react-router-dom](https://github.com/remix-run/react-router#readme)
  - [redux](https://redux.js.org/)
  - [redux-thunk](https://github.com/reduxjs/redux-thunk)
