import React from 'react';

export default class MovieDetails extends React.Component {
	render() {
		return (
			<div>
				<img src={this.props.movieById.Poster} alt="movie-poster" />
				<h3>{this.props.movieById.Title}</h3>
				<h4>Plot</h4>
				<h4>{this.props.movieById.Plot}</h4>
				<h4>Actors</h4>
				<h4>{this.props.movieById.Actors}</h4>
				{this.props.movieById.Ratings.map((item, i) => (
					<div key={i}>
						<h4>
							- {item.Source}: {item.Value}
						</h4>
					</div>
				))}
				<h3>{this.props.movieById.Year}</h3>
			</div>
		);
	}
}
