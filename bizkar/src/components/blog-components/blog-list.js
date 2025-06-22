import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class BlogList extends Component {
	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'resim'

		return (
			<section className="blog-list go-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="blog-one__single">
								<div className="blog-one__image">
									<img src={publicUrl + "assets/images/blog/blog-s-1-1.jpg"} alt={imagealt} />
								</div>
								<div className="blog-one__content">
									<div className="blog-one__top">
										<div className="blog-one__author">
											<img src={publicUrl + "assets/images/blog/blog-author-1-1.jpg"} alt={imagealt} />
											<p>Hakila K. Dolika</p>
										</div>
										<div className="blog-one__social">
											<span>Hemen Paylaş</span>
											<b><i className="far fa-share-alt" /></b>
											<a href="#"><i className="fab fa-facebook-f" /></a>
											<a href="#"><i className="fab fa-twitter" /></a>
											<a href="#"><i className="fab fa-linkedin-in" /></a>
										</div>
									</div>
									<h3><Link to="/blog-details">Adobe Experience Manager vs. WordPress: İçerik Üretim Deneyimi Karşılaştırması</Link></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
									<Link to="/blog-details" className="thm-btn blog-one__btn">Devamını Oku <i className="fa fa-angle-double-right" /></Link>
								</div>
							</div>

							<div className="blog-one__single">
								<div className="blog-one__image">
									<img src={publicUrl + "assets/images/blog/blog-s-1-2.jpg"} alt={imagealt} />
								</div>
								<div className="blog-one__content">
									<div className="blog-one__top">
										<div className="blog-one__author">
											<img src={publicUrl + "assets/images/blog/blog-author-1-1.jpg"} alt={imagealt} />
											<p>Hakila K. Dolika</p>
										</div>
										<div className="blog-one__social">
											<span>Hemen Paylaş</span>
											<b><i className="far fa-share-alt" /></b>
											<a href="#"><i className="fab fa-facebook-f" /></a>
											<a href="#"><i className="fab fa-twitter" /></a>
											<a href="#"><i className="fab fa-linkedin-in" /></a>
										</div>
									</div>
									<h3><Link to="/blog-details">Aylık Web Geliştirme Güncellemesi: DNS Karmaşıklığı, HTTPS Üzerinden ve Anlık Bildirimler</Link></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
									<Link to="/blog-details" className="thm-btn blog-one__btn">Devamını Oku <i className="fa fa-angle-double-right" /></Link>
								</div>
							</div>

							<div className="blog-one__single blog-one__qoute-post">
								<i className="fal fa-quote-right" />
								<h3><Link to="/blog-details">Yeni Ufuklarla Web Tasarım: Araçlar, Teknikler ve Etkili Üretim Yolları</Link></h3>
							</div>

							<div className="blog-one__single">
								<div className="blog-one__image">
									<img src={publicUrl + "assets/images/blog/blog-s-1-3.jpg"} alt={imagealt} />
								</div>
								<div className="blog-one__content">
									<div className="blog-one__top">
										<div className="blog-one__author">
											<img src={publicUrl + "assets/images/blog/blog-author-1-1.jpg"} alt={imagealt} />
											<p>Hakila K. Dolika</p>
										</div>
										<div className="blog-one__social">
											<span>Hemen Paylaş</span>
											<b><i className="far fa-share-alt" /></b>
											<a href="#"><i className="fab fa-facebook-f" /></a>
											<a href="#"><i className="fab fa-twitter" /></a>
											<a href="#"><i className="fab fa-linkedin-in" /></a>
										</div>
									</div>
									<h3><Link to="/blog-details">Node.js'i Hızlı Tutmak: Yüksek Performanslı Sunucular İçin Araçlar ve Teknikler</Link></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
									<Link to="/blog-details" className="thm-btn blog-one__btn">Devamını Oku <i className="fa fa-angle-double-right" /></Link>
								</div>
							</div>

							<div className="blog-one__single">
								<div className="blog-one__image">
									<img src={publicUrl + "assets/images/blog/blog-s-1-4.jpg"} alt={imagealt} />
								</div>
								<div className="blog-one__content">
									<div className="blog-one__top">
										<div className="blog-one__author">
											<img src={publicUrl + "assets/images/blog/blog-author-1-1.jpg"} alt={imagealt} />
											<p>Hakila K. Dolika</p>
										</div>
										<div className="blog-one__social">
											<span>Hemen Paylaş</span>
											<b><i className="far fa-share-alt" /></b>
											<a href="#"><i className="fab fa-facebook-f" /></a>
											<a href="#"><i className="fab fa-twitter" /></a>
											<a href="#"><i className="fab fa-linkedin-in" /></a>
										</div>
									</div>
									<h3><Link to="/blog-details">Bir Zamanlar: Daha İyi Etkileşim İçin Hikâye Yapısını Kullanmak</Link></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
									<Link to="/blog-details" className="thm-btn blog-one__btn">Devamını Oku <i className="fa fa-angle-double-right" /></Link>
								</div>
							</div>

							<div className="post-pagination">
								<a href="#"><i className="fa fa-angle-left" /></a>
								<a href="#">1</a>
								<a href="#">2</a>
								<a href="#"><i className="fa fa-angle-right" /></a>
							</div>
						</div>
						<Sidebar />
					</div>
				</div>
			</section>
		)
	}
}

export default BlogList;
