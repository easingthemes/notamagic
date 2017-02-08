import React from 'react';
import Carousel from 'components/Carousel';
import Welcome from 'components/Wellcome';
import Gallery from 'components/Gallery';
import Service from 'components/Service';
import Paralax from 'components/Paralax';
import Fact from 'components/Fact';
import Achievement from 'components/Achievement';
import InfoArea from 'components/InfoArea';
import Blog from 'components/Blog';
import Contact from 'components/Contact';

//import BlogRoute from '../../BlogRoute/index'

export const HomeView = React.createClass({
	componentWillMount () {
		const category = 7;
		if (typeof this.props.fetchBlogItems === 'function') {
			this.props.fetchBlogItems(category, 3);
		}

	},
	componentDidMount () {
		//const store = getState();
		//console.log('BlogRoute', BlogRoute());
	},
	render () {
		return (
			<span>
				<Carousel name="HomeCarousel" />
				<Welcome />
				<Gallery />
				<Service />
				<Paralax  mt={75} />
				<Fact />
				<Achievement />
				<InfoArea />
				<Blog posts={this.props.posts} />
				<Contact />
			</span>
		);
	}
});

export default HomeView
