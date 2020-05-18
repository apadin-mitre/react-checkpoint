import React from 'react';
import Image from 'react-bootstrap/Image'

class MovieList extends React.Component { 
	// constructor(props) {
	// 	super(props);
	//     this.state = {
	//       movies: []
	//     }
	//   }

	// componentDidMount() {
	// 	fetch('http://localhost:3001/movies')
	// 		.then(response => response.json())
	// 		.then(movies => this.setState({ movies : movies }))
	// }

	// render() {
	// 	return (
	//       <ul>
	//         {this.state.movies.map(movie => <li key={movie.movieId}><Image src={movie.poster} rounded /></li>)}
	//       </ul>
	//     )
	//   }

	state = {
	    movies: [],
	    error: ''
	  }
	  async componentDidMount() {
	    const response = await fetch("http://localhost:3001/movies")
	    await response.json()
	      .then(
	        data => this.setState({ movies: data }),
	        error => {
	          this.setState({ error: 'Unable to load movies' })
	      })
	  }

	  render() {
	    return this.state.error !== ''
	      ? (<h1>Unable to load movies</h1>)
	      : (<ul>
		        {this.state.movies.map(movie => <li key={movie.movieId}><Image src={movie.poster} rounded /></li>)}
		      </ul>)
	  }

}

export default MovieList;
