import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV6 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'resim'

		return (
			<section className="about-three about-three__about-page go-top">
				<div className="container">
					<div className="row">
						<div className="col-xl-6">
							<div className="about-three__content">
								<div className="block-title-two text-left">
									<p>Ne Yapıyoruz</p>
									<h3>Profesyonel İşimiz <br /> Pazarlamadır</h3>
								</div>{/* /.block-title-two */}
								<p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
									totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
								<h4>Bizimle Başlayın</h4>
								<p>Bu hatanın kaynağı, voluptatem accusantium doloremque laudantium, totam rem aperiam,
									eaque ipsa quae ab illo inventore veritatis et quasi</p>
								<Link to="/service-details" className="thm-btn about-three__btn">Daha Fazla <i className="fa fa-angle-double-right" /></Link>
								{/* /.thm-btn about-three__btn */}
							</div>{/* /.about-three__content */}
						</div>{/* /.col-lg-6 */}
						<div className="col-xl-6 d-flex justify-content-center">
							<div className="video-one__box">
								<img src={publicUrl + "assets/images/resources/video-4-1.png"} alt={imagealt} />
								<a href="https://www.youtube.com/watch?v=Rw1JBhaoHBs" className="video-popup video-one__btn"><i className="fa fa-play" /></a>
							</div>{/* /.video-one__box */}
						</div>{/* /.col-lg-6 */}
					</div>{/* /.row */}
				</div>{/* /.container */}
			</section>
		)
	}
}

export default AboutV6
