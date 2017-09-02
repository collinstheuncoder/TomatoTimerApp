import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = props => {
	return (
		<div>
			<span><i className="fa fa-cog" aria-hidden="true"></i></span>
			<h2 className="text-center">{ props.title }</h2>
		</div>
	);
};

AppHeader.propTypes = {
	title: PropTypes.string.isRequired
};

export default AppHeader;