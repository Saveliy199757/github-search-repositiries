import React, {Component} from "react";
import "./select-language.css"

export default class SelectLanguage extends Component {


    state = {
        language: "javascript"
    }

    onLanguageChange = (e) => {
        const {onLanguageChange = value => {}} = this.props;
        this.setState({
            language:e.target.value
        });

        onLanguageChange(e.target.value);

    };

    render() {
        return (
            <label>
                Выбирете язык программирования:
            <select value={this.state.language} onChange={ this.onLanguageChange } >
                <option value="javascript" >Js</option>
                <option value="PHP" >PHP</option>
                <option value="C++" >c++</option>
                <option value="python" >python</option>

            </select>
            </label>
        )
    }

}