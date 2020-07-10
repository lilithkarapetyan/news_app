import React, { Component } from 'react';
import { getNews } from '../../Fetch/News';
import NewsList from './../../Components/NewsList/NewsList';
import classes from './Source.module.css';


import SearchTextCtx from '../../Contexts/SearchTextCtx';

class Source extends Component {

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
        getNews(this.props.match.params.id, search).then((data) => {
            this.setState({ news: data })
        });
        this.unlisten = this.props.history.listen((location, action) => {
            setTimeout(() => {
                getNews(this.props.match.params.id, search).then((data) => {
                    this.setState({ news: data })
                })
            })
        });
    }

    componentDidUpdate() {
        if(this.searchText !== this.context){
            this.searchText = this.context;
            getNews(this.props.match.params.id, this.searchText).then((data) => {
                this.setState({ news: data })
            })
        }
    }

    componentWillUnmount() {
        this.unlisten();
    }
    render() {
        return (
            <div className={classes.Source}>
                <h2>News from {this.props.location.name}</h2>
                <div>
                    <NewsList items={this.state.news.articles || []} />
                </div>
            </div>
        )
    }
}

export default Source;