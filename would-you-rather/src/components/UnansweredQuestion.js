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


export default function UnansweredQuestion() {
    const classes = useStyles();

    const [value, setValue] = React.useState('option1');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item className={classes.vline}>
                        <Avatar className={classes.avatar} src="profile_pics/sarahedo.png">W</Avatar>
                        <div style={{ textAlign: 'center' }}>username asks:</div>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>
                            Would You Rather...
                        </Typography>

                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} >
                            <FormControlLabel value="option1" control={<Radio color='primary' />} label="Option 1" />
                            <FormControlLabel value="option2" control={<Radio color='primary' />} label="Option 2" />
                        </RadioGroup>

                        <Button fullWidth='true' variant='contained' color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div >
    );
}