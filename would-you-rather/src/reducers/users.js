import { RECEIVE_USERS } from "../actions/users"
import { SAVE_USER_ANSWER } from "../actions/users"

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_USER_ANSWER:
            const { qid, authedUser, answer } = action
            console.log(action, action)
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        default:
            return state
    }
}