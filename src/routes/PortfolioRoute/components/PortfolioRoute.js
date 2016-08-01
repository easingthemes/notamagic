import React from 'react';
import Service from 'components/Service';
import Gallery from 'components/Gallery';
import Parallax from 'components/Paralax';
import Achievement from 'components/Achievement';

export const PortfolioRoute = () => (
  <div>
	  <Parallax />
	  <Service />
	  <Gallery />
	  <Achievement />
  </div>
)

export default PortfolioRoute
