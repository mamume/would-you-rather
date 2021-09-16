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
import { withRouter } from 'react-router-dom'


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
                    // console.log(value)
                    setValue(newValue);
                    switch (newValue) {
                        case 1:
                            props.history.push('/add')
                            break
                        case 2:
                            props.history.push('/leaderboard')
                            break
                        default:
                            props.history.push('/')
                    }
                }}
                showLabels
                className={classes.root}
            >
                {/* <NavLink to='/'> */}
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                {/* </NavLink> */}

                {/* <NavLink to='/add'> */}
                <BottomNavigationAction label="New Question" icon={<PostAddIcon />} />
                {/* </NavLink> */}

                {/* <NavLink to='/leaderboard'> */}
                <BottomNavigationAction label="Leaderboard" icon={<AssignmentIcon />} />
                {/* </NavLink> */}

                {authedUser && <LoginDetails authedUser={authedUser} logout={logout} />}

            </BottomNavigation>

        </div >
    )
}


export default withRouter(connect(({ authedUser }) => ({
    authedUser
}))(Navbar))
