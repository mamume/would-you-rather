import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/shared';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 500,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
    avatar: {
        width: 100,
        height: 100,
        padding: 10
    },
    vline: {
        borderRight: "1px solid lightgrey",
    },
}));


function UnansweredQuestion(props) {
    const classes = useStyles();

    const [value, setValue] = React.useState('optionOne');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const { author, question, dispatch, uid } = props

    const saveAnswer = () => {
        dispatch(handleSaveAnswer(uid, question.id, value))
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item className={classes.vline} align='center'>
                        <Avatar className={classes.avatar} src={author.avatarURL}></Avatar>
                        < div style={{ textAlign: 'center' }}>{author.name} asks:</div>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography component={'div'} noWrap>
                            Would You Rather...
                        </Typography>

                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} >
                            <FormControlLabel value="optionOne" control={<Radio color='primary' />} label={question.optionOne.text} />
                            <FormControlLabel value="optionTwo" control={<Radio color='primary' />} label={question.optionTwo.text} />
                        </RadioGroup>

                        <Button onClick={saveAnswer} fullWidth={true} variant='contained' color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div >
    );
}


export default connect(({ authedUser }) => ({
    uid: authedUser.id
}))(UnansweredQuestion)