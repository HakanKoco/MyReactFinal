import React, { Component } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class FunfactV4 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <section className="funfact-one funfact-one__home-two funfact-one__about-page">
			<div className="container">
				<div className="row high-gutter">
					<div className="col-lg-3 col-md-6">
						<div className="funfact-one__single">
							<div className="funfact-one__icon">
								<i className="far fa-user-alt" />
							</div>{/* /.funfact-one__icon */}
							<h3><span className="counter">2500</span>+</h3>
							<p>Proje</p>
						</div>{/* /.funfact-one__single */}
					</div>{/* /.col-lg-3 col-md-6 */}
					<div className="col-lg-3 col-md-6">
						<div className="funfact-one__single">
							<div className="funfact-one__icon">
								<i className="far fa-heart" />
							</div>{/* /.funfact-one__icon */}
							<h3><span className="counter">2960</span>+</h3>
							<p>Memnun Müşteri</p>
						</div>{/* /.funfact-one__single */}
					</div>{/* /.col-lg-3 col-md-6 */}
					<div className="col-lg-3 col-md-6">
						<div className="funfact-one__single">
							<div className="funfact-one__icon">
								<i className="far fa-cloud-download" />
							</div>{/* /.funfact-one__icon */}
							<h3><span className="counter">5620</span></h3>
							<p>Kazanılan Ödül</p>
						</div>{/* /.funfact-one__single */}
					</div>{/* /.col-lg-3 col-md-6 */}
					<div className="col-lg-3 col-md-6">
						<div className="funfact-one__single">
							<div className="funfact-one__icon">
								<i className="far fa-star" />
							</div>{/* /.funfact-one__icon */}
							<h3><span className="counter">365</span>+</h3>
							<p>Ekip Üyesi</p>
						</div>{/* /.funfact-one__single */}
					</div>{/* /.col-lg-3 col-md-6 */}
				</div>{/* /.row */}
			</div>{/* /.container */}
		</section>

	}
}

export default FunfactV4
