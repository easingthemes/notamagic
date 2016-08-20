import React from 'react';
import { Link } from 'react-router';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class TopRow
 * @extends ReactApp
 */
const TopRow = (props) => (
	<header className="bg-grad-stellar mt70">

		<div className="container">
			<div className="row mt20 mb30">
				<div className="col-md-6 text-left">
					<h3 className="color-light text-uppercase" data-animation="fadeInUp" data-animation-delay="100">
						Blog Post Read
						<small className="color-light alpha7">some notes.</small>
					</h3>
				</div>
				<div className="col-md-6 text-right pt35">
					<ul className="breadcrumb">

						<li>
							<Link
								to={'/'}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to={'/blog'}
							>
								Blog
							</Link>
						</li>
						<li>{props.postTitle}</li>
					</ul>
				</div>
			</div>
		</div>

	</header>
);

TopRow.propTypes = {
	postTitle: React.PropTypes.string
};

TopRow.defaultProps = {
	postTitle: ''
};

export default TopRow;
