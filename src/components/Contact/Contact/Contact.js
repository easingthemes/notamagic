import React from 'react';
import data from '../data';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class Contact
 * @extends ReactApp
 */
export class Contact extends React.Component {

	//------------------------------------------------------------------------------------------------------------------
	// React methods
	//------------------------------------------------------------------------------------------------------------------

	/**
	 *
	 * Set the initial state
	 *
	 * @private
	 */
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true
		};
	}

	/**
	 * When component is mounted add the Change event listeners and get initial data
	 *
	 * @method componentDidMount
	 * @returns void
	 * @public
	 */
	componentDidMount () {
		// var frm = $('#contactForm');
		// frm.submit(function (ev) {
		// 	$.ajax({
		// 		type: frm.attr('method'),
		// 		url: frm.attr('action'),
		// 		data: frm.serialize(),
		// 		success: function (data) {
		// 			$('#successMessage').show();
		// 		}
		// 	});
        //
		// 	ev.preventDefault();
		// });

		/* --------------------------------------------
		 SECURITY CHECK HUMAN
		 -------------------------------------------- */
		if($("#senderHuman").length > 0 ) {
			var a = Math.ceil(Math.random() * 10) + 1;
			var b = Math.ceil(Math.random() * 10) + 1;
			document.getElementById("senderHuman").placeholder = a +" + "+ b +" = ?";
			document.getElementById("checkHuman_a").value = a;
			document.getElementById("checkHuman_b").value = b;
		}

		/* --------------------------------------------
		 CONTACT FORM
		 -------------------------------------------- */
		var messageDelay = 2000;
		$(init);

		function init() {
			$('#contactForm').show().submit( submitForm ).addClass( 'positioned' );
		}

		// Submit the form via Ajax
		function submitForm() {
			var contactForm = $(this);

			// Are all the fields filled in?

			if ( !$('#senderName').val() || !$('#senderEmail').val() || !$('#message').val() ) {

				// No; display a warning message and return to the form
				$('#incompleteMessage').fadeIn().delay(messageDelay).fadeOut();
				contactForm.fadeOut().delay(messageDelay).fadeIn();

			} else {

				// Yes; submit the form to the PHP script via Ajax

				$('#sendingMessage').fadeIn();
				contactForm.show();

				$.ajax( {
					url: contactForm.attr( 'action' ) + "?ajax=true",
					type: contactForm.attr( 'method' ),
					data: contactForm.serialize(),
					success: submitFinished
				} );
			}

			// Prevent the default form submission occurring
			return false;
		}


		// Handle the Ajax response
		function submitFinished( response ) {
			response = $.trim( response );
			$('#sendingMessage').fadeOut();

			if ( response == "success" ) {

				// Form submitted successfully:
				// 1. Display the success message
				// 2. Clear the form fields
				// 3. Fade the content back in

				$('#successMessage').fadeIn().delay(messageDelay).fadeOut();
				$('#senderName').val( "" );
				$('#senderEmail').val( "" );
				$('#message').val( "" );

				$('#content').delay(messageDelay+500).fadeTo( 'slow', 1 );

			} else {

				// Form submission failed: Display the failure message,
				// then redisplay the form
				$('#failureMessage').fadeIn().delay(messageDelay).fadeOut();
				$('#contactForm').delay(messageDelay+500).fadeIn();
			}
		}
	}

	//------------------------------------------------------------------------------------------------------------------
	// Render methods
	//------------------------------------------------------------------------------------------------------------------

	/**
	 * Renders the component
	 *
	 * @method render
	 * @returns {XML}
	 * @public
	 */
	render () {
		return (
			<div id="contact" className="pt100 pb100 bg-grad-stellar">
				<div className="container">
					<div className="row">

						<div className="col-md-6">
							<div className="row">

								<div className="col-md-12 mb50">
									<h1 className="font-size-normal color-light">
										<small className="color-light">
											Contact Us
										</small>
										Drop Us a Message
									</h1>
									<h5 className="color-light">
										Please feel free to say anything to us. Our staff will reply any message
										<br />as soon as possible.
									</h5>
								</div>

								<div className="col-md-3 col-sm-3 col-xs-12">
									<span className="fa-map-o color-light fa fs-75"></span>
									<h5 className="color-light">
										<strong>Address</strong>
									</h5>
									<p className="color-light">Address Business 123 London, UK.</p>
								</div>

								<div className="col-md-3 col-sm-3 col-xs-6">
									<span className="fa-phone color-light fa fs-75"></span>
									<h5 className="color-light">
										<strong>Phone</strong>
									</h5>
									<p className="color-light">123-456-789</p>
								</div>

								<div className="col-md-3 col-sm-3 col-xs-6">
									<span className="fa-envelope-o color-light fa fs-75"></span>
									<h5 className="color-light">
										<strong>Email</strong>
									</h5>
									<p className="color-light">email@domain.com</p>
								</div>

							</div>
						</div>

						<div className="col-md-6">
							<div className="contact contact-us-one">
								<div className="col-sm-12 col-xs-12 text-center mb20">
									<h4 className="pb25 bb-solid-1 text-uppercase">
										Get in Touch
										<small className="text-lowercase">
											Please complete the form and we will get back to you.
										</small>
									</h4>
								</div>
								<form name="contactform" id="contactForm" method="post" action="/php/send.php">

									<div className="form-group col-md-6 col-sm-6 col-xs-12">
										<input type="text" name="senderName" id="senderName" className="input-md input-rounded form-control" placeholder="fullname" maxLength="100" required="" />
									</div>

									<div className="form-group col-md-6 col-sm-6 col-xs-12">
										<input type="email" name="senderEmail" id="senderEmail" className="input-md input-rounded form-control" placeholder="email address" maxLength="100" required="" />
									</div>

									<div className="form-group col-md-6 col-sm-6 col-xs-12">
										<input type="url" name="senderWebsite" id="senderWebsite" className="input-md input-rounded form-control" placeholder="http://" maxLength="100" />
									</div>

									<div className="form-group col-md-6 col-sm-6 col-xs-12">
										<input type="text" name="senderHuman" id="senderHuman" className="input-md input-rounded form-control" placeholder="" required="" />
										<input type="hidden" name="checkHuman_a" id="checkHuman_a" />
										<input type="hidden" name="checkHuman_b" id="checkHuman_b" />
									</div>

									<div className="form-group col-md-12 col-sm-12 col-xs-12">
										<textarea className="form-control" name="message" id="message" rows="7" required=""></textarea>
									</div>

									<div className="form-group col-md-12 col-sm-12 col-xs-12">
										<button type="submit" name="sendMessage" id="sendMessage" className="button button-md button-block button-grad-stellar">
											Send Message
										</button>
									</div>

									<div id="sendingMessage" className="statusMessage sending-message">
										<p>Sending your message. Please wait...</p>
									</div>
									<div id="successMessage" className="statusMessage success-message">
										<p>Thanks for sending your message! We'll get back to you shortly.</p>
									</div>
									<div id="failureMessage" className="statusMessage failure-message">
										<p>There was a problem sending your message. Please try again.</p>
									</div>
									<div id="incompleteMessage" className="statusMessage">
										<p>Please complete all the fields in the form before sending.</p>
									</div>

								</form>
							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
}

Contact.propTypes = {
};

Contact.defaultProps = {
};

export default Contact;
