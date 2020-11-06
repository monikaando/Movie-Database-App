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
					detailsButtonClicked: !this.state.detailsButtonClicked,
					movieId: id,
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
				{this.props.searchButtonClicked === true ? (
					<div>
						<Button onClick={this.props.buttonPreviousPageClicked}>Previous page</Button>
						<Button onClick={this.props.buttonNextPageClicked}>Next page</Button>
						<h4>Search results: {this.props.totalResults}</h4>{' '}
					</div>
				) : null}
				{this.props.moviesByName.map((item, i) => (
					<div key={i}>
						{item.Poster !== 'N/A' ? <img src={item.Poster} alt="" /> : <p>No image</p>}
						<h4>{item.Title}</h4>
						{this.state.detailsButtonClicked === true && item.imdbID === this.state.movieId ? (
							<MovieDetails movieById={this.state.movieById} />
						) : null}
						<h6>{item.Year}</h6>
						<Button variant="primary" onClick={() => this.displayMovieDetails(item.imdbID)}>
							Details
						</Button>
					</div>
				))}
			</div>
		);
	}
}
