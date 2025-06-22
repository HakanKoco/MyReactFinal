import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV3 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return (
			<section className="service-four go-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="service-four__single">
								<i className="fal fa-atom-alt" />
								<h3><Link to="/service-details">Gelişmiş İş <br /> Çözümleri</Link></h3>
								<p>Herhangi bir hata olmadan <br /> işlerinizi kusursuz <br /> yürütmenizi sağlarız.</p>
							</div>{/* /.service-four__single */}
						</div>{/* /.col-lg-3 col-md-6 */}
						<div className="col-lg-3 col-md-6">
							<div className="service-four__single">
								<i className="fal fa-bullseye-arrow" />
								<h3><Link to="/service-details">Hedeflere Ulaş <br />
									Amaçlarla</Link></h3>
								<p>Hedeflerinizi net belirleyip <br /> başarıya ulaşmanız için <br /> destek veririz.</p>
							</div>{/* /.service-four__single */}
						</div>{/* /.col-lg-3 col-md-6 */}
						<div className="col-lg-3 col-md-6">
							<div className="service-four__single">
								<i className="fal fa-recycle" />
								<h3><Link to="/service-details">Çevrimiçi <br /> İş Akışını Arttır</Link></h3>
								<p>Online iş süreçlerinizi <br /> optimize ederek <br /> verimliliği arttırırız.</p>
							</div>{/* /.service-four__single */}
						</div>{/* /.col-lg-3 col-md-6 */}
						<div className="col-lg-3 col-md-6">
							<div className="service-four__single">
								<i className="fal fa-anchor" />
								<h3><Link to="/service-details">Yıllık <br /> Büyümeyi Arttır</Link></h3>
								<p>İşletmenizin yıllık büyümesini <br /> sürdürülebilir şekilde <br /> artırırız.</p>
							</div>{/* /.service-four__single */}
						</div>{/* /.col-lg-3 col-md-6 */}
					</div>{/* /.row */}
					<div className="service-four__box">
						<p>Size bu yanlış zevki nasıl kınadığımı ve acıyı överek nasıl doğduğunu anlatmalıyım ve size tam bir açıklama sunacağım.</p>
						<div className="service-four__btn-block">
							<Link to="/service" className="thm-btn service-four__box-btn">Başlayın <i className="fa fa-angle-double-right" /></Link>
						</div>{/* /.service-four__btn-block */}
					</div>{/* /.service-four__box */}
				</div>{/* /.container */}
			</section>
		)
	}
}

export default ServiceV3
