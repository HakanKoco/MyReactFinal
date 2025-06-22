import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV3 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'resim'

		return (
			<section className="about-three go-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<img src={publicUrl + "assets/images/resources/cta-4-1.png"} className="about-three__moc" alt={imagealt} />
						</div>{/* /.col-lg-6 */}
						<div className="col-lg-6">
							<div className="about-three__content">
								<div className="block-title-two text-left">
									<h3>Uygulamalarınızı Bizkar ile Tanıtın</h3>
								</div>{/* /.block-title-two */}
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eius
									mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation</p>
								<h4>Bizimle Başlayın</h4>
								<p>Ancak şunu unutmamalıyız ki ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut
									labore dolore magna aliqua.</p>
								<Link to="/about" className="thm-btn about-three__btn">Daha Fazla <i className="fa fa-angle-double-right" /></Link>
							</div>{/* /.about-three__content */}
						</div>{/* /.col-lg-6 */}
					</div>{/* /.row */}
				</div>{/* /.container */}
			</section>
		)
	}
}

export default AboutV3
