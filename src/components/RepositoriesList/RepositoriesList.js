import React, {Component} from "react";
import githubService from "../services/githubService";
import "./RepositoriesList.css";

export default class RepositoriesList extends Component {


    githubService = new githubService();

    state = {
        item: null,
        loading: false
    };




    render() {
        return (
            <div>
                Список репозиториев
            </div>
        )
    }

}