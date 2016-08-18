import React from 'react';

export const TextRow = (props) => (
	<div className="row">
		<div className={'col-md-' + props.col1 + ' col-md-offset-' + props.offset1 + ' text-' + props.align}>
			<h3 className="text-uppercase font-montserrat color-dark">
				<small dangerouslySetInnerHTML={{__html:props.data.leadTitle}} />
				<span dangerouslySetInnerHTML={{__html:props.data.title}} />
				<small className={'heading heading-solid ' + props.align + '-block' }></small>
			</h3>
		</div>

		<div className={'col-md-' + props.col2 + ' col-md-offset-' + props.offset2 + ' text-' + props.align}>
			<p className="mt15">
				<i className="lead">
					<span dangerouslySetInnerHTML={{__html:props.data.leadText}} />
				</i>
				<br /><br />
				<span dangerouslySetInnerHTML={{__html:props.data.text}} />
			</p>
		</div>
	</div>
);
TextRow.propTypes = {
	align: React.PropTypes.string,
	offset1: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	col1: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	offset2: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	col2: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	data: React.PropTypes.object
};

TextRow.defaultProps = {
	align: 'left',
	offset1: 0,
	col1: 3,
	offset2: 0,
	col2: 9,
	data: {}
};
export default TextRow;
