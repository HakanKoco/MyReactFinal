import React, { Component } from 'react';
import parse from 'html-react-parser';

class FunfactV2 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <section className="funfact-one funfact-one__home-two">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
						<div className="funfact-one__single">
							<div className="funfact-one__icon">
								<i className="far fa-user-alt" />
							</div>
							<h3><span className="counter">2500</span>+</h3>
							<p>Proje</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
						<div className="funfact-one__single">
							<div className="funfact-one__icon">
								<i className="far fa-heart" />
							</div>
							<h3><span className="counter">2960</span>+</h3>
							<p>Memnun Müşteri</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
						<div className="funfact-one__single">
							<div className="funfact-one__icon">
								<i className="far fa-cloud-download" />
							</div>
							<h3><span className="counter">5620</span></h3>
							<p>Kazanılan Ödül</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
						<div className="funfact-one__single">
							<div className="funfact-one__icon">
								<i className="far fa-star" />
							</div>
							<h3><span className="counter">365</span>+</h3>
							<p>Ekip Üyesi</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	}
}

export default FunfactV2
