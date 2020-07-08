import React, {Component} from 'react';
import './app.css';
import InputSearch from "../input-search";
import SelectSort from "../select-sort";
import SelectLanguage from "../select-language";
import RepositoriesList from "../RepositoriesList";



export default class App extends Component {




    state = {
        search: "React",
        sort: "desc",
        language: "javascript"
    }

    onSearchChange = (search) => {
        this.setState({ search });

    };
    onSortChange = (sort) => {
        this.setState({ sort });
    }
    onLanguageChange = (language) => {
        this.setState({ language });
    }

    render() {



        return (
            <div className="App">
                <InputSearch onSearchChange={this.onSearchChange} />
                <SelectSort onSortChange={this.onSortChange} />
                <SelectLanguage onLanguageChange={this.onLanguageChange} />

                <RepositoriesList  text={this.state.search} sort={this.state.sort} language={this.state.language} />
            </div>
        )


    }




}

