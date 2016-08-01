/**
*
* Navigation
*
*/

import React from 'react';
import { IndexLink, Link } from 'react-router';

import './styles.scss';

function Navigation() {
	return (
	<div className="navbar-collapse collapse navbar-main-collapse">
		<ul className="nav navbar-nav">

			<li>
				<IndexLink to='/' activeClassName="active">
					Home
				</IndexLink>
			</li>

			<li className="dropdown">
				<Link
					to='#'
					activeClassName="active"
					className="dropdown-toggle color-light"
					data-toggle="dropdown"
				>
					Portfolio
				</Link>
				<ul className="dropdown-menu" role="menu">
					<li>
						<a
							href='/portfolio.pdf'
							download="Dragan-Filipovic_FrontendDeveloper.pdf"
						>
							PDF download
						</a>
					</li>
					<li>
						<Link
							to='/portfolio'
							activeClassName="active"
						>
							Web version
						</Link>
					</li>
				</ul>
			</li>

			<li>
				<Link
					to='/contact'
					activeClassName="active"
					className="color-light"
				>
					Contact
				  </Link>
			</li>

		</ul>
	</div>
	);
}

export default Navigation;
