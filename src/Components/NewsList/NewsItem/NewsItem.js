import React from 'react';

import classes from './NewsItem.module.css';

const NewsItem = (props) => {
    console.log()
    return (
        <a className={classes.NewsListItem} href={props.data.url} target="_blank" rel="noopener noreferrer">
            <div className={classes.ImgContainer}><img src={props.data.urlToImage} alt={props.data.title} /></div>
            <div>
                <h3>{props.data.title}</h3>
                <span>Author: {props.data.author || 'N/A'}</span>
                <p>{props.data.content}</p>
            </div>
        </a>
    )
}
export default NewsItem;