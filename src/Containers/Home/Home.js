import React, { Component } from 'react';
import { getTopNews } from '../../Fetch/News';
import NewsList from './../../Components/NewsList/NewsList';
import classes from './Home.module.css';

import SearchTextCtx from '../../Contexts/SearchTextCtx';

class Home extends Component {

    static contextType = SearchTextCtx;
    searchText = "";

    state = {
        news: {
            articles: [],
            total: 0
        }
    }
    
    componentDidMount() {
        const search = this.context;
        getTopNews(search).then((data) => this.setState({ news: data }))
    }

    componentDidUpdate() {
        if(this.searchText !== this.context){
            this.searchText = this.context;
            getTopNews(this.searchText).then((data) => {
                this.setState({ news: data })
            })
        }
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