import React from 'react';
import { IndexLink, Link } from 'react-router';

function Footer() {
	return (
    <footer id="footer" className="footer-one center-block bg-light pt50 pb30">
      <div className="container">
        <div className="row">

          <div className="col-md-3 col-xs-12 mb25">
            <div className="navbar-brand-footer">Dragan Filipovic</div>
            <div className="copyright">&copy; 2016. All rights reserved.</div>
          </div>

          <div className="col-md-6 col-xs-12 text-center">
            <div className="row">
              <div className="col-sm-12">
                <ul className=" bb-solid-1">
					<li>
						<IndexLink to='/'>
							Home
						</IndexLink>
					</li>

					<li>
						<Link
							to='/portfolio'
						>
							Portfolio
						</Link>
					</li>

					<li>
						<Link
							to='/blog'
						>
							Blog
						</Link>
					</li>
					<li>
						<Link
							to='/contact'
						>
							Contact
						</Link>
					</li>

				</ul>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-xs-12">
            <div className="social-container">
              <ul className="footer-social text-right">
                <li><a href="http://facebook.com/filipovic.dragan" target="_blank"><i className="fa fa-facebook"></i></a></li>
                <li><a href="http://twitter.com/frontenddot" target="_blank"><i className="fa fa-twitter"></i></a></li>
                <li><a href="http://github.com/easingthemes" target="_blank"><i className="fa fa-github"></i></a></li>
                <li><a href="http://linkedin.com/in/draganfilipovic" target="_blank"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>

        </div>

      </div>
		<div className="text-center">v.1.0.1</div>
    </footer>
  );
}

export default Footer;
