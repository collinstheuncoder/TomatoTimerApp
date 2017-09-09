import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import PropTypes from 'prop-types';

const Timer = ({ time, pause }) =>
	<ReactCountdownClock 
		seconds={ time * 60 }
		paused={ pause } 
		color="#000088" 
		alpha={ 0.9 } 
		size={ 300 }
		weight={ 15 }
	/>
;

Timer.propTypes = {
	time: PropTypes.number.isRequired,
	pause: PropTypes.bool,
	stop: PropTypes.bool
};

export default Timer;