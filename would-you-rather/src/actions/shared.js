import { _getQuestions, _getUsers } from '../utils/_DATA'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'

export default function handleInitialData() {
    return async dispatch => {
        const users = await _getUsers()
        const questions = await _getQuestions()

        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
    }
}