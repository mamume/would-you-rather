import Navbar from "./Navbar";
import Login from './Login'
import Questions from "./Questions";
import QuestionPage from "./QuestionPage";
import Leaderboard from './Leaderboard'
import CreateQuestion from './CreateQuestion'
import { connect } from "react-redux";
import { Component } from "react";
import { handleUserData } from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleUserData())
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar />
          {this.props.loading === true
            ? null
            : <div>
              <Route path='/' exact component={this.props.authedUser ? Questions : Login} />
              <Route path='/add' component={this.props.authedUser ? CreateQuestion : Login} />
              <Route path='/leaderboard' component={this.props.authedUser ? Leaderboard : Login} />
              <Route path='/question/:id' component={this.props.authedUser ? QuestionPage : Login} />
            </div>
          }
        </div>
      </Router>
    );
  }
}

export default connect(({ authedUser, users }) => ({
  authedUser,
  loading: Boolean(!Object.keys(users).length)
}))(App);