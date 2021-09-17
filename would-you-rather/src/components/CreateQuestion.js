import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { handleSaveQuestion } from '../actions/shared';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


function CreateQuestion(props) {
    const [optionOne, setOptionOne] = useState("")
    const [optionTwo, setOptionTwo] = useState("")
    const [home, setHome] = useState(false)

    const changeOptionOne = (e) => {
        setOptionOne(e.target.value)
    }

    const changeOptionTwo = (e) => {
        setOptionTwo(e.target.value)
    }

    const createQuestion = () => {
        props.dispatch(handleSaveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: props.uid
        }))

        setHome(true)
    }

    if (home)
        return <Redirect to='/' />

    return (
        <Box textAlign='center'>
            <Typography variant='h6'>Create New Question</Typography>
            <Typography>Complete the queston:</Typography>
            <Typography>Would you rather...</Typography>
            <TextField id="outlined-basic" label="Option One" variant="outlined" onChange={changeOptionOne} />
            <div>OR</div>
            <TextField id="outlined-basic" label="Option Two" variant="outlined" onChange={changeOptionTwo} />
            <br />
            <Button onClick={createQuestion} variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    )
}

export default connect(({ authedUser }) => ({
    uid: authedUser.id
}))(CreateQuestion)