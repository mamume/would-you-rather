import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


export default function CreateQuestion() {
    return (
        <Box textAlign='center'>
            <Typography variant='h6'>Create New Question</Typography>
            <Typography>Complete the queston:</Typography>
            <Typography>Would you rather...</Typography>
            <TextField id="outlined-basic" label="Option One" variant="outlined" />
            <div>OR</div>
            <TextField id="outlined-basic" label="Option Two" variant="outlined" />
            <br />
            <Button variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    )
}