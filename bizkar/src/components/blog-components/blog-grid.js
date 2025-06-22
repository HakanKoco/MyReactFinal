import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogGrid extends Component {
	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'resim'

		return (
			<section className="blog-grid go-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="blog-one__single">
								<div className="blog-one__image">
									<img src={publicUrl + "assets/images/blog/blog-1-1.jpg"} alt={imagealt} />
								</div>{/* /.blog-one__image */}
								<div className="blog-one__content">
									<div className="blog-one__author">
										<img src={publicUrl + "assets/images/blog/blog-author-1-1.jpg"} alt={imagealt} />
										<p>Hakila K. Dolika</p>
									</div>{/* /.blog-one__author */}
									<h3><Link to="/blog-details">Adobe Experience Manager vs. WordPress: İçerik Üretim Deneyimi Karşılaştırması</Link></h3>
									<Link to="/blog-details" className="thm-btn blog-one__btn">Devamını Oku <i className="fa fa-angle-double-right" /></Link>
								</div>{/* /.blog-one__content */}
							</div>{/* /.blog-one__single */}
						</div>{/* /.col-lg-4 col-md-6 */}

						<div className="col-lg-4 col-md-6">
							<div className="blog-one__single">
								<div className="blog-one__image">
									<img src={publicUrl + "assets/images/blog/blog-1-2.jpg"} alt={imagealt} />
								</div>{/* /.blog-one__image */}
								<div className="blog-one__content">
									<div className="blog-one__author">
										<img src={publicUrl + "assets/images/blog/blog-author-1-1.jpg"} alt={imagealt} />
										<p>Hakila K. Dolika</p>
									</div>{/* /.blog-one__author */}
									<h3><Link to="/blog-details">API Tabanlı Formları Anlamak: Ürün Yöneticileri için Kılavuz</Link></h3>
									<Link to="/blog-details" className="thm-btn blog-one__btn">Devamını Oku <i className="fa fa-angle-double-right" /></Link>
								</div>{/* /.blog-one__content */}
							</div>{/* /.blog-one__single */}
						</div>{/* /.col-lg-4 col-md-6 */}

						<div className="col-lg-4 col-md-6">
							<div className="blog-one__single">
								<div className="blog-one__image">
									<img src={publicUrl + "assets/images/blog/blog-1-3.jpg"} alt={imagealt} />
								</div>{/* /.blog-one__image */}
								<div className="blog-one__content">
									<div className="blog-one__author">
										<img src={publicUrl + "assets/images/blog/blog-author-1-2.jpg"} alt={imagealt} />
										<p>Hakila K. Dolika</p>
									</div>{/* /.blog-one__author */}
									<h3><Link to="/blog-details">Aylık Web Geliştirme Güncellemesi: Alışkanlıkları Gözden Geçirmek ve Özel Çözümler Bulmak</Link></h3>
									<Link to="/blog-details" className="thm-btn blog-one__btn">Devamını Oku <i className="fa fa-angle-double-right" /></Link>
								</div>{/* /.blog-one__content */}
							</div>{/* /.blog-one__single */}
						</div>{/* /.col-lg-4 col-md-6 */}

						<div className="col-lg-4 col-md-6">
							<div className="blog-one__single">
								<div className="blog-one__image">
									<img src={publicUrl + "assets/images/blog/blog-1-4.jpg"} alt={imagealt} />
								</div>{/* /.blog-one__image */}
								<div className="blog-one__content">
									<div className="blog-one__author">
										<img src={publicUrl + "assets/images/blog/blog-author-1-1.jpg"} alt={imagealt} />
										<p>Hakila K. Dolika</p>
									</div>{/* /.blog-one__author */}
									<h3><Link to="/blog-details">Adobe Experience Manager vs. WordPress: İçerik Üretim Deneyimi Karşılaştırması</Link></h3>
									<Link to="/blog-details" className="thm-btn blog-one__btn">Devamını Oku <i className="fa fa-angle-double-right" /></Link>
								</div>{/* /.blog-one__content */}
							</div>{/* /.blog-one__single */}
						</div>{/* /.col-lg-4 col-md-6 */}

						<div className="col-lg-4 col-md-6">
							<div className="blog-one__single">
								<div className="blog-one__image">
									<img src={publicUrl + "assets/images/blog/blog-1-5.jpg"} alt={imagealt} />
								</div>{/* /.blog-one__image */}
								<div className="blog-one__content">
									<div className="blog-one__author">
										<img src={publicUrl + "assets/images/blog/blog-author-1-2.jpg"} alt={imagealt} />
										<p>Hakila K. Dolika</p>
									</div>{/* /.blog-one__author */}
									<h3><Link to="/blog-details">Adobe Experience Manager vs. WordPress: İçerik Üretim Deneyimi Karşılaştırması</Link></h3>
									<Link to="/blog-details" className="thm-btn blog-one__btn">Devamını Oku <i className="fa fa-angle-double-right" /></Link>
								</div>{/* /.blog-one__content */}
							</div>{/* /.blog-one__single */}
						</div>{/* /.col-lg-4 col-md-6 */}

						<div className="col-lg-4 col-md-6">
							<div className="blog-one__single">
								<div className="blog-one__image">
									<img src={publicUrl + "assets/images/blog/blog-1-6.jpg"} alt={imagealt} />
								</div>{/* /.blog-one__image */}
								<div className="blog-one__content">
									<div className="blog-one__author">
										<img src={publicUrl + "assets/images/blog/blog-author-1-1.jpg"} alt={imagealt} />
										<p>Hakila K. Dolika</p>
									</div>{/* /.blog-one__author */}
									<h3><Link to="/blog-details">Adobe Experience Manager vs. WordPress: İçerik Üretim Deneyimi Karşılaştırması</Link></h3>
									<Link to="/blog-details" className="thm-btn blog-one__btn">Devamını Oku <i className="fa fa-angle-double-right" /></Link>
								</div>{/* /.blog-one__content */}
							</div>{/* /.blog-one__single */}
						</div>{/* /.col-lg-4 col-md-6 */}

						<div className="col-lg-4 col-md-6">
							<div className="blog-one__single">
								<div className="blog-one__image">
									<img src={publicUrl + "assets/images/blog/blog-1-7.jpg"} alt={imagealt} />
								</div>{/* /.blog-one__image */}
								<div className="blog-one__content">
									<div className="blog-one__author">
										<img src={publicUrl + "assets/images/blog/blog-author-1-1.jpg"} alt={imagealt} />
										<p>Hakila K. Dolika</p>
									</div>{/* /.blog-one__author */}
									<h3><Link to="/blog-details">API Tabanlı Formları Anlamak: Ürün Yöneticileri için Kılavuz</Link></h3>
									<Link to="/blog-details" className="thm-btn blog-one__btn">Devamını Oku <i className="fa fa-angle-double-right" /></Link>
								</div>{/* /.blog-one__content */}
							</div>{/* /.blog-one__single */}
						</div>{/* /.col-lg-4 col-md-6 */}

						<div className="col-lg-4 col-md-6">
							<div className="blog-one__single">
								<div className="blog-one__image">
									<img src={publicUrl + "assets/images/blog/blog-1-8.jpg"} alt={imagealt} />
								</div>{/* /.blog-one__image */}
								<div className="blog-one__content">
									<div className="blog-one__author">
										<img src={publicUrl + "assets/images/blog/blog-author-1-1.jpg"} alt={imagealt} />
										<p>Hakila K. Dolika</p>
									</div>{/* /.blog-one__author */}
									<h3><Link to="/blog-details">API Tabanlı Formları Anlamak: Ürün Yöneticileri için Kılavuz</Link></h3>
									<Link to="/blog-details" className="thm-btn blog-one__btn">Devamını Oku <i className="fa fa-angle-double-right" /></Link>
								</div>{/* /.blog-one__content */}
							</div>{/* /.blog-one__single */}
						</div>{/* /.col-lg-4 col-md-6 */}

						<div className="col-lg-4 col-md-6">
							<div className="blog-one__single">
								<div className="blog-one__image">
									<img src={publicUrl + "assets/images/blog/blog-1-9.jpg"} alt={imagealt} />
								</div>{/* /.blog-one__image */}
								<div className="blog-one__content">
									<div className="blog-one__author">
										<img src={publicUrl + "assets/images/blog/blog-author-1-1.jpg"} alt={imagealt} />
										<p>Hakila K. Dolika</p>
									</div>{/* /.blog-one__author */}
									<h3><Link to="/blog-details">Aylık Web Geliştirme Güncellemesi: Alışkanlıkları Gözden Geçirmek ve Özel Çözümler Bulmak</Link></h3>
									<Link to="/blog-details" className="thm-btn blog-one__btn">Devamını Oku <i className="fa fa-angle-double-right" /></Link>
								</div>{/* /.blog-one__content */}
							</div>{/* /.blog-one__single */}
						</div>{/* /.col-lg-4 col-md-6 */}
					</div>{/* /.row */}
					<div className="post-pagination">
						<a href="#"><i className="fa fa-angle-left" /></a>
						<a href="#">1</a>
						<a href="#">2</a>
						<a href="#"><i className="fa fa-angle-right" /></a>
					</div>{/* /.post-pagination */}
				</div>{/* /.container */}
			</section>
		)
	}
}

export default BlogGrid;
