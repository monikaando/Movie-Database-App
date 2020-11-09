import React from 'react';

export default class MovieDetails extends React.Component {
	render() {
		return (
			<div className="ml-4 mr-4">
				<h6 className="mt-4">Plot</h6>
				<h5>{this.props.movieById.Plot}</h5>
				<h6 className="mt-4">Actors</h6>
				<h5>{this.props.movieById.Actors}</h5>
				<h6 className="mt-4">Ratings</h6>
				{this.props.movieById.Ratings.map((item, i) => (
					<div key={i}>
						<h5>
							- {item.Source}: {item.Value}
						</h5>
					</div>
				))}
			</div>
		);
	}
}
