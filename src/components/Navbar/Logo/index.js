/**
 *
 * Logo
 *
 */

import React from 'react';
import { Link } from 'react-router';
import './styles.scss';
import Img from 'components/atoms/Img';
import LogoImg from './images/logo-easingthemes.png';

function Logo() {
	return (
		<div className="navbar-header">
			<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
				<i className="fa fa-bars"></i>
			</button>
			<Link to="/" className="navbar-brand page-scroll">
				<Img src={LogoImg} alt="Dragan Filipovic - Logo" />
				<span className="hidden-xs">Dragan Filipovic</span>
			</Link>
		</div>
	);
}

export default Logo;
