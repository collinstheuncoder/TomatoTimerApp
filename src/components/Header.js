import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, toggleSettings }) => {
	return (
		<div>
			<span>
				<i className="fa fa-cog" aria-hidden="true" onClick={ toggleSettings }></i>
			</span>
			<h2 className="text-center">{ title }</h2>
		</div>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
	toggleSettings: PropTypes.func.isRequired
};

export default Header;