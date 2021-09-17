import { _saveQuestion, _getQuestions, _getUsers, _saveQuestionAnswer } from '../utils/_DATA'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { saveQuestionAnswer } from './questions'
import { saveUserAnswer } from './users'
import { setAuthedUser } from './authedUser'
import { saveQuestion } from './questions'


export function handleInitialData() {
    return async dispatch => {
        const users = await _getUsers()
        const questions = await _getQuestions()

        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
    }
}



export function handleSaveAnswer(authedUser, qid, answer) {
    return async (dispatch, getState) => {
        await _saveQuestionAnswer({ authedUser, qid, answer })
        dispatch(saveQuestionAnswer(authedUser, qid, answer))
        dispatch(saveUserAnswer(authedUser, qid, answer))
        const { users } = getState()
        dispatch(setAuthedUser(users[authedUser]))
    }
}

export function handleSaveQuestion(question) {
    return async dispatch => {
        const savedQuestion = await _saveQuestion(question)
        dispatch(saveQuestion(savedQuestion))
    }
}