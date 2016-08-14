import React from 'react';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class SvgLine
 * @extends ReactApp
 */
export class SvgLine extends React.Component {

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
		const svgTag = `
			<svg 
				id="svgLine" 
				xmlns="http://www.w3.org/2000/svg" 
				version="1.1" 
				width="100%" 
				height="300" 
				xmlns:xlink="http://www.w3.org/1999/xlink" 
				viewBox="0 0 2000 250" 
				preserveAspectRatio="xMinYMax"
			>

				<polygon 
					points="-150,300 200,90 550,140 800,60 1100,150 1400,100 1700,10 1900,50 2500,90 2500,300" 
					fill="url(#BglinierGradient)" 
					stroke="none"
				>
				</polygon>

				<polyline 
					points="-150,244 200,90 550,140 800,60 1100,150 1400,100 1700,10 1900,50 2500,90 2500,500" 
					fill="none" 
					stroke="#7668af" 
					stroke-width="0"
				>
				</polyline>

				<text x="170" y="20" fill="#8b949b" style="font-size: 120%; font-weight: 400;">Days on the project</text>
				<text x="170" y="60" fill="#5cb85c" style="font-size: 250%; font-weight: 300;">279</text>

				<text x="510" y="60" fill="#8b949b" style="font-size: 120%; font-weight: 400;">Components (Wrappers)</text>
				<text x="520" y="100" fill="#5f6467" style="font-size: 250%; font-weight: 300;">27</text>

				<text x="760" y="0" fill="#8b949b" style="font-size: 120%; font-weight: 400;">Commits</text>
				<text x="760" y="40" fill="#b2cc71" style="font-size: 250%; font-weight: 300;">1 183</text>

				<text x="1060" y="70" fill="#8b949b" style="font-size: 120%; font-weight: 400;">Lines of code</text>
				<text x="1060" y="110" fill="#3c88c6" style="font-size: 250%; font-weight: 300;">288 952</text>

				<text x="1350" y="30" fill="#8b949b" style="font-size: 120%; font-weight: 400;">Juniors OnBoarded</text>
				<text x="1350" y="70" fill="#1abc9c" style="font-size: 250%; font-weight: 300;">2</text>

				<text x="1650" y="90" fill="#333333" style="font-size: 140%; font-weight: 300; font-family: 'Pacifico', cursive;">Counting..</text>

				<ellipse id="svg_1" rx="15" ry="15" cx="200" cy="90" fill="#5cb85c" stroke="#ffffff" stroke-width="5"></ellipse>
				<ellipse id="svg_2" rx="10" ry="10" cx="550" cy="140" fill="#5f6467" stroke="#ffffff" stroke-width="5"></ellipse>
				<ellipse id="svg_3" rx="15" ry="15" cx="800" cy="60" fill="#b2cc71" stroke="#ffffff" stroke-width="5"></ellipse>
				<ellipse id="svg_4" rx="15" ry="15" cx="1100" cy="150" fill="#3c88c6" stroke="#ffffff" stroke-width="5"></ellipse>
				<ellipse id="svg_5" rx="10" ry="10" cx="1400" cy="100" fill="#1abc9c" stroke="#ffffff" stroke-width="5"></ellipse>
				<ellipse id="svg_6" rx="10" ry="10" cx="1700" cy="10" fill="#a85ad4" stroke="#ffffff" stroke-width="5"></ellipse>
				<ellipse id="svg_7" rx="9" ry="9" cx="1900" cy="50" fill="#ff8b34" stroke="#ffffff" stroke-width="5"></ellipse>
				<ellipse id="svg_8" rx="6" ry="6" cx="2500" cy="90" fill="#fd40b3" stroke="#ffffff" stroke-width="5"></ellipse>
				<ellipse id="svg_9" rx="6" ry="6" cx="2200" cy="90" fill="#fd3635" stroke="#ffffff" stroke-width="5"></ellipse>

				<defs>
					<linearGradient id="BglinierGradient" x1="0" y1="0" x2="0" y2="1">
						<stop id="BgLinierGradientStop_1" stop-opacity="1" stop-color="#e8f3f5" offset="0"></stop>
						<stop id="BgLinierGradientStop_2" stop-opacity="1" stop-color="#e8f3f5" offset="1"></stop>
					</linearGradient>
				</defs>
			</svg>
		`;
		return (
			<div className="svg-container2">
				<div dangerouslySetInnerHTML={{__html: svgTag}} />
			</div>
		);
	}
}

SvgLine.propTypes = {
};

SvgLine.defaultProps = {
};

export default SvgLine;
