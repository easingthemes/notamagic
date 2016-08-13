/**
 *
 * Logo
 *
 */

import React from 'react';
import './styles.scss';

import A from 'components/atoms/A';
import Img from 'components/atoms/Img';
import LogoImg from './images/logo-easingthemes.png';

function Logo() {
	return (
		<div className="navbar-header">
			<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
				<i className="fa fa-bars"></i>
			</button>
			<A className="navbar-brand page-scroll" href="#page-top">
				<Img src={LogoImg} alt="Dragan Filipovic - Logo" />
				<span className="hidden-xs">Dragan Filipovic</span>
			</A>
		</div>
	);
}

export default Logo;
