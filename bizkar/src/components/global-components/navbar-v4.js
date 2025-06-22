import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV4 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const cssUrl = publicUrl + "assets/css/color-4.css";
		this.addStyle(cssUrl);
	}

	addStyle = url => {
		const style = document.createElement("link");
		style.href = url;
		style.rel = "stylesheet";
		style.async = true;

		document.head.appendChild(style);
	};

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = 'logo'
		return (
			<header className="site-header-two site-header-two__home-four go-top">
				<nav className="main-nav__two stricky">
					<div className="container-fluid">
						<div className="main-nav__logo-box">
							<Link to="/">
								<img src={publicUrl + "assets/images/logo-full-light.png"} alt={imgattr} />
							</Link>
						</div>{/* /.main-nav__logo-box */}
						<div className="main-nav__main-navigation">
							<ul className=" main-nav__navigation-box">
								<li className="dropdown">
									<Link to="/">Anasayfa</Link>
									<ul>
										<li><Link to="/home-v2">Anasayfa 02</Link></li>
										<li><Link to="/home-v3">Anasayfa 03</Link></li>
										<li><Link to="/home-v4">Anasayfa 04</Link></li>
									</ul>{/* /.sub-menu */}
								</li>
								<li>
									<Link to="/about">Hakkımızda</Link>
								</li>
								<li className="dropdown">
									<a href="#">Hizmetler</a>
									<ul>
										<li><Link to="/service">Hizmetler 01</Link></li>
										<li><Link to="/service-v2">Hizmetler 02</Link></li>
										<li><Link to="/service-details">Hizmet Detayları</Link></li>
									</ul>{/* /.sub-menu */}
								</li>
								<li className="dropdown">
									<a href="#">Projeler</a>
									<ul>
										<li><Link to="/portfolio-standard">Standart Portföy</Link></li>
										<li><Link to="/portfolio-full">Tam Portföy</Link></li>
										<li><Link to="/portfolio-masonary">Masonary Portföy</Link></li>
										<li><Link to="/portfolio-details">Portföy Detayları</Link></li>
									</ul>{/* /.sub-menu */}
								</li>
								<li className="dropdown">
									<a href="#">Sayfalar</a>
									<ul>
										<li><Link to="/pricing">Fiyatlandırma</Link></li>
										<li><Link to="/faq">SSS</Link></li>
										<li><Link to="/testimonial">Referanslar</Link></li>
										<li><Link to="/team">Takım</Link></li>
									</ul>{/* /.sub-menu */}
								</li>
								<li className="dropdown">
									<Link to="/blog-standard">Haberler</Link>
									<ul>
										<li><Link to="/blog-grid">Haber Sayfası</Link></li>
										<li><Link to="/blog-list">Haber Listesi</Link></li>
										<li><Link to="/blog-details">Haber Detayları</Link></li>
									</ul>{/* /.sub-menu */}
								</li>
								<li>
									<Link to="/contact">İletişim</Link>
								</li>
							</ul>
						</div>{/* /.main-nav__main-navigation */}
						<div className="main-nav__right">
							<a href="#" className="side-menu__toggler"><span /></a>
							<Link to="/contact">Yardım Gerekli?</Link>
							<Link to="/contact">Kariyer</Link>
						</div>{/* /.main-nav__right */}
					</div>{/* /.container-fluid */}
				</nav>{/* /.main-nav__one */}
			</header>


		)
	}
}


export default NavbarV4
