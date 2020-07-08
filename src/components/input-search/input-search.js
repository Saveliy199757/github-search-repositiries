import React, {Component} from "react";
import "./input-search.css"

export default class InputSearch extends Component {

    state = {
        term: ''
    };

    onTermChange = (e) => {
        const {onSearchChange = value => {}} = this.props;
        this.setState({
            term:e.target.value
        });

        onSearchChange(e.target.value);

    };


    render() {
        return (
       <div>
           <input
               type="text"
               value={this.state.term}
               onChange={ this.onTermChange }
                />
       </div>

            )

    }
}