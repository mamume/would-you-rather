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
        <Box align='center'>
            <Box align='center' p={1} m={5} border="1px solid lightgrey" borderRadius='7px' width='400px'>
                <Box borderBottom="1px solid lightgrey" p={1}>
                    <Typography component={'div'} variant='h5'><b>Create New Question</b></Typography>
                </Box>

                <Box m={2} align='left'>
                    <Typography component={'div'}>Complete the queston:</Typography>
                </Box>

                <Box m={2} align='left'>
                    <Typography fontWeight='200px' component={'div'}><b>Would you rather...</b></Typography>
                </Box>
                <TextField fullWidth={true} id="outlined-basic" label="Option One" variant="outlined" onChange={changeOptionOne} />
                <Box m={1}><b>OR</b></Box>
                <TextField fullWidth={true} id="outlined-basic" label="Option Two" variant="outlined" onChange={changeOptionTwo} />

                <Box m={1}>
                    <Button onClick={createQuestion} variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default connect(({ authedUser }) => ({
    uid: authedUser.id
}))(CreateQuestion)