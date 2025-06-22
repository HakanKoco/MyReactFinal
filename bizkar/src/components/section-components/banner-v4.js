import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV4 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'görsel'

		return (
			<section className="banner-four go-top">
				<img src={publicUrl + "assets/images/resources/banner-4-1.png"} className="banner-four__moc" alt={imagealt} />
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12">
							<div className="banner-four__content">
								<h4>Görevinde Başarılı <span>Yeni</span></h4>
								<h3>Yenilik <br />
									<span>Sass ile Hayat</span>
								</h3>
								<p>Biz profesyonel ve deneyimli bir dijital ajansız</p>
								<Link to="/service" className="thm-btn banner-four__btn">Hemen İndir <i className="fa fa-angle-double-right" /></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default BannerV4;
