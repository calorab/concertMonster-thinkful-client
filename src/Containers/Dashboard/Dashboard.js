import React from 'react';
import SearchArtists from '../SearchArtists/SearchArtists';
const dashboard = (props) => {

    return (
        <div>
            <SearchArtists />
            <p>You're on the dashboard</p>
        </div>
    );
};

export default dashboard;
