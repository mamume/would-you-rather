import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SelectUser from './SelectUser';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'
import { handleQuestionsData } from '../actions/shared'


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 500,
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pos: {
        marginBottom: 12,
        textAlign: 'center'
    },
    header: {
        backgroundColor: 'lightgrey'
    },
});

function Login(props) {
    const classes = useStyles();
    const [selectedUser, setSelectedUser] = useState(null);


    const sign = () => {
        props.dispatch(setAuthedUser(selectedUser))
        props.dispatch(handleQuestionsData())
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography component={'div'} className={classes.title} gutterBottom>
                    Welcome to the Would You Rather App!
                </Typography>

                <Typography component={'div'} className={classes.pos} color="textSecondary">
                    Please sign in to continue
                </Typography>
                <center><img alt='logo' src='/assets/react-redux.png' />
                    <Typography component={'div'}>
                        Sign in
                    </Typography>
                </center>
                <SelectUser setSelectedUser={setSelectedUser} />
            </CardContent>


            <CardActions>
                <Button onClick={sign} style={{ width: '100%' }} variant="contained" color="primary">
                    Login
                </Button>
            </CardActions>
        </Card >
    );
}


export default connect()(Login)