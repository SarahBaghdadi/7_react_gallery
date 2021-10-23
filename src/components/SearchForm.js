import react, {Component} from "react";
import PhotoContainer from "./PhotoContainer";
import NotFound from './NotFound';
import axios from 'axios';
import apiKey from '../Config';

let query;
let data;

class SearchForm extends Component {
    state = {
        data : [],
        query: ''
    }
    search = () => {
        if (this.props.match.params.query) {
            const query = this.props.match.params.query;
            axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then((response) => {
                this.setState({
                data: response.data.photos.photo, 
                query: this.props.match.params.query
                });
            })    
        } else {
            this.setState({
                data: [],
                query: ''
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        let query = this.query.value;
        let path = `/search/${query}`;
        this.props.history.push(path);
    }

    componentDidMount() {
        this.search();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.query !== prevProps.match.params.query) {
            console.log('called update');
            this.search();
          }
    }
    
    render (){
        if (this.state.query.length == 0) {
            return (
                <div>
                    <form className="search-form" onSubmit={this.handleSubmit}>
                        <input type="search" name="search" placeholder="Search" ref={(input) => this.query = input} required/>
                        <button type="submit" className="search-button">
                        <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                        </button>
                    </form> 
                    <PhotoContainer data={this.state.data} title={this.state.query}/>  
                </div>
            );
        } else if (this.state.data.length == 0){
            return(
                <NotFound />
            );
        } else {
            return(
                <div>
                    <form className="search-form" onSubmit={this.handleSubmit}>
                        <input type="search" name="search" placeholder="Search" ref={(input) => this.query = input} required/>
                        <button type="submit" className="search-button">
                        <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                        </button>
                    </form> 
                    <PhotoContainer data={this.state.data}  title={this.state.query}/>  
                </div> 
            );
        }
    }
}

export default SearchForm;