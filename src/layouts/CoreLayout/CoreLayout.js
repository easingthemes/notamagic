import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import GoToTop from 'components/GoToTop';
import Footer from '../../components/Footer';
import '../../styles/vendor.scss';
import '../../styles/core.scss';
import helperScroll from '../../utils/animateScroll';

export class CoreLayout extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			isLoaded: false
		};
	}
	/* eslint-disable react/no-did-mount-set-state */
	componentDidMount () {
		this.setState({
			isLoaded: true
		});
		// Remove page loader
		$('.loader-item').delay(700).fadeOut();
		$('#pageloader').delay(800).fadeOut('slow');
		helperScroll();
	}
	/* eslint-enable react/no-did-mount-set-state */
	render () {
		const path = this.props.location.pathname;
		return (
			<div style={{height: '100%'}}>
				<GoToTop />
				<Navbar path={path} />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

CoreLayout.propTypes = {
	children: React.PropTypes.element.isRequired,
	location: React.PropTypes.object
};

export default CoreLayout;
