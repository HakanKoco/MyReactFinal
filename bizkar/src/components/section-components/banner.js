import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'resim'

		return (
			<section className="banner-one go-top" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/banner-bg-1-1.png)' }}>
				<img src={publicUrl + "assets/images/resim1.jpg"} alt={imagealt} className="banner-one__moc" />

				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-6">
							<div className="banner-one__content">
								<h3><span>Yeni Fikirleri </span> <br /> Keşfedin ve <br /> <em>İşinizi</em> Kurun</h3>
								<p>Biz profesyonel ve deneyimli bir dijital ajansız</p>
								<Link to="/service" className="thm-btn banner-one__btn">Hemen Keşfet <i className="fa fa-angle-double-right" /></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Banner;
