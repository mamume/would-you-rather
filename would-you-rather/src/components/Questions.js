import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import QuestionList from './QuestionList'
import LoadingBar from 'react-redux-loading'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component={'div'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));


function Questions(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [answeredQues, setAnsweredQues] = useState([])
    const [unansweredQues, setUnansweredQues] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    useEffect(() => {
        const { answers, questions } = props
        setAnsweredQues([])
        setUnansweredQues([])

        for (let key in questions)
            if (answers[key])
                setAnsweredQues((prev) => (
                    [...prev, questions[key]]
                ))
            else
                setUnansweredQues(prev => (
                    [...prev, questions[key]]
                ))
    }, [props])


    return (
        <div className={classes.root}>
            <LoadingBar />
            {props.loading === true
                ? null
                : (<div>
                    <AppBar position="static">
                        <Tabs
                            variant="fullWidth"
                            value={value}
                            onChange={handleChange}
                            aria-label="nav tabs example"
                        >
                            <LinkTab label="Unanswered Questions" {...a11yProps(0)} />
                            <LinkTab label="Answered Questions" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>

                    <TabPanel value={value} index={0}>
                        <QuestionList questions={unansweredQues} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <QuestionList questions={answeredQues} />
                    </TabPanel>
                </div>)}
        </div>
    );

}

export default connect(({ authedUser, questions }) => ({
    answers: authedUser.answers,
    questions,
    loading: Boolean(!Object.keys(questions).length)
}))(Questions)