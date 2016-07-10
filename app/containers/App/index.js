/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
// import 'sanitize.css/sanitize.css';
import './styles.scss';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar/Navbar';

import TestList from 'components/TestList';

function App(props) {
	return (
		<div className="page-wrapper">
			{/* Navigation
			===================================== */}
			<Navbar />
			{/* Content
			 ===================================== */}
			{ props.children }
			{/* Footer
			 ===================================== */}
			<Footer />
		</div>
	);
}

App.propTypes = {
	children: React.PropTypes.node
};

export default App;
