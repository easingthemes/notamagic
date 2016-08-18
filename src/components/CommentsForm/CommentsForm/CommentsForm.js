import React from 'react';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class CommentsForm
 * @extends ReactApp
 */
export class CommentsForm extends React.Component {

	// ------------------------------------------------------------------------------------------------------------------
	//  React methods
	// ------------------------------------------------------------------------------------------------------------------

	/**
	 *
	 * Set the initial state
	 *
	 * @private
	 */
	constructor (props) {
		super(props);
		this.state = {
			firstName: '',
			email: '',
			url: '',
			message: ''
		};
	}
	_onChange (e) {
		const state = {};
		state[e.target.name] = $.trim(e.target.value);
		this.setState(state);
	}
	_handleSubmit (event) {
		this.props.handleSubmit(event, this.state);
	}
	// ------------------------------------------------------------------------------------------------------------------
	//  Render methods
	// ------------------------------------------------------------------------------------------------------------------

	/**
	 * Renders the component
	 *
	 * @method render
	 * @returns {XML}
	 * @public
	 */
	render () {
		return (
			<form onSubmit={this._handleSubmit.bind(this)}>
				<input
					className="blog-leave-comment-input" onChange={this._onChange.bind(this)}
					name="firstName" type="text" placeholder="Name"
				/>
				<input
					className="blog-leave-comment-input" onChange={this._onChange.bind(this)}
					name="email" type="email" placeholder="Email"
				/>
				<input
					className="blog-leave-comment-input" onChange={this._onChange.bind(this)}
					name="url" type="text" placeholder="Website"
				/>
				<textarea
					className="blog-leave-comment-textarea" onChange={this._onChange.bind(this)}
					name="message"
				/>
				<button type="submit" className="button button-pasific button-sm center-block mb25">
					Submit
				</button>
			</form>
		);
	}
}

CommentsForm.propTypes = {
	handleSubmit: React.PropTypes.func
};

CommentsForm.defaultProps = {

};

export default CommentsForm;
