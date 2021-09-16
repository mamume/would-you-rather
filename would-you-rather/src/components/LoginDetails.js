import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function LoginDetails(props) {
    const classes = useStyles();

    const { authedUser } = props
    console.log(authedUser)

    return (
        <div className={classes.root}>
            <div>Hello, {authedUser.name}</div>
            <Avatar alt={authedUser.name} src={authedUser.avatarURL} />
            <Button onClick={props.logout} variant="outlined" color="secondary">
                Logout
            </Button>
        </div>
    );
}
