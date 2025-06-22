import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PricingV4 extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return (
      <section className="pricing-one pricing-one__pricing-page">
        <div className="container">
          <div className="pricing-one__block">
            <div className="block-title-two text-left">
              <p>Teklif Alın</p>
              <h3>Bize Ulaşmaktan Çekinmeyin <br /> Size Geri Dönelim</h3>
            </div>{/* /.block-title-two */}
            <div className="pricing-one__btn-block">
              <ul className="list-unstyled nav nav-tabs">
                <li className="nav-item">
                  <a href="#monthly" className="nav-link active" data-toggle="tab">Aylık</a>
                </li>{/* /.nav-item */}
                <li className="nav-item">
                  <a href="#yearly" className="nav-link" data-toggle="tab">Yıllık</a>
                </li>{/* /.nav-item */}
              </ul>{/* /.list-unstyled nav nav-tabs */}
            </div>{/* /.pricing-one__btn-block */}
          </div>{/* /.pricing-one__block */}
          <div className="tab-content">
            <div className="tab-pane show active animated fadeInUp" id="monthly">
              <div className="row">
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl + "assets/images/shapes/pricing-i-1-1.png"} alt={imagealt} />
                      <div className="pricing-one__top">
                        <h3>Başlangıç</h3>
                        <p><span>$</span>24.99</p>
                      </div>{/* /.pricing-one__top */}
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />50GB Bant Genişliği</li>
                        <li><i className="far fa-check" />İş ve Finansal Analiz</li>
                        <li><i className="far fa-check" />7/24 Destek</li>
                        <li><i className="far fa-check" />Müşteri Yönetimi</li>
                      </ul>{/* /.pricing-one__list list-unstyled */}
                      <a href="#" className="thm-btn pricing-one__btn">Planı Seç <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <span className="pricing-one__corner-ribbon">En İyi</span>
                      {/* /.pricing-one__corner-ribbon */}
                      <img src={publicUrl + "assets/images/shapes/pricing-i-1-2.png"} alt={imagealt} />
                      <div className="pricing-one__top">
                        <h3>Standart</h3>
                        <p><span>$</span>45.99</p>
                      </div>{/* /.pricing-one__top */}
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />50GB Bant Genişliği</li>
                        <li><i className="far fa-check" />İş ve Finansal Analiz</li>
                        <li><i className="far fa-check" />7/24 Destek</li>
                        <li><i className="far fa-check" />Müşteri Yönetimi</li>
                      </ul>{/* /.pricing-one__list list-unstyled */}
                      <a href="#" className="thm-btn pricing-one__btn">Planı Seç <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl + "assets/images/shapes/pricing-i-1-3.png"} alt="pricing" />
                      <div className="pricing-one__top">
                        <h3>Premium</h3>
                        <p><span>$</span>89.99</p>
                      </div>{/* /.pricing-one__top */}
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />50GB Bant Genişliği</li>
                        <li><i className="far fa-check" />İş ve Finansal Analiz</li>
                        <li><i className="far fa-check" />7/24 Destek</li>
                        <li><i className="far fa-check" />Müşteri Yönetimi</li>
                      </ul>{/* /.pricing-one__list list-unstyled */}
                      <a href="#" className="thm-btn pricing-one__btn">Planı Seç <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
              </div>{/* /.row */}
            </div>{/* /.tab-pane fade in active */}
            <div className="tab-pane animated fadeInUp" id="yearly">
              <div className="row">
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl + "assets/images/shapes/pricing-i-1-1.png"} alt={imagealt} />
                      <div className="pricing-one__top">
                        <h3>Başlangıç</h3>
                        <p><span>$</span>69.99</p>
                      </div>{/* /.pricing-one__top */}
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />50GB Bant Genişliği</li>
                        <li><i className="far fa-check" />İş ve Finansal Analiz</li>
                        <li><i className="far fa-check" />7/24 Destek</li>
                        <li><i className="far fa-check" />Müşteri Yönetimi</li>
                      </ul>{/* /.pricing-one__list list-unstyled */}
                      <a href="#" className="thm-btn pricing-one__btn">Planı Seç <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <span className="pricing-one__corner-ribbon">En İyi</span>
                      {/* /.pricing-one__corner-ribbon */}
                      <img src={publicUrl + "assets/images/shapes/pricing-i-1-2.png"} alt={imagealt} />
                      <div className="pricing-one__top">
                        <h3>Standart</h3>
                        <p><span>$</span>79.99</p>
                      </div>{/* /.pricing-one__top */}
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />50GB Bant Genişliği</li>
                        <li><i className="far fa-check" />İş ve Finansal Analiz</li>
                        <li><i className="far fa-check" />7/24 Destek</li>
                        <li><i className="far fa-check" />Müşteri Yönetimi</li>
                      </ul>{/* /.pricing-one__list list-unstyled */}
                      <a href="#" className="thm-btn pricing-one__btn">Planı Seç <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl + "assets/images/shapes/pricing-i-1-3.png"} alt={imagealt} />
                      <div className="pricing-one__top">
                        <h3>Premium</h3>
                        <p><span>$</span>99.99</p>
                      </div>{/* /.pricing-one__top */}
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />50GB Bant Genişliği</li>
                        <li><i className="far fa-check" />İş ve Finansal Analiz</li>
                        <li><i className="far fa-check" />7/24 Destek</li>
                        <li><i className="far fa-check" />Müşteri Yönetimi</li>
                      </ul>{/* /.pricing-one__list list-unstyled */}
                      <a href="#" className="thm-btn pricing-one__btn">Planı Seç <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
              </div>{/* /.row */}
            </div>{/* /.tab-pane fade in active */}
          </div>{/* /.tab-content */}
        </div>{/* /.container */}
      </section>
    )
  }
}

export default PricingV4;
