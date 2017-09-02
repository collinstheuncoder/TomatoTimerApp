import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import PropTypes from 'prop-types';

const Countdown = props =>
	<ReactCountdownClock 
		seconds={ props.time * 60 } 
		color="#000088" 
		alpha={ 0.9 } 
		size={ 300 }
		weight={ 15 } 
	/>
;

Countdown.propTypes = {
	time: PropTypes.number,
};

export default Countdown;

