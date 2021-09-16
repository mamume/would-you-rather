import React, { Component } from 'react'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'

export default class QuestionPage extends Component {
    render() {
        return (
            <div>
                <AnsweredQuestion />
                {/* <UnansweredQuestion /> */}
            </div>
        )
    }
}
