import React from 'react';
import TextRow from '../TextRow';
import getPageData from '../../utils/getPageData';

export class Service extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			post: {
				leadTitle: '',
				title: '',
				leadText: '',
				text: ''
			},
			isLoading: true
		};
	}

	componentDidMount () {
		const _this = this;
		getPageData('posts', 43, _this.successCallback.bind(_this), _this.errorCallback.bind(_this));
	}

	successCallback (data) {
		this.setState({
			post: data,
			isLoading: false
		});
	}

	errorCallback () {
		this.setState({
			isLoading: false
		});
	}

	render () {
		return (
			<div id="service" className="pt75 pb25">
				<div className="container">
					<TextRow data={this.state.post} align="left" col1="12" col2="8" offset2="2" />
				</div>
			</div>
		);
	}
}

export default Service;
