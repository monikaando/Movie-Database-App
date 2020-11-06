import React from 'react';
import './App.scss';
import Searchbar from './components/Searchbar';
import Home from './components/Home';
import Movie from './components/Movie';
import MadeBy from './components/MadeBy';
import axios from 'axios';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchClicked: false,
			displayMovies: false,
			searchByTitle: '',
			moviesByName: [],
			totalResults: 0,
			searchButtonClicked: false,
			page: 1,
			numberOfPages: 0,
		};
		this.movieTitleInputHandler = this.movieTitleInputHandler.bind(this);
		this.getMoviesByTitle = this.getMoviesByTitle.bind(this);
		this.buttonPreviousPageClicked = this.buttonPreviousPageClicked.bind(this);
		this.buttonNextPageClicked = this.buttonNextPageClicked.bind(this);
	}
	displayMovies = () => {
		this.getMoviesByTitle();
		this.setState({
			displayMovies: !this.state.displayMovies,
			searchClicked: !this.state.searchClicked,
		});
	};

	movieTitleInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
		let input = e.target.value;
		this.setState({
			searchByTitle: input.toLowerCase(),
		});
	}
	getMoviesByTitle() {
		axios({
			method: 'GET',
			url: `http://www.omdbapi.com/?apikey=9831d2b3&s=${this.state.searchByTitle}&page=${this.state.page}`,
			// ${this.state.page}
		})
			.then((res) => {
				this.setState({
					moviesByName: res.data.Search,
					totalResults: res.data.totalResults,
					searchButtonClicked: !this.statesearchButtonClicked,
					numberOfPages: this.state.totalResults / 10,
				});
			})
			.catch((err) => {
				console.log('No movies here');
			});
	}
	buttonPreviousPageClicked() {
		this.setState({
			page: this.state.page - 1,
		});
		this.getMoviesByTitle();
	}
	buttonNextPageClicked() {
		this.setState({
			page: this.state.page + 1,
		});
		this.getMoviesByTitle();
	}

	render() {
		return (
			<div className="App">
				<div className="searchbar pt-2 pb-2 shadow-sm border-top border-bottom searchbar">
					<Searchbar
						movieTitleInputHandler={this.movieTitleInputHandler}
						displayMovies={this.displayMovies}
						searchByTitle={this.state.searchByTitle}
					/>
				</div>
				<div className="App__container">
					<div className="content mt-4">
						{this.state.searchButtonClicked === false ? <Home /> : null}
						<Movie
							buttonPreviousPageClicked={this.buttonPreviousPageClicked}
							buttonNextPageClicked={this.buttonNextPageClicked}
							moviesByName={this.state.moviesByName}
							totalResults={this.state.totalResults}
							searchButtonClicked={this.state.searchButtonClicked}
						/>

						{/* <div className="alert alert-danger" role="alert">
								Movie not found!
							</div> */}
					</div>
					<MadeBy />
				</div>
			</div>
		);
	}
}
export default App;
