import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import '../styles/Searchbar.scss';

// import axios from "axios";

class Searchbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Navbar expand="lg" className="d-flex justify-content-between search-container pt-1 pb-2 pl-0 pr-0">
				<div>
					<Navbar.Brand href="#home" className="font-weight-bold">
						OMDB Search
					</Navbar.Brand>
				</div>
				<div>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Form inline>
							<FormControl type="text" placeholder="Search a movie" className="mr-sm-2" />
							<Button variant="primary">Search</Button>
						</Form>
					</Navbar.Collapse>
				</div>
			</Navbar>
		);
	}
}

export default Searchbar;
