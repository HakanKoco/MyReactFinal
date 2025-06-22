import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CtaV5 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <section className="cta-eight text-center go-top">
			<div className="cta-eight__content">
				<h3>En Çok Fırsat Sunan Özellikler <br /> Bu SaaS Landing Sayfasında</h3>
				<p>
					Her türlü hata ve yanlışlıktan uzak, gerçeği ortaya koyan ve yaşamı yücelten, <br />
					mucit tarafından keşfedilen gerçekleri ve neredeyse kutsal sayılan güzellikleri içermektedir.
				</p>
			</div>{/* /.cta-eight__content */}
			<img src={publicUrl + "assets/images/resources/home-4-moc-3.png"} alt={imagealt} className="img-fluid" />
		</section>
	}
}

export default CtaV5
