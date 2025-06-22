import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PricingV3 extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return (
      <section className="pricing-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="pricing-two__single">
                <div className="pricing-two__top">
                  <div className="pricing-two__bubble-1" />{/* /.pricing-two__bubble-1 */}
                  <div className="pricing-two__bubble-2" />{/* /.pricing-two__bubble-2 */}
                  <div className="pricing-two__bubble-3" />{/* /.pricing-two__bubble-3 */}
                  <div className="pricing-two__bubble-4" />{/* /.pricing-two__bubble-4 */}
                  <img src={publicUrl + "assets/images/shapes/pricing-shape-1-1.png"} className="pricing-two__shape" alt={imagealt} />
                  <h3>Başlangıç</h3>
                  <img src={publicUrl + "assets/images/shapes/pricing-i-2-1.png"} alt={imagealt} />
                </div>{/* /.pricing-two__top */}
                <div className="pricing-two__bottom">
                  <ul className="list-unstyled pricing-two__list">
                    <li><i className="far fa-check" />50GB Bant Genişliği</li>
                    <li><i className="far fa-check" />İş ve Finansal Analiz</li>
                    <li><i className="far fa-check" />7/24 Destek</li>
                    <li><i className="far fa-check" />Müşteri Yönetimi</li>
                    <li><i className="far fa-check" />Bir Posta Kutusu</li>
                  </ul>{/* /.list-unstyled pricing-two__list */}
                  <p><b>$</b> 24.99 <span>Aylık</span></p>
                  <div className="text-center">
                    <a href="#" className="thm-btn pricing-one__btn pricing-two__btn">Planı Seç <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                  </div>{/* /.text-center */}
                </div>{/* /.pricing-two__bottom */}
              </div>{/* /.pricing-two__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="pricing-two__single">
                <div className="pricing-two__top">
                  <div className="pricing-two__bubble-1" />{/* /.pricing-two__bubble-1 */}
                  <div className="pricing-two__bubble-2" />{/* /.pricing-two__bubble-2 */}
                  <div className="pricing-two__bubble-3" />{/* /.pricing-two__bubble-3 */}
                  <div className="pricing-two__bubble-4" />{/* /.pricing-two__bubble-4 */}
                  <img src={publicUrl + "assets/images/shapes/pricing-shape-1-1.png"} className="pricing-two__shape" alt={imagealt} />
                  <h3>Kurumsal</h3>
                  <img src={publicUrl + "assets/images/shapes/pricing-i-2-2.png"} alt={imagealt} />
                </div>{/* /.pricing-two__top */}
                <div className="pricing-two__bottom">
                  <ul className="list-unstyled pricing-two__list">
                    <li><i className="far fa-check" />50GB Bant Genişliği</li>
                    <li><i className="far fa-check" />İş ve Finansal Analiz</li>
                    <li><i className="far fa-check" />7/24 Destek</li>
                    <li><i className="far fa-check" />Müşteri Yönetimi</li>
                    <li><i className="far fa-check" />Bir Posta Kutusu</li>
                  </ul>{/* /.list-unstyled pricing-two__list */}
                  <p><b>$</b> 24.99 <span>Aylık</span></p>
                  <div className="text-center">
                    <a href="#" className="thm-btn pricing-one__btn pricing-two__btn">Planı Seç <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                  </div>{/* /.text-center */}
                </div>{/* /.pricing-two__bottom */}
              </div>{/* /.pricing-two__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="pricing-two__single">
                <div className="pricing-two__top">
                  <div className="pricing-two__bubble-1" />{/* /.pricing-two__bubble-1 */}
                  <div className="pricing-two__bubble-2" />{/* /.pricing-two__bubble-2 */}
                  <div className="pricing-two__bubble-3" />{/* /.pricing-two__bubble-3 */}
                  <div className="pricing-two__bubble-4" />{/* /.pricing-two__bubble-4 */}
                  <img src={publicUrl + "assets/images/shapes/pricing-shape-1-1.png"} className="pricing-two__shape" alt={imagealt} />
                  <h3>Premium</h3>
                  <img src={publicUrl + "assets/images/shapes/pricing-i-2-3.png"} alt={imagealt} />
                </div>{/* /.pricing-two__top */}
                <div className="pricing-two__bottom">
                  <ul className="list-unstyled pricing-two__list">
                    <li><i className="far fa-check" />50GB Bant Genişliği</li>
                    <li><i className="far fa-check" />İş ve Finansal Analiz</li>
                    <li><i className="far fa-check" />7/24 Destek</li>
                    <li><i className="far fa-check" />Müşteri Yönetimi</li>
                    <li><i className="far fa-check" />Bir Posta Kutusu</li>
                  </ul>{/* /.list-unstyled pricing-two__list */}
                  <p><b>$</b> 24.99 <span>Aylık</span></p>
                  <div className="text-center">
                    <a href="#" className="thm-btn pricing-one__btn pricing-two__btn">Planı Seç <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn pricing-one__btn */}
                  </div>{/* /.text-center */}
                </div>{/* /.pricing-two__bottom */}
              </div>{/* /.pricing-two__single */}
            </div>{/* /.col-lg-4 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>
    )
  }
}

export default PricingV3;
