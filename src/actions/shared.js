import { _saveQuestion, _getQuestions, _getUsers, _saveQuestionAnswer } from '../utils/_DATA'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from "react-redux-loading"

export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function handleUserData() {
    return async dispatch => {
        dispatch(showLoading())
        const users = await _getUsers()
        dispatch(receiveUsers(users))
        dispatch(hideLoading())
    }
}

export function handleQuestionsData() {
    return async dispatch => {
        dispatch(showLoading())
        const questions = await _getQuestions()
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
    }
}

export function saveAnswer(authedUser, qid, answer) {
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveAnswer(authedUser, qid, answer) {
    return async (dispatch, getState) => {
        dispatch(showLoading())
        await _saveQuestionAnswer({ authedUser, qid, answer })
        dispatch(saveAnswer(authedUser, qid, answer))
        const { users } = getState()
        dispatch(setAuthedUser(users[authedUser]))
        dispatch(hideLoading())
    }
}

export function saveQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function handleSaveQuestion(question) {
    return async dispatch => {
        dispatch(showLoading())
        const savedQuestion = await _saveQuestion(question)
        dispatch(saveQuestion(savedQuestion))
        dispatch(hideLoading())
    }
}