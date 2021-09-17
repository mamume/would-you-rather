import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'

function QuestionPage(props) {
    const { author, question, uid } = props

    return (
        <div>
            {props.answered
                ? <AnsweredQuestion
                    author={author}
                    question={question}
                    uid={uid}
                />
                : <UnansweredQuestion
                    author={author}
                    question={question}
                    uid={uid} />}
        </div>
    )

}

const mapStateToProps = ({ authedUser, questions, users }, props) => {
    const { id } = props.match.params
    const answers = Object.keys(authedUser.answers)
    const question = questions[id]
    const author = users[question.author]

    return {
        answered: answers.includes(question.id),
        question,
        author,
        uid: authedUser.id
    }
}

export default connect(mapStateToProps)(QuestionPage)
