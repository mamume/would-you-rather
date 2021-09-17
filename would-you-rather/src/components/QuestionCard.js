import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

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
        width: 70,
        height: 70,
        padding: 10
    },
    vline: {
        borderRight: "1px solid lightgrey",
    },
}));


export default function QuestionCard(props) {
    const classes = useStyles();
    const { question, user } = props

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item className={classes.vline}>
                        <Avatar className={classes.avatar} src={user.avatarURL}>W</Avatar>
                        <div style={{ textAlign: 'center' }}>{user.name}</div>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>
                            Would you rather
                            <br />
                            {`...${question.optionOne.text.slice(0, 15)}...`}
                        </Typography>
                        <Link to={`/question/${question.id}`}>
                            <Button fullWidth='true' variant="outlined" color="primary">
                                View Poll
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </div >
    );
}
