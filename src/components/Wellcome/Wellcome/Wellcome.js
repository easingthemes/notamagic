import React from 'react';
import TextRow from 'components/TextRow';
import Loader from 'components/Loader';
import data from '../data';
import getPageData from '../../../utils/getPageData';
import FeIcons from 'components/FeIcons';

export class Wellcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			isLoading: true
		};
	}

	successCallback (data) {
		this.setState({
			data: data,
			isLoading: false
		});
	}

	errorCallback () {
		this.setState({
			isLoading: false
		});
	}

	componentDidMount () {
		const _this = this;
		getPageData('pages', 9, _this.successCallback.bind(_this), _this.errorCallback.bind(_this));
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
					<FeIcons color={true} />
					<TextRow data={textData} />
				</div>
			</section>
		);
	}
}



export default Wellcome;
