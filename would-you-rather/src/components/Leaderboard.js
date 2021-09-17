import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import UserScoreCard from './UserScoreCard'

function Leaderboard(props) {
    const [usersScore, setUsersScore] = useState([])

    useEffect(() => {
        const { users } = props
        setUsersScore(Object.keys(users).map(id => {
            const name = users[id].name
            const avatar = users[id].avatarURL
            const answered = Object.keys(users[id].answers).length
            const created = users[id].questions.length
            const score = answered + created

            return {
                name,
                avatar,
                answered,
                created,
                score
            }
        }).sort((a, b) => b.score - a.score))
    }, [props])


    return (
        <div>
            {Object.keys(usersScore).map((key) => (
                <UserScoreCard userScore={usersScore[key]} />
            ))}
        </div>
    )
}

export default connect(({ users }) => ({
    users
}))(Leaderboard)
