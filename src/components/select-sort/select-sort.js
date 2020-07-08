import React, {Component} from "react";
import "./select-sort.css";

export default class SelectSort extends Component{

    state = {
        sort: "desc"
    }
    onSortChange = (e) => {
        const {onSortChange = value => {}} = this.props;
        this.setState({
            sort:e.target.value
        });

        onSortChange(e.target.value);

    };



    render() {
        return (
            <label>
                Выбирете сортировку:
            <select value={this.state.value} onChange={this.onSortChange}>
                <option value="desc" >desc</option>
                <option value="asc" >asc</option>
            </select>
            </label>
        )
    }
}