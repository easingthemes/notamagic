import React from 'react';
import data from '../data';
import BlogItem from '../BlogItem/BlogItem';
import getPostsData from '../../../utils/getPostsData';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class Blog
 * @extends ReactApp
 */
export class Blog extends React.Component {

	//------------------------------------------------------------------------------------------------------------------
	// React methods
	//------------------------------------------------------------------------------------------------------------------

	/**
	 *
	 * Set the initial state
	 *
	 * @private
	 */
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			isLoading: true
		};
	}

	/**
	 * When component is mounted add the Change event listeners and get initial data
	 *
	 * @method componentDidMount
	 * @returns void
	 * @public
	 */
	componentDidMount () {
		const _this = this;
		getPostsData('Blog', _this.successCallback.bind(_this), _this.errorCallback.bind(_this), _this.props.number);
	}

	successCallback (data) {
		this.setState({
			posts: data,
			isLoading: false
		});
	}

	errorCallback () {
		this.setState({
			isLoading: false
		});
	}

	//------------------------------------------------------------------------------------------------------------------
	// Render methods
	//------------------------------------------------------------------------------------------------------------------
	renderItems () {
		const posts = this.state.posts || [];
		const items = data.items || [];

		//const posts = $.merge(true, items, wpposts);
		if (this.state.isLoading) {
			return (
				<span />
			);
		}

		return posts.map(function (post, index) {
			return (
				<div key={index} className="col-md-4 col-sm-6 col-xs-12 mb50">
					<BlogItem data={items[index]} post={post} />
				</div>
			);
		});
	}
	/**
	 * Renders the component
	 *
	 * @method render
	 * @returns {XML}
	 * @public
	 */
	render () {
		return (
			<div id="blogs" className="bg-gray pt75 pb75">
				<div className="container">

					<div className="row text-center mb25">
						<h1 className="font-size-normal">
							<small>{data.leadTitle}</small>
							{data.title}
							<small className="heading heading-solid center-block"></small>
						</h1>
					</div>

					<div className="row">
						{this.renderItems()}
					</div>
				</div>
			</div>
		);
	}
}

Blog.propTypes = {
};

Blog.defaultProps = {
};

export default Blog;
