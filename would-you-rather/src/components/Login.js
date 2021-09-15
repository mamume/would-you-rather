import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import reactReduxLogo from '../assets/react-redux.png'
import SelectUser from './SelectUser';


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

export default function Login() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    Welcome to the Would You Rather App!
                </Typography>

                <Typography className={classes.pos} color="textSecondary">
                    Please sign in to continue
                </Typography>
                <center><img alt='logo' src={reactReduxLogo} />
                    <Typography>
                        Sign in
                    </Typography>
                </center>
                <SelectUser />
            </CardContent>


            <CardActions>
                <Button style={{ width: '100%' }} variant="contained" color="primary">
                    Login
                </Button>
            </CardActions>
        </Card >
    );
}
