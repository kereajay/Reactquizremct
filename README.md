# React Quiz Application

This is a simple React-based quiz application that displays multiple-choice questions. Users can select an option for each question, and the app will provide feedback on whether the selected answer was correct or incorrect. At the end of the quiz, users can view a list of the questions they got wrong along with the correct answers.

## Features

- **Displays Questions and Options**: Each question has multiple options.
- **Color Feedback**: After selecting an option and clicking "Next", the correct answer is highlighted in green, and the incorrect answer (if selected) is highlighted in red.
- **Score Tracking**: The app keeps track of the user's score.
- **Review Wrong Answers**: After completing the quiz, users can review the questions they answered incorrectly along with the correct answers.

- ⚛️**Reactjs**: A JavaScript library for building user interfaces.
- 🌐**React Router**: Declarative routing for React applications.
- **useReducer**: A React Hook for state management.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Toastify**: A React library for notifications.
- 💾**LocalStorage**: Web storage to save the application state.

## Components

- **Quiz**: The main component that renders the quiz questions and options, handles user interactions, and displays the score.

## State Management

- `currentQuestion`: Tracks the index of the current question.
- `clickedOption`: Tracks the option selected by the user.
- `score`: Tracks the user's current score.
- `showColors`: Toggles the color feedback for correct/incorrect answers.
- `wrongquestion`: Stores the list of questions that were answered incorrectly.
- `displaywrongquestion`: Toggles the display of incorrectly answered questions at the end of the quiz.

## Usage

1. **Clone the repository**:
    ```sh
    git clone https://github.com/kereajay/Reactquizremct
    ```

2. **Navigate to the project directory**:
    ```sh
    cd react-quiz-app
    ```

3. **Install dependencies**:
    ```sh
    npm install
    ```

4. **Run the application**:
    ```sh
    npm start
    ```

5. **Open the application**:
    Open [https://reactquizremct.vercel.app/](https://reactquizremct.vercel.app/) to view it in the browser.

## Code Explanation

### `Quiz` Component

- **Imports**: 
  - `useState` and `useRef` from React.
  - `data` from a local `Data.js` file containing quiz questions and options.

- **State Variables**:
  - `currentQuestion`, `clickedOption`, `score`, `showColors`, `wrongquestion`, and `displaywrongquestion` are used to manage the application's state.

- **Event Handlers**:
  - `handleQuestionChange`: Handles the transition to the next question, updates the score, and toggles color feedback.
  - `updateScore`: Updates the score based on the selected option and stores incorrectly answered questions.

- **Rendering**:
  - Displays the current question and options.
  - Provides feedback on the selected option's correctness.
  - At the end of the quiz, displays the questions that were answered incorrectly along with the correct answers.

## Styling

- Uses Tailwind CSS for styling the components.

## Example Data Format

The `data.js` file should export an array of question objects, each with the following structure:

```js
export const data = [
    {
        question: "What is the capital of the USA?",
        options: ["New York", "Los Angeles", "Washington D.C.", "Chicago"],
        answer: 3
    },
    // More questions...
];
