import Navbar from "./Navbar";
import Login from './Login'
import Questions from "./Questions";
import QuestionPage from "./QuestionPage";
import Leaderboard from './Leaderboard'
import CreateQuestion from './CreateQuestion'
import { connect } from "react-redux";
import { Component } from "react";
import handleInitialData from '../actions/shared'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Login />
      </div>
    );
  }
}

export default connect()(App);