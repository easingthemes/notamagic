import React from 'react';
import PageLoader from 'components/PageLoader';
import Navbar from 'components/Navbar/Navbar';
import GoToTop from 'components/GoToTop';
import Footer from '../../components/Footer';
import classes from './CoreLayout.scss';
import '../../styles/vendor.scss';
import '../../styles/core.scss';
import helperScroll from '../../utils/animateScroll';

export class CoreLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false
		};
	}
	componentDidMount () {
		this.setState({
			isLoaded: true
		});
		helperScroll();
	}
	render () {
		return (
			<div style={{height: '100%'}}>
				<PageLoader isLoaded={this.state.isLoaded} />
				<GoToTop />
				<Navbar />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

CoreLayout.propTypes = {
	children: React.PropTypes.element.isRequired
};

export default CoreLayout
