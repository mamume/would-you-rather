import React from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'

function QuestionPage(props) {
    if (props.question === null)
        return <div style={{ textAlign: 'center', marginTop: 100 }}>
            <img src='/assets/error-404.png' alt="Error 404" />
        </div>
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
    try {
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
    } catch {
        return {
            question: null
        }
    }
}

export default connect(mapStateToProps)(QuestionPage)
