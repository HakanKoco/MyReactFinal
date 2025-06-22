import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v2 extends Component {

	componentDidMount() {
		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/theme.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {
			$(window).scrollTop(0);
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logosu"

		return (
			<div className="site-footer-two  go-top">
				<img src={publicUrl + "assets/images/shapes/footer-shape-2-1.png"} alt={imgattr} className="site-footer-two__shape-1" />
				<img src={publicUrl + "assets/images/shapes/footer-shape-2-2.png"} alt={imgattr} className="site-footer-two__shape-2" />
				<div className="site-footer-two__upper">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__about">
									<Link to="/">
										<img src={publicUrl + "assets/images/logo-2-2.png"} alt={imgattr} />
									</Link>
									<p>Ama biz mutlaka ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
									<div className="footer-widget__social">
										<a href="https://www.facebook.com/webtend/"><i className="fab fa-facebook-f" /></a>
										<a href="https://www.twitter.com/webtend/"><i className="fab fa-twitter" /></a>
										<a href="https://google.com/webtend"><i className="fab fa-google-plus-g" /></a>
										<a href="https://behance.com/webtend"><i className="fab fa-behance" /></a>
									</div>{/* /.footer-widget__social */}
								</div>{/* /.footer-widget footer-widget__about */}
							</div>{/* /.col-lg-3 */}
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__post">
									<h3 className="footer-widget__title">Son Haberler</h3>{/* /.footer-widget__title */}
									<div className="footer-widget__post-wrap">
										<div className="footer-widget__post-single">
											<h3><Link to="/blog-details">Flexbox'ta Hizalama Hakkında Bilmeniz Gereken Her Şey</Link></h3>
											<div className="footer-widget__post-meta">
												<Link to="/blog-details">Yazan <span>Zekio Alex</span></Link>
												<Link to="/blog-details">Tarih <span>20 Aralık 2019</span></Link>
											</div>{/* /.footer-widget__post-meta */}
										</div>{/* /.footer-widget__post-single */}
										<div className="footer-widget__post-single">
											<h3><Link to="/blog-details">Üçüncü Parti Scriptler İçin Web Performansı: Smashing Cone.</Link></h3>
											<div className="footer-widget__post-meta">
												<Link to="/blog-details">Yazan <span>Zekio Alex</span></Link>
												<Link to="/blog-details">Tarih <span>20 Aralık 2019</span></Link>
											</div>{/* /.footer-widget__post-meta */}
										</div>{/* /.footer-widget__post-single */}
									</div>{/* /.footer-widget__post-wrap */}
								</div>{/* /.footer-widget footer-widget__post */}
							</div>{/* /.col-lg-3 */}
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__links">
									<h3 className="footer-widget__title">Hızlı Linkler</h3>{/* /.footer-widget__title */}
									<ul className="footer-widget__links-list list-unstyled">
										<li><Link to="/about">Hakkımızda</Link></li>
										<li><Link to="/service">Hizmetlerimiz</Link></li>
										<li><Link to="/about">Ayarlar &amp; Gizlilik</Link></li>
										<li><Link to="/contact">İşe İhtiyacınız Var mı?</Link></li>
										<li><Link to="/blog-grid">Son Blog</Link></li>
										<li><Link to="/contact">Teklif Alın</Link></li>
									</ul>{/* /.footer-widget__links-list */}
								</div>{/* /.footer-widget footer-widget__post */}
							</div>{/* /.col-lg-3 */}
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__contact">
									<h3 className="footer-widget__title">Bültenler</h3>{/* /.footer-widget__title */}
									<p>Bültenlerimize abone olun daha fazla güncelleme ve daha fazlası için</p>
									<form action="#" className="footer__mc-form">
										<input type="text" name="s" placeholder="E-posta adresinizi girin" />
										<button type="submit"><i className="fa fa-long-arrow-alt-right" /></button>
									</form>{/* /.footer__mc-form */}
									<ul className="footer-widget__contact-list list-unstyled">
										<li>
											<i className="far fa-envelope" />
											<a href="mailto:support@gmail.com">support@gmail.com</a>
										</li>
										<li>
											<i className="far fa-phone" />
											<a href="tel:+823-654-445-64">+823 654 445 64</a>
										</li>
									</ul>{/* /.footer-widget__contact-list */}
								</div>{/* /.footer-widget footer-widget__post */}
							</div>{/* /.col-lg-3 */}
						</div>{/* /.row */}
					</div>{/* /.container */}
				</div>{/* /.site-footer-two__upper */}
				<div className="site-footer-two__bottom">
					<div className="container">
						<p>Copy@2022 <a href="#">Bizkar</a>. Tüm Hakları Saklıdır.</p>
					</div>{/* /.container */}
				</div>{/* /.site-footer-two__bottom */}
			</div>
		)
	}
}

export default Footer_v2;
