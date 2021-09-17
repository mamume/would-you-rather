import React from 'react'
import QuestionCard from './QuestionCard'
import { connect } from 'react-redux'

function QuestionList(props) {
    const { questions, users } = props

    questions.sort((a, b) => b.timestamp - a.timestamp)
    // console.log(questions)

    const getUser = (id) => {
        return users[id]
    }

    return (
        <div>
            {questions.map((question) => (
                <QuestionCard key={question.id} question={question} user={getUser(question.author)} />
            ))}
        </div>
    )
}

export default connect(({ users }) => ({
    users
}))(QuestionList)
