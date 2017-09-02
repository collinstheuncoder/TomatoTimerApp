import React from 'react';
import AppHeader from './components/Header';
import Settings from './components/Settings';
import './scss/style.scss';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<AppHeader title="Tomato Timer" />
				<Settings />
			</div>
		);
	}	
}

export default App;