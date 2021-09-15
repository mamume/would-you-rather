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

export default function LogDetails() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>Hello, username</div>
            <Avatar alt="John Doe" src="profile_pics/johndoe.png" />
            <Button variant="outlined" color="secondary">
                Logout
            </Button>
        </div>
    );
}
