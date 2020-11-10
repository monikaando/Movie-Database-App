import React from 'react';
import MadeBy from './MadeBy';
import { Navbar, FormControl, Button, InputGroup, FormGroup } from 'react-bootstrap';
import '../styles/Searchbar.scss';

class Searchbar extends React.Component {
	render() {
		return (
			<Navbar
				expand="lg"
				className="search-container d-flex flex-md-row flex-column justify-content-between pt-1 pb-2 pl-0 pr-0"
			>
				<div className="mb-4 mb-md-0">
					<Navbar.Brand href="/" className="font-weight-bold">
						OMDB Search
					</Navbar.Brand>
					<MadeBy />
				</div>
				<div>
					<FormGroup className="d-flex flex-column flex-md-row">
						<InputGroup>
							<FormControl
								type="input"
								placeholder="Search a movie"
								value={this.props.searchByTitle}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									this.props.movieTitleInputHandler(e)
								}
								className="mr-sm-2"
								onKeyPress={(event) => {
									if (event.key === 'Enter') {
										this.props.displayMovies();
									}
								}}
							/>
						</InputGroup>
						<Button
							variant="primary"
							className="search-container__button"
							onClick={this.props.displayMovies}
						>
							Search
						</Button>
					</FormGroup>
				</div>
			</Navbar>
		);
	}
}

export default Searchbar;
