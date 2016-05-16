/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'fonticons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-quill' : '&#xe000;',
			'icon-phone' : '&#xe001;',
			'icon-envelop' : '&#xe002;',
			'icon-location' : '&#xe003;',
			'icon-location-2' : '&#xe004;',
			'icon-keyboard' : '&#xe005;',
			'icon-bubbles' : '&#xe006;',
			'icon-bubbles-2' : '&#xe007;',
			'icon-spinner' : '&#xe008;',
			'icon-spinner-2' : '&#xe009;',
			'icon-spinner-3' : '&#xe00a;',
			'icon-spinner-4' : '&#xe00b;',
			'icon-lab' : '&#xe00c;',
			'icon-magnet' : '&#xe00d;',
			'icon-earth' : '&#xe00e;',
			'icon-bookmark' : '&#xe00f;',
			'icon-happy' : '&#xe010;',
			'icon-happy-2' : '&#xe011;',
			'icon-smiley' : '&#xe012;',
			'icon-smiley-2' : '&#xe013;',
			'icon-tongue' : '&#xe014;',
			'icon-tongue-2' : '&#xe015;',
			'icon-sad' : '&#xe016;',
			'icon-sad-2' : '&#xe017;',
			'icon-wink' : '&#xe018;',
			'icon-wink-2' : '&#xe019;',
			'icon-grin' : '&#xe01a;',
			'icon-grin-2' : '&#xe01b;',
			'icon-cool' : '&#xe01c;',
			'icon-cool-2' : '&#xe01d;',
			'icon-angry' : '&#xe01e;',
			'icon-angry-2' : '&#xe01f;',
			'icon-evil' : '&#xe020;',
			'icon-evil-2' : '&#xe021;',
			'icon-shocked' : '&#xe022;',
			'icon-shocked-2' : '&#xe023;',
			'icon-confused' : '&#xe024;',
			'icon-confused-2' : '&#xe025;',
			'icon-neutral' : '&#xe026;',
			'icon-neutral-2' : '&#xe027;',
			'icon-wondering' : '&#xe028;',
			'icon-wondering-2' : '&#xe029;',
			'icon-wordpress' : '&#xe02a;',
			'icon-wordpress-2' : '&#xe02b;',
			'icon-joomla' : '&#xe02c;',
			'icon-html5' : '&#xe02d;',
			'icon-html5-2' : '&#xe02e;',
			'icon-css3' : '&#xe02f;',
			'icon-pencil' : '&#xe030;',
			'icon-earth-2' : '&#xe031;',
			'icon-calendar' : '&#xe032;',
			'icon-clock' : '&#xe033;',
			'icon-compass' : '&#xe034;',
			'icon-stats' : '&#xe035;',
			'icon-keyboard-2' : '&#xe036;',
			'icon-envelope' : '&#xf003;',
			'icon-remove' : '&#xf00d;',
			'icon-ok' : '&#xf00c;',
			'icon-bookmark-2' : '&#xf02e;',
			'icon-book' : '&#xf02d;',
			'icon-map-marker' : '&#xf041;',
			'icon-pencil-2' : '&#xf040;',
			'icon-chevron-right' : '&#xf054;',
			'icon-chevron-left' : '&#xf053;',
			'icon-question-sign' : '&#xf059;',
			'icon-info-sign' : '&#xf05a;',
			'icon-remove-circle' : '&#xf05c;',
			'icon-ok-circle' : '&#xf05d;',
			'icon-ban-circle' : '&#xf05e;',
			'icon-plus' : '&#xf067;',
			'icon-minus' : '&#xf068;',
			'icon-exclamation-sign' : '&#xf06a;',
			'icon-eye-open' : '&#xf06e;',
			'icon-chevron-up' : '&#xf077;',
			'icon-chevron-down' : '&#xf078;',
			'icon-twitter-sign' : '&#xf081;',
			'icon-facebook-sign' : '&#xf082;',
			'icon-comments' : '&#xf086;',
			'icon-star-half' : '&#xf089;',
			'icon-heart-empty' : '&#xf08a;',
			'icon-phone-2' : '&#xf095;',
			'icon-bookmark-empty' : '&#xf097;',
			'icon-phone-sign' : '&#xf098;',
			'icon-twitter' : '&#xf099;',
			'icon-facebook' : '&#xf09a;',
			'icon-globe' : '&#xf0ac;',
			'icon-group' : '&#xf0c0;',
			'icon-link' : '&#xf0c1;',
			'icon-google-plus-sign' : '&#xf0d4;',
			'icon-google-plus' : '&#xf0d5;',
			'icon-envelope-alt' : '&#xf0e0;',
			'icon-comments-alt' : '&#xf0e6;',
			'icon-lightbulb' : '&#xf0eb;',
			'icon-desktop' : '&#xf108;',
			'icon-laptop' : '&#xf109;',
			'icon-tablet' : '&#xf10a;',
			'icon-mobile' : '&#xf10b;',
			'icon-circle-blank' : '&#xf10c;',
			'icon-circle' : '&#xf111;',
			'icon-spinner-5' : '&#xf110;',
			'icon-phone-3' : '&#xe037;',
			'icon-feather' : '&#xe038;',
			'icon-graduation' : '&#xe039;',
			'icon-book-2' : '&#xe03a;',
			'icon-clock-2' : '&#xe03b;',
			'icon-earth-3' : '&#xe03c;',
			'icon-phone-4' : '&#xe03d;',
			'icon-graduate' : '&#xe03e;',
			'icon-3d-glasses' : '&#xe03f;',
			'icon-mouse' : '&#xe040;',
			'icon-library' : '&#xe041;',
			'icon-circle-2' : '&#xe042;',
			'icon-square' : '&#xe043;',
			'icon-envelope-2' : '&#xe044;',
			'icon-envelope-3' : '&#xe045;',
			'icon-presentation' : '&#xe046;',
			'icon-bike' : '&#xe047;',
			'icon-compass-2' : '&#xe048;',
			'icon-ying-yang' : '&#xe049;',
			'icon-clipboard' : '&#xe04a;',
			'icon-clipboard-2' : '&#xe04b;',
			'icon-star' : '&#xf005;',
			'icon-star-empty' : '&#xf006;',
			'icon-ampersand' : '&#xe04c;',
			'icon-ampersand-2' : '&#xe04d;',
			'icon-share-alt' : '&#xf064;',
			'icon-external-link' : '&#xf08e;',
			'icon-redo' : '&#xe04e;',
			'icon-link-2' : '&#xe04f;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};