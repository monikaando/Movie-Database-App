import React from 'react';

export default class MovieDetails extends React.Component {
	render() {
		return (
			<div>
				<img src={this.state.movieById.Poster} alt="movie-poster" />
				<h3>{this.state.movieById.Title}</h3>
				<h4>Plot</h4>
				<h4>{this.state.movieById.Plot}</h4>
				<h4>Actors</h4>
				<h4>{this.state.movieById.Actors}</h4>
				{this.props.movieById.Ratings.map((item, i) => (
					<div key={i}>
						<h4>
							- {item.Source}: {item.Value}
						</h4>
					</div>
				))}
				<h3>{this.state.movieById.Year}</h3>
			</div>
		);
	}
}
