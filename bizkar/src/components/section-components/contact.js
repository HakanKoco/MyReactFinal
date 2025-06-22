import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Iletisim extends Component {

	render() {

		let genelUrl = process.env.PUBLIC_URL + '/'

		return (
			<section className="contact-one">
				<div className="container">
					<div className="block-title-two text-center">
						<p>Teklif Al</p>
						<h3>Bizimle İletişime <br /> Geçmekten Çekinmeyin</h3>
					</div>{/* /.block-title-two */}
					<div className="row">
						<div className="col-lg-5">
							<div className="contact-one__box" style={{ backgroundImage: 'url(' + genelUrl + 'assets/images/resources/contact-1-1.jpg)' }}>
								<div className="contact-one__box-inner">
									<h3>Herhangi <br /> Bir Sorunuz Var Mı?</h3>
									<p>Ancak biz ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
									<a href="#" className="thm-btn contact-one__box-btn">Bize Ulaşın <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn contact-one__box-btn */}
								</div>{/* /.contact-one__box-inner */}
							</div>{/* /.contact-one__box */}
						</div>{/* /.col-lg-5 */}
						<div className="col-lg-7 d-flex">
							<div className="my-auto">
								<form action="#" className="contact-one__form">
									<h3>Lütfen Bizimle İletişime Geçmek İçin Formu Doldurun</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
									<div className="row">
										<div className="col-lg-6">
											<div className="contact-one__input-group">
												<i className="contact-one__input-icon far fa-user" />
												<input type="text" name="name" placeholder="Adınız Soyadınız" />
											</div>{/* /.contact-one__input-group */}
										</div>{/* /.col-lg-6 */}
										<div className="col-lg-6">
											<div className="contact-one__input-group">
												<i className="contact-one__input-icon far fa-envelope" />
												<input type="text" required name="email" placeholder="E-posta Adresiniz" />
											</div>{/* /.contact-one__input-group */}
										</div>{/* /.col-lg-6 */}
										<div className="col-lg-6">
											<div className="contact-one__input-group">
												<select className="selectpicker">
													<option value>Konu Seçiniz</option>
													<option value="#">Fiyat Sorgusu</option>
													<option value>İş Sorgusu</option>
												</select>{/* /.selectpicker */}
											</div>{/* /.contact-one__input-group */}
										</div>{/* /.col-lg-6 */}
										<div className="col-lg-6">
											<div className="contact-one__input-group">
												<i className="contact-one__input-icon far fa-phone" />
												<input type="text" name="phone" placeholder="Telefon Numaranız" />
											</div>{/* /.contact-one__input-group */}
										</div>{/* /.col-lg-6 */}
										<div className="col-lg-12">
											<div className="contact-one__input-group">
												<i className="contact-one__input-icon far fa-pencil-alt" />
												<textarea name="message" required placeholder="Mesajınızı Yazınız" defaultValue={""} />
											</div>{/* /.contact-one__input-group */}
										</div>{/* /.col-lg-12 */}
										<div className="col-lg-12">
											<button type="submit" className="thm-btn contact-one__form-btn">Mesaj Gönder <i className="fa fa-angle-double-right" /></button>
											{/* /.thm-btn contact-one__form-btn */}
										</div>{/* /.col-lg-12 */}
									</div>{/* /.row */}
								</form>{/* /.contact-one__form */}
							</div>{/* /.my-auto */}
						</div>{/* /.col-lg-7 */}
					</div>{/* /.row */}
				</div>{/* /.container */}
			</section>
		)
	}
}

export default Iletisim;
