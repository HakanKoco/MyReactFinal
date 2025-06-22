import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BlogPostv2 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'görsel'

		return (
			<section className="blog-two blog-two__home-three go-top">
				<div className="container">
					<div className="blog-two_top">
						<div className="block-title-two text-left">
							<h3>En Son Blog &amp; Haberleri <br /> Okuyalım</h3>
						</div>{/* /.block-title-two text-left */}
						<div className="blog-two__top-btn-block">
							<Link to="/blog-grid" className="thm-btn blog-two__top-btn">
								Daha Fazla Gör <i className="fa fa-angle-double-right" />
							</Link>{/* /.thm-btn blog-two__top-btn */}
						</div>{/* /.blog-two__top-btn-block */}
					</div>{/* /.blog-two_top */}
					<div className="row">
						<div className="col-lg-4">
							<div className="blog-two__single">
								<div className="blog-two__image">
									<img src={publicUrl + "assets/images/blog/blog-3-1.jpg"} alt={imagealt} />
								</div>{/* /.blog-two__image */}
								<div className="blog-two__content">
									<ul className="list-unstyled blog-two__meta">
										<li><Link to="/blog-details"><i className="far fa-user" /> Yönetici</Link></li>
										<li><Link to="/blog-details"><i className="far fa-comment-alt" /> Yorumlar (03)</Link></li>
									</ul>{/* /.list-unstyled blog-two__meta */}
									<h3>
										<Link to="/blog-details">
											UX ve HTML5 Mobil Formlarınızı Kullanıcılar İçin Kolaylaştırıyor
										</Link>
									</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore </p>
									<Link to="/blog-details" className="thm-btn blog-two__btn">
										Devamını Oku <i className="fa fa-angle-double-right" />
									</Link>{/* /.thm-btn */}
								</div>{/* /.blog-two__content */}
							</div>{/* /.blog-two__single */}
						</div>{/* /.col-lg-4 */}
						<div className="col-lg-4">
							<div className="blog-two__single">
								<div className="blog-two__image">
									<img src={publicUrl + "assets/images/blog/blog-3-2.jpg"} alt={imagealt} />
								</div>{/* /.blog-two__image */}
								<div className="blog-two__content">
									<ul className="list-unstyled blog-two__meta">
										<li><Link to="/blog-details"><i className="far fa-user" /> Yönetici</Link></li>
										<li><Link to="/blog-details"><i className="far fa-comment-alt" /> Yorumlar (03)</Link></li>
									</ul>{/* /.list-unstyled blog-two__meta */}
									<h3>
										<Link to="/blog-details">
											UX ve HTML5 Mobil Formlarınızı Kullanıcılar İçin Kolaylaştırıyor
										</Link>
									</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore </p>
									<Link to="/blog-details" className="thm-btn blog-two__btn">
										Devamını Oku <i className="fa fa-angle-double-right" />
									</Link>{/* /.thm-btn */}
								</div>{/* /.blog-two__content */}
							</div>{/* /.blog-two__single */}
						</div>{/* /.col-lg-4 */}
						<div className="col-lg-4">
							<div className="blog-two__single">
								<div className="blog-two__image">
									<img src={publicUrl + "assets/images/blog/blog-3-3.jpg"} alt={imagealt} />
								</div>{/* /.blog-two__image */}
								<div className="blog-two__content">
									<ul className="list-unstyled blog-two__meta">
										<li><Link to="/blog-details"><i className="far fa-user" /> Yönetici</Link></li>
										<li><Link to="/blog-details"><i className="far fa-comment-alt" /> Yorumlar (03)</Link></li>
									</ul>{/* /.list-unstyled blog-two__meta */}
									<h3>
										<Link to="/blog-details">
											UX ve HTML5 Mobil Formlarınızı Kullanıcılar İçin Kolaylaştırıyor
										</Link>
									</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore </p>
									<Link to="/blog-details" className="thm-btn blog-two__btn">
										Devamını Oku <i className="fa fa-angle-double-right" />
									</Link>{/* /.thm-btn */}
								</div>{/* /.blog-two__content */}
							</div>{/* /.blog-two__single */}
						</div>{/* /.col-lg-4 */}
					</div>{/* /.row */}
				</div>{/* /.container */}
			</section>
		)
	}
}

export default BlogPostv2;
