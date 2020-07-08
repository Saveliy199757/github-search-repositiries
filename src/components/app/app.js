import React, {Component} from 'react';
import './app.css';
import InputSearch from "../input-search";
import RepositoriesList from "../RepositoriesList";
import githubService from "../services/githubService";




export default class App extends Component {


    githubService = new githubService();




    render() {


        return (
            <div className="App">
                <InputSearch onSearchChange={this.onSearchChange} />
                <RepositoriesList getData={this.githubService.getRepositories} />
            </div>
        )


    }




}

