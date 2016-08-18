import React from 'react';

export const SlideSvg = () => {
	const svgTag = `
			<svg id="svgLineTop" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="300" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2000 300" preserveAspectRatio="xMinYMax">
				<polygon points="-150,450 0,100 600,300 2000,100 5200,450" fill="#fff" stroke="none"></polygon>
			</svg>
		`;
	return (
		<div className="svg-container-bottom">
			<div dangerouslySetInnerHTML={{__html: svgTag}} />
		</div>
	);
};

export default SlideSvg;
