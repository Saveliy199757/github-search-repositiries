import React, {Component} from "react";
import githubService from "../services/githubService";
import "./RepositoriesList.css";

export default class RepositoriesList extends Component {


    githubService = new githubService();

    state = {
        item: null,
        loading: false,
        error: false
    };


    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.text !== prevProps.text || this.props.sort !== prevProps.sort || this.props.language !== prevProps.language ) {
            this.updateItem();
        }

    }


    updateItem() {
        const { text, sort, language } = this.props;


        if (text === "") {
            this.setState({
                loading: true
            });
        }




        this.setState({
            loading: true
        });

        this.githubService
            .getRepositories(text,sort,language)
            .then((item) => {
                this.setState({
                    item: item.items,
                    loading: false,
                    error: false
                })
            }).catch((err) => {
            this.setState({
                loading: false,
                error: true
            })
        })
    }


    render() {



        if (!this.state.item) {
            return (
                <div>
                    Загрузка
                </div>
            )
        }

        const { item, loading, error } = this.state;




        if ( loading ) {
            return (
                <div>
                    Загрузка
                </div>
            )
        }

        if ( error ) {
            return (
                <div>
                    Ошибка, поле не должно быть бустым :(
                </div>
            )
        }



        return (
            item.map((item) => {
              const  { id, name, full_name, description, language} = item;
              return (
                  <p key={id} > * {name}, <b> { full_name } </b>, <br />  Описание: <br /> {description} <br />  Язык: {language} <hr />  </p>



              )
            })
        )
    }

}