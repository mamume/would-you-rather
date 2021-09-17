import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography component={'div'} variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

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
    selectedOption: {
        backgroundColor: "#D8DDFF",
        padding: 15,
        borderRadius: 7,
        border: "1px solid #3F51B5"
    },
    option: {
        padding: 15,
        borderRadius: 7,
        border: "1px solid lightgrey"
    }
}));


export default function AnsweredQuestion(props) {
    const classes = useStyles();


    const { author, question, uid } = props
    const option1votes = question.optionOne.votes.length
    const option2votes = question.optionTwo.votes.length
    const totalVotes = option1votes + option2votes

    const [progress1] = React.useState(option1votes * 100 / totalVotes);
    const [progress2] = React.useState(option2votes * 100 / totalVotes);

    let option1class, option2class
    if (question.optionOne.votes.includes(uid)) {
        option1class = classes.selectedOption
        option2class = classes.option
    } else {
        option2class = classes.selectedOption
        option1class = classes.option
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item className={classes.vline} align='center'>
                        <Avatar className={classes.avatar} src={author.avatarURL}></Avatar>
                        <div style={{ textAlign: 'center' }}>Asked by <b>{author.name}</b></div>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography component={'div'} variant='h6'>
                            Results:
                        </Typography>

                        <div className={option1class}>
                            <Typography component={'div'}>Would your rather {question.optionOne.text}</Typography>
                            <LinearProgressWithLabel value={progress1} />
                            <Typography component={'div'} align='center'>{option1votes} out of {totalVotes} votes</Typography>
                        </div>

                        <br />

                        <div className={option2class}>
                            <Typography component={'div'}>Would your rather {question.optionTwo.text}</Typography>
                            <LinearProgressWithLabel value={progress2} />
                            <Typography component={'div'} align='center'>{option2votes} out of {totalVotes} votes</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div >
    );
}
