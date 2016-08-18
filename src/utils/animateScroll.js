const animateScroll = () => {
	$(document).on('click', '.navbar-op ul li a, .navbar-op a.navbar-brand, .intro-direction a, a.go-to-top', function (event) {
		event.preventDefault();
		var hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 900);
	});
};

export default animateScroll;
