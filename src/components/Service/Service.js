import React from 'react';
import TextRow from '../TextRow';
import data from './data';

export const Service = () => (
  <div id="service" className="pt75 pb25">
	  <div className="container">
	  	<TextRow data={data} align="center" col1="12" col2="8" offset2="2" />
	  </div>
  </div>
);

export default Service
