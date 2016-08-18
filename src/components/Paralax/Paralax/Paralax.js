import React from 'react';
import { Parallax as ParallaxComponent } from 'react-parallax';
import bgImage from '../images/parallax.jpg'
import { Link } from 'react-router';

export class Parallax extends React.Component {
	render () {
		return (
			<ParallaxComponent
				id="info-1"
				className={'pt50 pb50 parallax-window mt' + this.props.mt}
				bgImage={bgImage} strength={400}
			>
				<div className="container">
					<div className="row pt75">
						<div className="col-md-12 text-center">
							<h1 className="color-light">
								<small className="color-light">Do you need more information about my skills and experience?</small>
								Communication is key to Success
							</h1>
							<Link to="/contact" className="button button-md button-blue hover-ripple-out mt25 mr25">Contact me</Link>
							<a href='/portfolio.pdf'
							   download="Dragan-Filipovic_FrontendDeveloper.pdf"
							   className="button-o button-md button-green hover-fade mt25">
								<span className="color-light">Download PDF CV</span>
							</a>
						</div>
					</div>
				</div>
			</ParallaxComponent>
		);
	}
}

Parallax.propTypes = {
	mt: React.PropTypes.number
};

Parallax.defaultProps = {
	mt: 0
};

export default Parallax;
