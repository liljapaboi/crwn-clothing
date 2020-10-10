import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';

function App() {
	return (
		<div>
			<Header></Header>
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route exact path="/shop" component={ShopPage}></Route>
			</Switch>
		</div>
	);
}

export default App;
