import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

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

// const message = `Truncation should be conditionally applicable on this long line of text
//  as this is a much longer line than what the container can support. `;

export default function AutoGridNoWrap() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item className={classes.vline}>
                        <Avatar className={classes.avatar} src="profile_pics/sarahedo.png">W</Avatar>
                        <div style={{ textAlign: 'center' }}>username</div>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>
                            Would you rather
                            <br />
                            Question
                        </Typography>
                        <Button fullWidth='true' variant="outlined" color="primary">
                            View Poll
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div >
    );
}
