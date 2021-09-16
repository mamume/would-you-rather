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
                <Typography variant="body2" color="textSecondary">{`${Math.round(
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


export default function UnansweredQuestion() {
    const classes = useStyles();

    const [progress, setProgress] = React.useState(10);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item className={classes.vline}>
                        <Avatar className={classes.avatar} src="profile_pics/sarahedo.png">W</Avatar>
                        <div style={{ textAlign: 'center' }}>Asked by username</div>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography variant='h6'>
                            Results:
                        </Typography>

                        <div className={classes.selectedOption}>
                            <Typography>Would your rather be a front-end developer</Typography>
                            <LinearProgressWithLabel value={progress} />
                            <Typography align='center'>1 out of 2 votes</Typography>
                        </div>

                        <br />

                        <div className={classes.option}>
                            <Typography>Would your rather be a back-end developer</Typography>
                            <LinearProgressWithLabel value={progress} />
                            <Typography align='center'>1 out of 2 votes</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div >
    );
}
