import React from 'react';
import './App.scss';
import Searchbar from './components/Searchbar';
import Home from './components/Home';
// import MovieDetails from "./components/MovieDetails";
// import Movie from "./components/Movie";
import MadeBy from './components/MadeBy';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<div className="searchbar pt-2 pb-2 shadow-sm border-top border-bottom searchbar">
				<Searchbar />
			</div>
			<div className="App__container">
				<div className="content mt-4">
					<Route exact path="/" component={Home}></Route>
					{/* <Route exact path="/movie-details" component={MovieDetails}></Route>
					<Route exact path="/search-results" component={Movie}></Route> */}
				</div>
				<MadeBy />
			</div>
		</div>
	);
}

export default App;
