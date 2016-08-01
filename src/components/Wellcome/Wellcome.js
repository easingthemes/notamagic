import React from 'react';
import TextRow from '../TextRow';
import data from './data';

export const Wellcome = () => (
	<section id="welcome" className="pt50">
		<div className="container">
			<TextRow data={data} />
		</div>
	</section>
);

export default Wellcome;
