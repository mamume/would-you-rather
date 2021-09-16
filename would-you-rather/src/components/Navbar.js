import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LoginDetails from "./LoginDetails";
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authedUser';


const useStyles = makeStyles({
    root: {
        width: '100%',
        borderBottom: '2px solid #303F9F',
        marginBottom: 20
    },
});

function Navbar(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const { authedUser } = props

    const logout = () => {
        props.dispatch(logoutUser())
    }

    return (
        <div>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="New Question" icon={<PostAddIcon />} />
                <BottomNavigationAction label="Leaderboard" icon={<AssignmentIcon />} />

                {authedUser && <LoginDetails authedUser={authedUser} logout={logout} />}

            </BottomNavigation>

        </div>
    )
}


export default connect(({ authedUser }) => ({
    authedUser
}))(Navbar)
