import React from 'react';

export default class MovieDetails extends React.Component {
	render() {
		return (
			<div>
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
			</div>
		);
	}
}
