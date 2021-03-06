import React from 'react';
import Isotope from 'isotope-layout';
import getGalleryData from '../../../utils/getGalleryData';
import getMediaData from '../../../utils/getMediaData';

export class Gallery extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			pluginsInit: false,
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
		getGalleryData('posts', 29, _this.successCallback.bind(_this), _this.errorCallback.bind(_this));
	}

	handleClick (id, event) {
		if (event && typeof event.preventDeafult === 'function') {
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

	successCallback (data) {
		const alt = data.alt || [];
		// alt.unshift('All');

		const filters = alt.filter((filter, index) => {
			return alt.indexOf(filter) === index;
		});

		data.isLoading = false;
		data.filters = filters;

		if (!this.state.pluginsInit) {
			this.initPlugins();
			data.pluginsInit = true;
		}
		this.setState(data);
	}

	errorCallback () {
		this.setState({
			isLoading: false
		});
	}

	successMediaCallback (id, data) {
		const medias = this.state.medias || {};
		const state = {
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

	initGallery () {
		const _portfolio = this._portfolio;
		if (_portfolio) {
			const iso = new Isotope(_portfolio, {
				//  options
				itemSelector: '.portfolio-item',
				masonry: {
					rowHeight: 280
				}
			});
			this.setState({
				isotope: iso
			});
		}
	}

	initModal () {
		const _this = this;
		$('.magnific-popup-inline').magnificPopup({
			type: 'inline',
			callbacks: {
				open: function () {
					$('body').addClass('overIn');
				},
				close: function () {
					$('body').removeClass('overIn');
				},
				change: function () {
					const id = this.content.data('id');
					_this.getMedia(id);
				}
			},
			gallery: {
				enabled: true
			}
		});
	}

	initPlugins () {
		const _this = this;
		setTimeout(() => {
			_this.initModal();
			_this.initGallery();
		}, 1000);
	}

	filterGallery (_thisa, filterId, index, event) {
		event.preventDefault();
		const iso = _thisa.state.isotope;
		if (iso) {
			iso.arrange({
				// item element provided as argument
				filter: (itemIndex, itemElem) => {
					const filters = itemElem.dataset.filters;
					return filters.indexOf(filterId) > -1;
				}
			});
		}
		$('.filters li a').removeClass('active');
		$(_thisa['_filter' + index]).addClass('active');
	}

	renderFilter () {
		const _this = this;
		const filters = this.state.filters || [];

		return filters.map(function (filter, index) {
			const filterId = filter.replace(' ', '-').toLowerCase();
			const _refLink = '_filter' + index;
			return (
				<li key={'filter-' + index}>
					<a
						ref={(c) => (_this[_refLink] = c)}
						href=""
						onClick={_this.filterGallery.bind(this, _this, filterId, index)}
					>{filter}</a>
				</li>
			);
		});
	}

	renderFilters () {
		const _this = this;
		return (
			<ul className="filters text-center  mt25 mb50">
				<li>
					<a
						className="active"
						onClick={_this.filterGallery.bind(this, _this, 'all', -1)}
					>All Projects</a>
				</li>
				{this.renderFilter()}
			</ul>
		);
	}

	renderImages () {
		const images = [];
		const srcs = this.state.src || [];
		const _this = this;
		const ids = _this.state.ids || [];
		return srcs.map((src, index) => {
			const image = {
				thumbUrl: src,
				largeUrl: _this.state.full[index] || '/img/portfolio/preview/img-portfolio-preview-1.jpg',
				alt: _this.state.alt[index],
				id: ids[index]
			};
			images.push(image);
			return _this.renderImage(image, index);
		});
	}

	renderPlatforms (platforms) {
		return platforms.map((platform, index) => {
			return (
				<span key={index} className="button-o button-xs button-square button-yellow mr15">{platform}</span>
			);
		});
	}

	renderImageLarge (image) {
		const id = image.id;
		const medias = this.state.medias || {};
		const media = medias[id] || {};
		const platform = media.platform || '';
		let platforms = [];
		let description = '';
		try {
			platforms = platform.split(',') || [];
		} catch(err) {}
		try {
			description = media.description.rendered;
		} catch(err) {}

		return (
			<div id={'media-' + id} className="media-wrapper mfp-hide" data-id={id}>
				<img src={image.largeUrl} alt={image.alt} className="media-image" />
				<div className="media-content">
					<h2>{media.title}</h2>
					<h4>{this.renderPlatforms(platforms)}</h4>
					<div className="media-text" dangerouslySetInnerHTML={{__html: description}} />
				</div>
			</div>
		);
	}

	renderImage (image, index) {
		const alt = image.alt;
		let altArr;
		let filters = [];
		if (typeof alt === 'string') {
			altArr = alt.split(',');
		}
		altArr.forEach((altItem) => {
			const altClass = altItem.replace(' ', '-').toLowerCase();
			filters.push(altClass);
		});
		filters.unshift('all');
		const id = image.id;

		return (
			<div
				key={index}
				data-filters={filters}
				data-id={index}
				className={'portfolio-item col-lg-3 col-md-4 col-sm-6 col-xs-12 ' + filters.join(' ')}
				data-category=""
			>
				<a
					href={'#media-' + id}
					data-id={id}
					onClick={this.handleClick.bind(this, image.id)}
					className="magnific-popup-inline external-media"
				>
					<span className="glyphicon glyphicon-search hover-bounce-out"></span>
				</a>
				<img src={image.thumbUrl} alt={image.alt} className="img-responsive" />
				{this.renderImageLarge(image)}
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
							<div className="portfolio center-block" ref={(c) => (this._portfolio = c)}>
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
