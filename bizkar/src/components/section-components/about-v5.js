import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV5 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'resim'

		return (
			<section className="about-five go-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="about-five__content">
								<div className="block-title-two text-left">
									<h3>Web Uygulamanız İçin <br /> En Temel Özellikler</h3>
								</div>{/* /.block-title-two */}
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tem <br /> or incididunt ut labore et dolore magna aliqua. </p>
								<ul className="about-five__list list-unstyled">
									<li>
										<i className="far fa-check" />
										Ama mutlaka sit amet consectetur adipisicing elit sed do eiusmod te
									</li>
									<li>
										<i className="far fa-check" />
										Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod was tempor
									</li>
									<li>
										<i className="far fa-check" />
										Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
									</li>
									<li>
										<i className="far fa-check" />
										En nihayetinde sit amet consectetur adipisicing elit sed do eiusmod yolları
									</li>
									<li>
										<i className="far fa-check" />
										Ama mutlaka sit amet consectetur adipisicing elit sed do eius diğer sistemler
									</li>
								</ul>{/* /.about-five__list list-unstyled */}
								<Link to="/service" className="thm-btn about-five__btn">Başla <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn about-five__btn */}
							</div>{/* /.about-five__content */}
						</div>{/* /.col-lg-6 */}
						<div className="col-lg-6">
							<div className="about-five__image">
								<img src={publicUrl + "assets/images/resources/about-5-1.png"} alt={imagealt} />
							</div>{/* /.about-five__image */}
						</div>{/* /.col-lg-6 */}
					</div>{/* /.row */}
				</div>{/* /.container */}
			</section>
		)
	}
}

export default AboutV5
