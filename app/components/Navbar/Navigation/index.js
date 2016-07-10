/**
*
* Navigation
*
*/

import React from 'react';

import './styles.scss';

function Navigation() {
	return (
    <div className="navbar-collapse collapse navbar-main-collapse">
      <ul className="nav navbar-nav">

        <li className="">
          <a href="index.html" className="">Home </a>
        </li>

        <li className="dropdown">
          <a href="" data-toggle="dropdown" className="dropdown-toggle color-light">Page </a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="page-faq-3.html">FAQ 3</a></li>
            <li><a href="page-login-register-2.html">Login/Register 2</a></li>
            <li><a href="page-404.html">Error 404</a></li>
          </ul>
        </li>

        <li className="dropdown"><a href="" data-toggle="dropdown" className="dropdown-toggle color-light">Blog </a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="blog-posts-one-masonry-fullwidth-3col.html">Masonry Fullwidth 3 Col</a></li>
            <li><a href="blog-post-read.html">Blog Post Read</a></li>
          </ul>
        </li>

        <li>
          <a href="" data-toggle="modal" data-target="#searchModal">
            <i className="fa fa-search fa-fw color-pasific"></i>
          </a>
        </li>

      </ul>

    </div>
  );
}

export default Navigation;
