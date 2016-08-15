import React from 'react';
import data from './data';
import jsxToString from 'jsx-to-string';
import Isotope from 'isotope-layout';
import getGalleryData from '../../utils/getGalleryData';
import getMediaData from '../../utils/getMediaData';

export class Gallery extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			src: [],
			full: [],
			alt: [],
			ids: '',
			filters: [],
			isLoading: true,
			isLoadingMedia: true,
			media: {},
			active: 0
		};
	}

	componentDidMount () {
		const _this = this;
		//var magnificPopup = $.magnificPopup.instance; // save instance in magnificPopup variable
		//magnificPopup.close(); // Close popup that is currently opened
		const magnificPopup = $.magnificPopup.instance;
		console.log('magnificPopup', magnificPopup);

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
		const _this = this;
		let $portfolio;
		jQueryBridget( 'isotope', Isotope, $ );

		setTimeout(function () {
			$('.magnific-popup').magnificPopup({
				type: 'image',
				gallery:{
					enabled: true
				}
			});
			$('.magnific-popup-inline').magnificPopup({
				type: 'inline',
				callbacks: {
					open: function() {
						$('body').addClass('overIn');
					},
					close: function() {
						$('body').removeClass('overIn');
					},
					change: function() {
						const id = this.content.data('id');
						_this.getMedia(id);
					}
				},

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
	successMediaCallback (id, data) {
		let medias = this.state.medias || {};
		let state = {
			isLoadingMedia: false
		};
		if (!medias[id]) {
			medias[id] = data;
			state.medias = medias;
		}
		this.setState(state);
	}
	errorMediaCallback () {
		this.setState({
			isLoadingMedia: false
		});
	}
	handleClick(id, event) {
		if(event && typeof event.preventDeafult === 'function') {
			event.preventDefault();
		}
		this.getMedia(id);
	}
	getMedia (id) {
		const medias = this.state.medias || {};
		const _this = this;

		if (!medias[id]) {
			this.setState({
				isLoadingMedia: true
			});
			getMediaData(id, _this.successMediaCallback.bind(this, id), _this.errorMediaCallback.bind(this, id));
		}
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
		const ids = _this.state.ids || [];
		return srcs.map(function(src, index) {
			let image = {
				thumbUrl: src,
				largeUrl: _this.state.full[index],
				alt: _this.state.alt[index],
				id: ids[index]
			};
			images.push(image);
			return _this.renderImage(image, index);
		});
	}

	renderImage (image, index) {
		const alt = image.alt;
		let altArr;
		let altClasses = [];
		if (typeof alt === 'string') {
			altArr = alt.split(',');
		}
		altArr.map(function(altItem) {
			const altClass = altItem.toLowerCase();
			altClasses.push(altClass);
		});
		const id = image.id;
		const medias = this.state.medias || {};
		const media = medias[id] || {};
		return (
			<div key={index} className={'portfolio-item col-lg-3 col-md-4 col-sm-6 col-xs-12 ' + altClasses.join(' ')} data-category="">
				<a href={'#media-'+id} data-id={id} onClick={this.handleClick.bind(this, image.id)} className="magnific-popup-inline external-media">
					<span className="glyphicon glyphicon-search hover-bounce-out"></span>
				</a>
				<img src={image.thumbUrl} alt={image.alt} className="img-responsive" />
				<div id={'media-' + id} className="media-wrapper mfp-hide" data-id={id}>
					<img src={image.largeUrl} alt={image.alt} className="media-image" />
					<div className="media-content">
						<h2>{media.title}</h2>
						<h4>{media.platform}</h4>
						<div className="media-text" dangerouslySetInnerHTML={{__html:media.description}} />
					</div>
				</div>
			</div>
		);
	}

	render () {
		return (
			<div id="portfolioGrid">
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
