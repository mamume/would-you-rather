import Navbar from "./Navbar";
import Login from './Login'
import Questions from "./Questions";
import QuestionPage from "./QuestionPage";
import Leaderboard from './Leaderboard'
import CreateQuestion from './CreateQuestion'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Login /> */}

      {/* <Questions /> */}
      {/* <QuestionPage /> */}
      {/* <Leaderboard /> */}
      <CreateQuestion />
    </div>
  );
}

export default App;