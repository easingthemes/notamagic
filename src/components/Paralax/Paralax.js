import React from 'react';

export class Parallax extends React.Component {
	componentDidMount () {
		const baseUrl = '/img/bg';
		$('.parallax-window').parallax({
			imageSrc: baseUrl + '/img-bg-2.jpg'
		});
	}
	render () {
		return (
			<div id="info-1" className={'pt50 pb50 parallax-window mt' + this.props.mt} data-parallax="scroll" data-speed="0.5">
				<div className="container">
					<div className="row pt75">
						<div className="col-md-12 text-center">
							<h1 className="color-light">
								<small className="color-light">The best way to be success</small>
								Are you ready to be success with us?
							</h1>
							<a className="button button-md button-pasific hover-ripple-out mt25">Start Project</a>
							<a className="button-o button-md button-green hover-fade mt25"><span className="color-light">Contact Us</span></a>
						</div>
					</div>
				</div>
			</div>
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
