import React from 'react';
import classes from './Search.module.css';

const search = (prpos) => (
    <div className={classes.Search}>
        <input placeholder="Search for Aesthetes Or artworks" type="text" name="search" onChange={prpos.changed}/>
    </div>
);

export default search;