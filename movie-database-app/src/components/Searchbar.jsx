import React from 'react';
import MadeBy from './MadeBy';

import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import '../styles/Searchbar.scss';

class Searchbar extends React.Component {
	render() {
		return (
			<Navbar expand="lg" className="d-flex justify-content-between search-container pt-1 pb-2 pl-0 pr-0">
				<div>
					<Navbar.Brand href="/" className="font-weight-bold">
						OMDB Search
					</Navbar.Brand>
					<MadeBy />
				</div>
				<div>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search a movie"
								value={this.props.searchByTitle}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									this.props.movieTitleInputHandler(e)
								}
								className="mr-sm-2"
							/>
							<Button variant="primary" onClick={this.props.displayMovies}>
								Search
							</Button>
						</Form>
					</Navbar.Collapse>
				</div>
			</Navbar>
		);
	}
}

export default Searchbar;
