import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';

function SelectUser(props) {
    const users = Object.values(props.users)

    const handleChange = (e) => {
        const userIndex = e.target.getAttribute('data-option-index')

        props.setSelectedUser(users[userIndex])
    }

    return (
        <Autocomplete
            id="combo-box-demo"
            options={users}
            getOptionLabel={(option) => option.name}
            style={{ width: '100%', marginTop: 10 }}
            renderInput={(params) => <TextField {...params} label="Select User" variant="outlined" />}
            onChange={handleChange}
        />
    );
}

export default connect(({ users }) => ({
    users
}))(SelectUser)