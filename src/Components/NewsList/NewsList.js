import React from 'react';
import NewsListItem from './NewsItem/NewsItem';
import classes from './NewsList.module.css';

const NewsList = (props) => (
    <div className={classes.NewsList}>
        {props.items.map((item, i) => <NewsListItem key={i} data={item} />)}
    </div>
)

export default NewsList;