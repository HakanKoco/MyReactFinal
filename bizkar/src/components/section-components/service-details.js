import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceDetails extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return (
			<section className="service-details">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 clearfix">
							<img src={publicUrl + "assets/images/resources/service-d-moc-1.png"} alt={imagealt} className="float-right wow fadeInLeft" data-wow-duration="1500ms" />
						</div>{/* /.col-lg-6 */}
						<div className="col-lg-6">
							<div className="service-details__content">
								<h3>Yazılım İşinizi <br /> Yapar Ama Her Zaman <br /> Doğru Çözüm Sizde</h3>
								<p>Bir hata oluşmadan her şeyi anlamak zordur, bu yüzden gerçekler ve değerler üzerine düşünmek gerekir. Biz, doğru çözümleri sunan güvenilir bir ekibiz.</p>
								<p>Gerçekler ve değerler üzerinde düşünmek, işiniz için en iyisini sunmamızı sağlar.</p>
								<Link to="/service" className="service-details__link">Devamını Oku</Link>{/* /.service-details__link */}
							</div>{/* /.service-details__content */}
						</div>{/* /.col-lg-6 */}
					</div>{/* /.row */}
					<div className="row">
						<div className="col-lg-6">
							<img src={publicUrl + "assets/images/resources/service-d-moc-2.png"} alt={imagealt} className="wow fadeInRight" data-wow-duration="1500ms" />
						</div>{/* /.col-lg-6 */}
						<div className="col-lg-6">
							<div className="service-details__content">
								<h3>İşinizin <br /> Büyümesine Yardımcı Oluyoruz</h3>
								<ul className="list-unstyled service-details__list">
									<li>
										Her şeyin nasıl yanlış anlaşıldığını ve bu süreçte nasıl geliştiğimizi size anlatacağız.
									</li>
									<li>
										Size eksiksiz bir bilgi verecek ve gerçeğin büyük kaşifinin öğretilerini açıklayacağız.
									</li>
									<li>
										Zor durumlarda dahi, sizin için en iyi çözümleri sunmak adına çalışıyoruz.
									</li>
								</ul>{/* /.list-unstyled service-details__list */}
								<Link to="/service" className="service-details__link">Devamını Oku</Link>{/* /.service-details__link */}
							</div>{/* /.service-details__content */}
						</div>{/* /.col-lg-6 */}
					</div>{/* /.row */}
				</div>{/* /.container */}
			</section>
		)
	}
}

export default ServiceDetails

