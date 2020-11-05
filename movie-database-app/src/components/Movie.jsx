import React from 'react';
import { Button } from 'react-bootstrap';

export default class Movie extends React.Component {
	render() {
		return (
			<div>
				{this.props.moviesByName.map((item, i) => (
					<div key={i}>
						<img src={item.Poster} alt="" />
						<h4>{item.Title}</h4>
						<h6>{item.Year}</h6>
						<Button variant="primary" onClick={this.props.displayMoviesDetails}>
							Details
						</Button>
					</div>
				))}
			</div>
		);
	}
}
