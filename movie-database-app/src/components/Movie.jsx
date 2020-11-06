import React from 'react';
import { Button } from 'react-bootstrap';
import MovieDetails from './MovieDetails';
import axios from 'axios';

export default class Movie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movieById: [],
			movieId: '',
			detailsButtonClicked: false,
		};
		this.displayMovieDetails = this.displayMovieDetails.bind(this);
	}
	displayMovieDetails(id) {
		axios({
			method: 'GET',
			url: `http://www.omdbapi.com/?apikey=9831d2b3&i=${id}`,
		})
			.then((res) => {
				this.setState({
					movieById: res.data,
					detailsButtonClicked: true,
				});
			})
			.catch((err) => {
				console.log('No movies here');
			});
		console.log(this.state.movieByID);
	}
	render() {
		return (
			<div>
				{this.state.detailsButtonClicked === true ? (
					<div>
						<MovieDetails movieById={this.state.movieById} />
					</div>
				) : null}
				{this.props.searchButtonClicked === true ? <h4>Search results: {this.props.totalResults}</h4> : null}
				{this.props.moviesByName.map((item, i) => (
					<div key={i}>
						<img src={item.Poster} alt="movie-poster" />
						<h4>{item.Title}</h4>
						<h6>{item.Year}</h6>
						<Button
							variant="primary"
							// onChange={() => {
							// 	this.setState({
							// 		movieId: item.imdbID,
							// 		detailsButtonClicked: !this.state.detailsButtonClicked,
							// 	});
							// 	console.log(this.state.movieId);
							// }}

							onClick={() => this.displayMovieDetails(item.imdbID)}
						>
							Details
						</Button>
					</div>
				))}
			</div>
		);
	}
}
