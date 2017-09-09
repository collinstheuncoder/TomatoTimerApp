import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ operations }) => {
	const [onStartCountdown, onPauseCountdown, onStopCountdown, onResetApp] = operations;

	return (
		<div className="buttons">
			<button 
				type="button" 
				className="btn btn-outline-danger" 
				onClick={ onStartCountdown }>
				<i className="fa fa-play" aria-hidden="true"></i>
				Start
			</button>
			<button 
				type="button" 
				className="btn btn-outline-danger" 
				onClick={ onPauseCountdown }>
				<i className="fa fa-pause" aria-hidden="true"></i>
				Pause
			</button>
			<button 
				type="button" 
				className="btn btn-outline-danger" 
				onClick={ onStopCountdown }>
				<i className="fa fa-stop" aria-hidden="true"></i>
				Stop
			</button>
			<button 
				type="button" 
				className="btn btn-outline-danger" 
				onClick={ onResetApp }>
				<i className="fa fa-refresh" aria-hidden="true"></i>
				Reset
			</button>
		</div>
	);
};

Buttons.propTypes = {
	operations: PropTypes.array.isRequired,
};

export default Buttons;