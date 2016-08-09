import React from 'react';
import data from '../data';
import BlogItem from '../BlogItem/BlogItem';
import getPostsData from '../../../utils/getPostsData';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class BlogPost
 * @extends ReactApp
 */
export class BlogPost extends React.Component {

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
		getPostsData('Blog', _this.successCallback.bind(_this), _this.errorCallback.bind(_this));
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
	renderItem () {
		const post = this.state.post || [];

		//const posts = $.merge(true, items, wpposts);
		if (this.state.isLoading) {
			return (
				<span />
			);
		}
		
		return (
			<div className="col-md-12 col-sm-12 col-xs-12 mb50">
				<BlogItem post={post} />
			</div>
		);
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
						{this.renderItem()}
					</div>
				</div>
			</div>
		);
	}
}

BlogPost.propTypes = {
};

BlogPost.defaultProps = {
};

export default BlogPost;
