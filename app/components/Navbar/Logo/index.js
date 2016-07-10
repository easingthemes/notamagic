/**
 *
 * Logo
 *
 */

import React from 'react';
import './styles.scss';

import A from 'components/atoms/A';
import Img from 'components/atoms/Img';
import LogoImg from './images/logo-default.png';

function Logo() {
	return (
		<div className="navbar-header">
			<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
				<i className="fa fa-bars"></i>
			</button>
			<A className="navbar-brand page-scroll" href="#page-top">
				<Img src={LogoImg} alt="Notamagic - Logo" />
				NotAMagic
			</A>
		</div>
	);
}

export default Logo;
