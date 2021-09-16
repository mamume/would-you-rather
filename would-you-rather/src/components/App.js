import Navbar from "./Navbar";
import Login from './Login'
import Questions from "./Questions";
import QuestionPage from "./QuestionPage";
import Leaderboard from './Leaderboard'
import CreateQuestion from './CreateQuestion'
import { connect } from "react-redux";
import { Component } from "react";
import handleInitialData from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          {<div>
            <Route path='/' exact component={this.props.authedUser ? Questions : Login} />
            <Route path='/add' component={this.props.authedUser ? CreateQuestion : Login} />
            <Route path='/leaderboard' component={this.props.authedUser ? Leaderboard : Login} />
          </div>}
        </div>
      </Router>
    );
  }
}

export default connect(({ authedUser }) => ({
  authedUser
}))(App);