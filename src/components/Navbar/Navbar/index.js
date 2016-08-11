/**
*
* Navbar
*
*/

import React from 'react';
import styles from './styles.global.scss';

import Logo from 'components/navbar/Logo';
import Navigation from 'components/navbar/Navigation';

class Navbar extends React.Component {
	componentDidUpdate (nextProps, nextState) {
		//console.log('nextState', nextState);
		//console.log('Navbar did update: ', this.props.path);
		this.initPlugins();
	}
	componentDidMount() {
		//console.log('Navbar did mount: ', this.props.path);
	}

	initPlugins () {
		/* --------------------------------------------
		 CLOSE COLLAPSE MENU ON MOBILE VIEW EXCEPT DROPDOWN
		 -------------------------------------------- */
		$('.navbar-collapse ul li a:not(.dropdown-toggle)').on('click',function (event) {
			$('.navbar-toggle:visible').click();
		});
		/* --------------------------------------------
		 STICKY SETTING
		 -------------------------------------------- */
		if( $('.navbar-sticky').length > 0){
			//$('.navbar-sticky').sticky({ topSpacing: 0 });
			$('.navbar-sticky').css('z-index','100');
			$('.navbar-sticky').addClass('bg-light');
			$('.navbar-sticky').addClass('top-nav-collapse');
		}

		/* --------------------------------------------------------
		 ANIMATED SCROLL PAGE WITH ACTIVE MENU - BOOTSTRAP SROLLSPY
		 ----------------------------------------------------------- */
		$('.navbar-op ul li a, .navbar-op a.navbar-brand, .intro-direction a, a.go-to-top').on('click', function(event) {
			event.preventDefault();
			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900, function(){
				window.location.hash = hash;
			});
		});

		/* --------------------------------------------------------
		 NAVBAR FIXED TOP ON SCROLL
		 ----------------------------------------------------------- */
		const toggleNav = function() {
			if ($('.navbar').offset().top > 10)  {
				$('.navbar-pasific').addClass('top-nav-collapse');
			} else {
				$('.navbar-pasific').removeClass('top-nav-collapse');
			}
		}

		if(this.props.path !== '/' && this.props.path !== '/portfolio') {
			$('.navbar-pasific').addClass('top-nav-collapse');
			console.log('off');
			$(window).off('scroll', toggleNav);
		} else {
			toggleNav();
			console.log('on');
			$(window).on('scroll', toggleNav);
		}

		/* --------------------------------------------------------
		 NAVBAR-INVERSE FIXED TOP ON SCROLL
		 ----------------------------------------------------------- */

		if( $('.navbar-pasific-inverse').length > 0 ){
			$(window).scroll(function() {
				if ($('.navbar').offset().top > 10)  {
					$('.navbar-pasific').addClass('top-nav-collapse-inverse');

				} else {
					$('.navbar-pasific').removeClass('top-nav-collapse-inverse');
				}
			});
		}
	}

	render() {
		const path = this.props.path === '/' ? '' : 'navbar-standart';
		const style = path + ' ';
		console.log('style', this.props.path);
		return (
			<nav className={style + ' navbar navbar-pasific navbar-fixed-top navbar-mp megamenu'}>
				<div className="container-fluid">
					<Logo />
					<Navigation />
				</div>
			</nav>
		);
	}
}

export default Navbar;
