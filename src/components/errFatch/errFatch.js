import React, {Component} from "react";
import "./403.css";

export default class ErrFatch extends Component{
    render() {
        return (
            <div className="ui warning message">
                <div className="header">Ошибка сетевого запроса :(</div>

            </div>
        )
    }
}