import React, { Component } from 'react'
import axios from 'axios'
import { faBlackTie } from '@fortawesome/free-brands-svg-icons'
let movies
export default class MovieSearch extends Component {
    state = {
        movie: '',
        returnedMovies: []
    }
    handleChange = (e) => {
        this.setState({
            movie: e.target.value
        })
    }
    handleSubmit = () => {
        axios.post('/search/title',{
            title: this.state.movie
        }).then(res => {
            this.setState({
                returnedMovies: res.data
            })
        })
    }


    render() {
        const movies = this.state.returnedMovies.map((movie, i) => (
            <div key={i}>
                <img src={movie.Poster} />
            </div>
        ))
        return (
            <div>
                <input type="text"
                onChange={this.handleChange}
                value={this.state.movie}
                />
                <button 
                onClick={this.handleSubmit}
                >Submit</button>
                
                {movies}
            </div>
        )
    }
}
