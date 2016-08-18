/**
 * A link to a certain page, an anchor tag
 */

import React, {PropTypes} from 'react';

function A (props) {
	return (
		<a
			className={props.className}
			href={props.href || ''}
			{...props}
		/>
	);
}

A.propTypes = {
	className: PropTypes.string,
	href: PropTypes.string,
	target: PropTypes.string,
	children: PropTypes.node
};

export default A;
