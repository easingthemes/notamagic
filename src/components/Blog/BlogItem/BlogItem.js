import React from 'react';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class BlogItem
 * @extends ReactApp
 */
export class BlogItem extends React.Component {

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
		this.state = {};
	}

	/**
	 * When component is mounted add the Change event listeners and get initial data
	 *
	 * @method componentDidMount
	 * @returns void
	 * @public
	 */
	componentDidMount () {

	}

	//------------------------------------------------------------------------------------------------------------------
	// Render methods
	//------------------------------------------------------------------------------------------------------------------

	/**
	 * Renders the component
	 *
	 * @method render
	 * @returns {XML}
	 * @public
	 */
	render () {
		const item = this.props.data;
		return (
			<div className="blog-one">
				<div className="blog-one-header">
					<img src={item.image} alt={item.title} className="img-responsive" />
				</div>
				<div className="blog-one-attrib">
					<img src={item.author.photo} alt="photo blog" className="blog-author-photo" />
						<span className="blog-author-name">{item.author.name}</span>
						<span className="blog-date">{item.date}</span>
				</div>
				<div className="blog-one-body">
					<h4 className="blog-title"><a href={item.url}>{item.title}</a></h4>
					<p className="">
						{item.text}
					</p>
				</div>
				<div className="blog-one-footer">
					<a href="#">{item.buttonLabel}</a>
					<i className="fa fa-heart"></i>{item.likes} Likes
					<i className="fa fa-comments"></i><a href="#">{item.comments} Comments</a>
				</div>
			</div>
		);
	}
}

BlogItem.propTypes = {
	data: React.PropTypes.object
};

BlogItem.defaultProps = {
	data: {author: {}}
};

export default BlogItem;
