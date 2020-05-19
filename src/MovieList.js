import React, { useState } from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class MovieList extends React.Component { 

	state = {
	    movies: [],
	    error: ''
	  }

	// const show = useState(false);
	// const setShow = useState(false);
 //  	const handleClose = () => setShow(false);
 //  	const handleShow = () => setShow(true);

	handleClick(movie) {
		console.log(movie)
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

	  /*
		return (if state not error) ? <></> : ( (if selected) ? <></> : <></> )

	  */
	  render() {
	    return this.state.error !== ''
	      ? (<h1>Unable to load movies</h1>)
	      : ( 
	      	<><ul>{this.state.movies.map(movie => <li key={movie.movieId} ><Image src={movie.poster} rounded/><Button variant="link" onClick={() => this.handleClick(movie)} >More</Button></li>)}</ul></>
		    )
	  }

}

export default MovieList;
