import React from 'react';
import data from './data';
import Isotope from 'isotope-layout';
import getGalleryData from '../../utils/getGalleryData';

export class Gallery extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			src: [],
			full: [],
			alt: [],
			filters: [],
			isLoading: true
		};
	}

	componentDidMount () {
		const _this = this;
		getGalleryData('posts', 29, _this.successCallback.bind(_this), _this.errorCallback.bind(_this));
	}

	componentDidUpdate (nextProps, nextState) {
		this.initPlugins();
	}

	successCallback (data) {
		let filters = data.alt.filter(function(filter, index) {
			return data.alt.indexOf(filter) === index;
		});
		data.isLoading = false;
		data.filters = filters;
		//console.log('data', data);
		this.setState(data);
	}

	errorCallback () {
		this.setState({
			isLoading: false
		});
	}

	initPlugins () {
		let $portfolio;
		jQueryBridget( 'isotope', Isotope, $ );

		setTimeout(function () {
			$('.magnific-popup').magnificPopup({
				type: 'image',
				gallery:{
					enabled: true
				}
			});

			$portfolio = $('.portfolio').imagesLoaded( function() {
				$portfolio.isotope({
					itemSelector: '.portfolio-item',
					masonry: {
						rowHeight: 280
					}
				});
			});

			$('.filters li a').on('click', function() {
				var filterValue = $(this).attr('data-filter');
				$portfolio.isotope({ filter: filterValue });
			});
			$('.filters li a').on('click', function(){
				$('.filters li a').removeClass('active');
				$(this).addClass('active');
			});
		}, 300);
	}

	renderFilter () {
		const filters = this.state.filters || [];
		return filters.map(function (filter, index) {
			let filterId = filter.replace(' ', '-').toLowerCase();
			return (
				<li key={'filter-' + index}>
					<a data-filter={'.' + filterId}>{filter}</a>
				</li>
			);
		});
	}

	renderFilters () {
		return (
			<ul className="filters text-center  mt25 mb50">
				<li><a className="active" data-filter="*">All Projects</a></li>
				{this.renderFilter()}
			</ul>
		);
	}

	renderImages () {
		let images = [];
		const srcs = this.state.src || [];
		const _this = this;
		return srcs.map(function(src, index) {
			let image = {
				thumbUrl: src,
				largeUrl: _this.state.full[index],
				alt: _this.state.alt[index]
			};
			images.push(image);
			return _this.renderImage(image, index);
		});
	}

	renderImage (image, index) {
		return (
			<div key={index} className={'portfolio-item col-lg-3 col-md-4 col-sm-6 col-xs-12 ' + image.alt} data-category="">
				<a href={image.largeUrl} className="magnific-popup external-media">
					<span className="glyphicon glyphicon-search hover-bounce-out"></span>
				</a>
				<img src={image.thumbUrl} alt={image.alt} className="img-responsive" />
			</div>
		);
	}

	render () {
		return (
			<div id="portfolioGrid">
				<div className="pt50">&nbsp;</div>
				<div className="container-fluid bg-gray pt30">
					<div className="row">
						<div className="col-md-12">

							{this.renderFilters()}
							<div className="portfolio center-block">
							{this.renderImages()}
							</div>

						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Gallery;
