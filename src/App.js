import React, { Component } from 'react';
import Header from './components/Header';
import Settings from './components/Settings';
import Timer from './components/Timer';
import Buttons from './components/Buttons';
import Sessions from './components/Sessions';
import './scss/style.scss';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			completedSessions: 5,
			workDuration: 25,
			breakDuration: 5,
			isSettingsDisplayed: false,
			isCounting: false,
			isPaused: false,
			isStopped: false,
		};

		this.baseState = this.state;
		
		this.onToggleSettings  = this.onToggleSettings.bind(this);
		this.onStartCountdown  = this.onStartCountdown.bind(this);
		this.onPauseCountdown  = this.onPauseCountdown.bind(this);
		this.onStopCountdown   = this.onStopCountdown.bind(this);
		this.onResetApp        = this.onResetApp.bind(this);
		this.onSessionComplete = this.onSessionComplete.bind(this);	
	}

	onToggleSettings() {
		this.setState({
			isSettingsDisplayed: !this.state.isSettingsDisplayed
		});
	}

	onStartCountdown() {
		this.setState({
			isCounting: true
		});
	}

	onPauseCountdown() {
		this.setState({
			isPaused: !this.state.isPaused
		});
	}

	onStopCountdown() {
		this.setState({
			isStopped: true
		});
	}

	onSessionComplete() {
		this.setState({
			isSessionComplete: true
		});
	}

	onResetApp() {
		this.setState(this.baseState);
	}

	render() {
		const { 
			onToggleSettings, 
			onStartCountdown, 
			onPauseCountdown, 
			onStopCountdown, 
			onResetApp 
		} = this;
		const {
			completedSessions, 
			isCounting, 
			workDuration, 
			breakDuration,
			isSettingsDisplayed, 
			isPaused, 
			isStopped 
		} = this.state; 

		return (
			<div className="container">
				<Header title={ 'Waiting...' } toggleSettings={ onToggleSettings } />
				{
					isSettingsDisplayed === true && <Settings />
				}
				{
					isCounting === true && <Timer 
						time={ Number(workDuration) } 
						pause={ isPaused } 
						stop={ isStopped } /> 
				}
				<Buttons operations={ [onStartCountdown, onPauseCountdown, onStopCountdown, onResetApp] }/>
				<Sessions total={ completedSessions }/>
			</div>
		);
	}	
}

export default App;