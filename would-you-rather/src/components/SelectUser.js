/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SelectUser() {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={users}
            getOptionLabel={(option) => option.username}
            style={{ width: '100%', marginTop: 10 }}
            renderInput={(params) => <TextField {...params} label="Select User" variant="outlined" />}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const users = [
    { username: 'John Doe' },
    { username: 'Sarah Edo' },
    { username: 'Tyler McGinnis' }
];
