import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV3 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'görsel'

		return (
			<section className="banner-three go-top">
				<div className="banner-three__circle-1" />
				<div className="banner-three__circle-2" />
				<img src={publicUrl + "assets/images/resources/banner-3-moc-1-1.png"} alt={imagealt} className="banner-three__moc" />
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-9">
							<div className="banner-three__content">
								<h3>Yenilik <br /> Yeni <span>Hayatınız &amp;</span> <br /> Yeni Düşünceleriniz</h3>
								<p>Biz profesyonel ve deneyimli bir dijital ajansız</p>
								<a href="#" className="thm-btn banner-three__btn">Hemen İndir <i className="fa fa-angle-double-right" /></a>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default BannerV3;
