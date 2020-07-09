import React, { Component } from 'react';
import { getTopNews } from '../../Fetch/News';
import NewsList from './../../Components/NewsList/NewsList';
import classes from './Home.module.css';

class Home extends Component {
    state = {
        news: {
            articles: [],
            total: 0
        }
    }
    componentDidMount() {
        getTopNews().then((data) => this.setState({ news: data }))
    }
    render() {
        return (
            <div className={classes.Home}>
                <h2>Top News</h2>
                <div>
                    <NewsList items={this.state.news.articles} />
                </div>
            </div>
        )
    }
}

export default Home;