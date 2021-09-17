import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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
        paddingRight: 100
    },
    score: {
        textAlign: 'center',
        border: "1px solid lightgrey",
        width: 85,
        margin: 7,
        borderRadius: 5,
        height: '80%',
        fontWeight: 'bold'
    },
    header: {
        backgroundColor: '#eae8e8',
        lineHeight: '3',
        borderBottom: '1px solid lightgrey'
    },
    scoreNum: {
        backgroundColor: '#3F51B5',
        color: 'white',
        width: 50,
        // height: 50,
        borderRadius: '70%',
        margin: '5px auto',
        boxSizing: 'border-box',
        lineHeight: '3'
    }
}));


export default function UserScoreCard(props) {
    const classes = useStyles();
    const { name, avatar, answered, created, score } = props.userScore

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item className={classes.vline}>
                        <Avatar className={classes.avatar} src={avatar}></Avatar>
                    </Grid>
                    <Grid className={classes.vline} item xs zeroMinWidth>
                        <Typography component={'div'} variant='h6'>
                            {name}
                        </Typography>

                        <Typography component={'div'}>
                            <Box>Answered Questions: {answered}</Box>
                        </Typography>

                        <Typography component={'div'}>
                            <Box>Created Questions: {created}</Box>
                        </Typography>
                    </Grid>

                    <Grid>
                        <Box className={classes.score}>
                            <Box className={classes.header}>Score</Box>
                            <Box className={classes.scoreNum}>{score}</Box>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </div >
    );
}