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
				{this.props.searchButtonClicked === true && this.props.moviesByName.length > 0 ? (
					<div>
						{this.props.page <= 1 ? (
							<div>
								<Button className="disabled">Previous page</Button>
							</div>
						) : (
							<div>
								<Button onClick={this.props.buttonPreviousPageClicked}>Previous page</Button>
							</div>
						)}
						{this.props.page > 0 && this.props.page === Math.ceil(this.props.totalResults / 10) ? (
							<div>
								<Button className="disabled">Next page</Button>
							</div>
						) : (
							<div>
								<Button onClick={this.props.buttonNextPageClicked}>Next page</Button>
							</div>
						)}
						<h4>
							<u>{this.props.totalResults}</u> items founded
						</h4>{' '}
						<h4>
							page {this.props.page}/{Math.ceil(this.props.totalResults / 10)}
						</h4>
					</div>
				) : null}
				{this.props.moviesByName.map((item, i) => (
					<div key={i}>
						{item.Poster !== 'N/A' ? (
							<img src={item.Poster} alt="" />
						) : (
							<img
								src="https://res.cloudinary.com/mokaweb/image/upload/v1604933899/Icons/no-poster-available.jpg"
								alt=""
							/>
						)}
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
