import React from 'react';
import PropTypes from 'prop-types';
import TomatoIcon from './Pomodoro';

const Sessions = ({ total }) => {
	const icons = [...Array(total || 0)].map((x, i) => i);

	return (
		<div className="sessions">
			<h3>Completed Work Sessions</h3>
			{
				icons.map((icon, index) => <TomatoIcon key={ index } />)
			}
		</div>
	);
};

Sessions.propTypes = {
	total: PropTypes.number
};

Sessions.getDefaultProps = {
	total: 0
};

export default Sessions;

