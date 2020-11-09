import React from 'react';
import '../styles/Movie.scss';
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
			<div className="d-flex flex-column justify-content-between">
				{this.props.searchButtonClicked === true && this.props.moviesByName.length > 0 ? (
					<div className="d-flex flex-column justify-content-between">
						<div className="d-flex justify-content-between">
							{this.props.page <= 1 ? (
								<div>
									<Button className="disabled">Previous page</Button>
								</div>
							) : (
								<div>
									<Button onClick={this.props.buttonPreviousPageClicked}>Previous page</Button>
								</div>
							)}
							<h6 className="mt-4 text-primary font-weight-bold">
								page {this.props.page}/{Math.ceil(this.props.totalResults / 10)}
							</h6>
							{this.props.page > 0 && this.props.page === Math.ceil(this.props.totalResults / 10) ? (
								<div>
									<Button className="disabled">Next page</Button>
								</div>
							) : (
								<div>
									<Button onClick={this.props.buttonNextPageClicked}>Next page</Button>
								</div>
							)}
						</div>
						<div className="d-flex flex-column mt-3 mb-3">
							<h6 className="mt-3 mb-3 text-success">
								Search results: <b>{this.props.totalResults}</b>
							</h6>
						</div>
					</div>
				) : null}
				<div className="box d-flex justify-content-between flex-wrap">
					{this.props.moviesByName.map((item, i) => (
						<div
							key={i}
							className="box__movie d-flex justify-content-start mt-4 bg-white shadow bg-white rounded"
						>
							<div className="box__movie__poster">
								{item.Poster !== 'N/A' ? (
									<img src={item.Poster} alt="" />
								) : (
									<img
										src="https://res.cloudinary.com/mokaweb/image/upload/v1604933899/Icons/no-poster-available.jpg"
										alt=""
									/>
								)}
							</div>
							<div className="box__movie__details d-flex flex-column justify-content-between text-left">
								<h5 className="ml-4 mr-2 mt-4">{item.Title}</h5>
								{this.state.detailsButtonClicked === true && item.imdbID === this.state.movieId ? (
									<MovieDetails movieById={this.state.movieById} />
								) : null}

								<div className="d-flex justify-content-between border-top pt-4 pb-4">
									<h5 className="box__movie__details__year ml-4 mt-3 font-weight-bold">
										{item.Year}
									</h5>
									<Button
										variant="primary"
										onClick={() => this.displayMovieDetails(item.imdbID)}
										className="pl-4 pr-4 mr-4 font-weight-bold"
									>
										DETAILS
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}
