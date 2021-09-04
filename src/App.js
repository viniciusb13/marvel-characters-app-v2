import './App.css';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
// import CharacterCard from './components/CharacterCard';
import CharacterList from './components/CharacterList';
import CharacterPage from './components/CharacterPage';
import SearchPage from './components/SearchPage';

function App() {

	return (
		<div>
			<Header />
			<Switch>
				<Route path={"/"} exact component={CharacterList} />
				<Route path={"/:searchedTerm"} exact component={SearchPage}/>
				<Route path={"/character/:characterId"} exact component={CharacterPage} />
				<Redirect to={"/"} />
			</Switch>
		</div> 
	);
}

export default App;
