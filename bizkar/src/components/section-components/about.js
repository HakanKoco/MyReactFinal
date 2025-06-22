import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutPage extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'resim'

		return (
			<section className="service-two service-two__service-page service-two__about-page go-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="service-two__image">
								<img src={publicUrl + "assets/images/resources/about-page-moc-1.png"} alt={imagealt} />
							</div>{/* /.service-two__image */}
						</div>{/* /.col-lg-6 */}
						<div className="col-lg-6">
							<div className="service-two__block">
								<div className="block-title-two text-left">
									<p>hakkımızda</p>
									<h3>Çözüm Sağlayan <br /> Özel Bir Ajans</h3>
								</div>{/* /.block-title-two */}
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
								<ul className="list-unstyled video-one__list">
									<li>
										<i className="far fa-check" />
										Smashing Book 6: Web Tasarımında Yeni Ufuklar
									</li>
									<li>
										<i className="far fa-check" />
										Animasyona Giriş ve iMessage Uygulama Mağazası ile Shruggie
									</li>
									<li>
										<i className="far fa-check" />
										Mobil Sitenizi 2018 Tatil Sezonuna Hazırlayın
									</li>
									<li>
										<i className="far fa-check" />
										Dağıtık Ürün Ekiplerini Daha Verimli Hale Getirme
									</li>
								</ul>{/* /.list-unstyled video-one__list */}
								<Link to="/service" className="thm-btn">Devamını Oku <i className="fa fa-angle-double-right" /></Link>
								{/* /.thm-btn */}
							</div>{/* /.service-two__block */}
						</div>{/* /.col-lg-5 */}
					</div>{/* /.row */}
				</div>{/* /.container */}
			</section>
		)
	}
}

export default AboutPage
