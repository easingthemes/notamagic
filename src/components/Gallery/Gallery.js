import React from 'react';
import data from './data';
import Isotope from 'isotope-layout';

export class Gallery extends React.Component {
	componentDidMount () {
		let $portfolio;
		jQueryBridget( 'isotope', Isotope, $ );
		$('.magnific-popup').magnificPopup({
			type: 'image',
			gallery:{enabled:true}
		});
		setTimeout(function () {
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
		const filters = data.filters;
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
		const images = data.images;
		const _this = this;
		return images.map(function (image, index) {
			return _this.renderImage(image, index);
		});
	}
	renderImage (image, index) {
		const baseUrl = '/img/portfolio';
		let filtersIds = image.filters.map(function (filter) {
			return filter.replace(' ', '-').toLowerCase();
		});
		const filters = filtersIds.join(' ');

		return (
			<div key={index} className={'portfolio-item col-lg-3 col-md-4 col-sm-6 col-xs-12 ' + filters} data-category="">
					<a href={baseUrl + '/' + image.largeUrl} className="magnific-popup">
					<span className="glyphicon glyphicon-search hover-bounce-out"></span>
				</a>
				<img src={baseUrl + '/' + image.thumbUrl} alt={image.alt} className="img-responsive" />
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
