import React from 'react';
import TextRow from 'components/TextRow';
import Loader from 'components/Loader';
import FeIcons from 'components/FeIcons';
import data from '../data';
import getPageData from '../../../utils/getPageData';

export class Wellcome extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			data: null,
			isLoading: true
		};
	}

	componentDidMount () {
		const _this = this;
		getPageData('pages', 9, _this.successCallback.bind(_this), _this.errorCallback.bind(_this));
	}

	successCallback (page) {
		this.setState({
			data: page,
			isLoading: false
		});
	}

	errorCallback () {
		this.setState({
			isLoading: false
		});
	}

	render () {
		const textData = this.state.data || data;
		if (this.state.isLoading) {
			return (
				<Loader height={300} />
			);
		}
		return (
			<section id="welcome" className="pb25">
				<div className="container">
					<FeIcons color />
					<TextRow data={textData} />
				</div>
			</section>
		);
	}
}

export default Wellcome;
