import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
	render() {
		let anchor = '#'
		let imagealt = 'image'
		let publicUrl = process.env.PUBLIC_URL + '/'

		return (
			<div className="col-lg-4  go-top">
				<div className="sidebar">
					<div className="sidebar__single sidebar__search">
						<form action="#" className="sidebar__search-form">
							<input type="text" placeholder="Anahtar Kelimelerde Ara" />
							<button type="submit"><i className="far fa-search" /></button>
						</form>
					</div>{/* /.sidebar__single */}
					<div className="sidebar__single sidebar__category">
						<h3 className="sidebar__title">Kategori
							<span />
						</h3>{/* /.sidebar__title */}
						<ul className="sidebar__category-list list-unstyled">
							<li><Link to="/blog-grid">İş Stratejisi</Link></li>
							<li><Link to="/blog-grid">Yatırım Planlaması</Link></li>
							<li><Link to="/blog-grid">Finansal Yatırım</Link></li>
							<li><Link to="/blog-grid">Bankacılık &amp; Sigorta</Link></li>
							<li><Link to="/blog-grid">Ücretsiz Danışmanlık</Link></li>
							<li><Link to="/blog-grid">Ekibimizle Tanışın</Link></li>
						</ul>{/* /.sidebar__category-list */}
					</div>{/* /.sidebar__single */}
					<div className="sidebar__single sidebar__post">
						<h3 className="sidebar__title">Son Haberler
							<span />
						</h3>{/* /.sidebar__title */}
						<div className="sidebar__post-single">
							<div className="sidebar__post-image">
								<img src={publicUrl + "assets/images/blog/blog-lp-1-1.jpg"} alt={imagealt} />
							</div>{/* /.sidebar__post-image */}
							<div className="sidebar__post-content">
								<h3><Link to="/blog-details">Web Sitenizin Güvenliğini Hızlıca Artırmanın Yolu.</Link></h3>
								<span>05 Nis 2019</span>
							</div>{/* /.sidebar__post-content */}
						</div>{/* /.sidebar__post-single */}
						<div className="sidebar__post-single">
							<div className="sidebar__post-image">
								<img src={publicUrl + "assets/images/blog/blog-lp-1-1.jpg"} alt={imagealt} />
							</div>{/* /.sidebar__post-image */}
							<div className="sidebar__post-content">
								<h3><Link to="/blog-details">Web Sitenizin Güvenliğini Hızlıca Artırmanın Yolu.</Link></h3>
								<span>05 Nis 2019</span>
							</div>{/* /.sidebar__post-content */}
						</div>{/* /.sidebar__post-single */}
						<div className="sidebar__post-single">
							<div className="sidebar__post-image">
								<img src={publicUrl + "assets/images/blog/blog-lp-1-1.jpg"} alt={imagealt} />
							</div>{/* /.sidebar__post-image */}
							<div className="sidebar__post-content">
								<h3><Link to="/blog-details">Web Sitenizin Güvenliğini Hızlıca Artırmanın Yolu.</Link></h3>
								<span>05 Nis 2019</span>
							</div>{/* /.sidebar__post-content */}
						</div>{/* /.sidebar__post-single */}
					</div>{/* /.sidebar__single sidebar__post */}
					<div className="sidebar__single sidebar__newsletter">
						<h3 className="sidebar__title">Bültenler
							<span />
						</h3>{/* /.sidebar__title */}
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor ince didunt ut
							labore dolore magne.</p>
						<form action="#" className="sidebar__newsletter-form">
							<input type="text" placeholder="E-posta adresinizi girin" />
							<button className="thm-btn sidebar__newsletter-btn" type="submit">Hemen Abone Ol <i className="fa fa-angle-double-right" /></button>
						</form>{/* /.sidebar__newsletter-form */}
					</div>{/* /.sidebar__single */}
					<div className="sidebar__single sidebar__tags">
						<h3 className="sidebar__title">Etiketler
							<span />
						</h3>{/* /.sidebar__title */}
						<div className="sidebar__tags-list">
							<Link to="/blog-grid">Temizlik</Link>
							<Link to="/blog-grid">İş</Link>
							<Link to="/blog-grid">Rezervasyon</Link>
							<Link to="/blog-grid">Araba</Link>
							<Link to="/blog-grid">Ev</Link>
							<Link to="/blog-grid">Daire</Link>
							<Link to="/blog-grid">Çamaşır</Link>
							<Link to="/blog-grid">Ajans</Link>
							<Link to="/blog-grid">Listeleme</Link>
						</div>{/* /.sidebar__tags-list */}
					</div>{/* /.sidebar__single */}
					<div className="sidebar__single sidebar__cta" style={{ backgroundImage: 'url(assets/images/blog/blog-s-cta-1.jpg)' }}>
						<h3>Birlikte <br /> Çalışalım</h3>
						<p>Bur wemust ipsum dolor sit amet <br /> consectetur adipisicing elit sed eiusmod <br /> tempor
							incididunt ut labore</p>
						<a href="#" className="thm-btn sidebar__cta-btn">Şimdi İletişime Geç <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn sidebar__cta-btn */}
					</div>
				</div>
			</div>
		)
	}
}

export default Sidebar;
