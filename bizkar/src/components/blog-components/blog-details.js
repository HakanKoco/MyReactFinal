import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';
import Sidebar from './sidebar';

class BlogDetails extends Component {
	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return (
			<section className="blog-list blog-details">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="blog-one__single">
								<div className="blog-one__image">
									<img src={publicUrl + "assets/images/blog/blog-s-1-1.jpg"} alt={imagealt} />
								</div>{/* /.blog-one__image */}
								<div className="blog-one__content">
									<div className="blog-one__top">
										<div className="blog-one__author">
											<img src={publicUrl + "assets/images/blog/blog-author-1-1.jpg"} alt={imagealt} />
											<p>Hakila K. Dolika</p>
										</div>{/* /.blog-one__author */}
										<div className="blog-one__social">
											<span>Şimdi Paylaş</span>
											<b><i className="far fa-share-alt" /></b>
											<a href="#"><i className="fab fa-facebook-f" /></a>
											<a href="#"><i className="fab fa-twitter" /></a>
											<a href="#"><i className="fab fa-linkedin-in" /></a>
										</div>{/* /.blog-one__social */}
									</div>{/* /.blog-one__top */}
									<h3>Adobe Experience Manager vs. WordPress: İçerik Üretim Deneyimi Karşılaştırması</h3>
									<p>Ancak biz ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut
										labore et dolore magna aliqua. Daha iyi sonuçlar elde etmek için minimum çabayla maksimum verim hedeflenir.
										Kullanıcı deneyimini iyileştirmek adına sağlanan araçlar, içerik yönetimini kolaylaştırır.
										Bu sistemler, dijital pazarlama süreçlerinde önemli rol oynar.</p>
									<br />
									<p>Adobe Experience Manager, büyük ölçekli projelerde güçlü performans sunarken; WordPress,
										kullanım kolaylığı ve geniş eklenti desteği ile dikkat çeker.
										Her iki sistemin de avantajları olduğu gibi, belirli durumlara göre dezavantajları da bulunmaktadır.
										Hangi sistemin kullanılacağı, projenin ihtiyaçlarına bağlı olarak değişir.
										Profesyonel ekipler genellikle kurumsal projelerde AEM’i tercih ederken, bireysel kullanıcılar
										ve küçük işletmeler için WordPress daha uygun bir seçenek olabilir.</p>
									<br />
									<blockquote>
										<p>Node.js'i Hızlı Tutmak: Yüksek Performanslı Node Sunucuları için Araçlar, Teknikler ve İpuçları.
											<i className="fal fa-quote-right" />
										</p>
									</blockquote>
									<br />
								</div>{/* /.blog-one__content */}
								<p className="blog-details__tags">
									<i className="far fa-tags" />
									<span>Popüler Etiket: </span>
									<a href="#">İş,</a>
									<a href="#">SEO,</a>
									<a href="#">Dijital Pazarlama</a>
								</p>{/* /.blog-details__tags */}
								<br />
							</div>{/* /.blog-one__single */}
							<div className="blog-post__nav">
								<div className="blog-post__nav-left">
									<h3><a href="#">Node ve Redis Kullanarak Yayın-Abone Servisi Oluşturmak</a></h3>
								</div>{/* /.blog-post__nav-left */}
								<div className="blog-post__nav-right">
									<h3><a href="#">Bir Zamanlar: Daha İyi Etkileşim için Hikaye Anlatımı Kullanmak</a></h3>
								</div>{/* /.blog-post__nav-right */}
							</div>{/* /.blog-post__nav */}
							<Comments />
						</div>{/* /.col-lg-8 */}
						<Sidebar />
					</div>{/* /.row */}
				</div>{/* /.container */}
			</section>
		)
	}
}

export default BlogDetails;
