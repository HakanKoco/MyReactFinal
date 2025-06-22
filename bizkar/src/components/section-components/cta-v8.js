import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CtaV8 extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <section className="cta-five go-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 d-flex">
            <div className="my-auto">
              <div className="cta-five__content">
                <h3>Bizkar'ı Çok Kolay <br /> İndirin</h3>
                <p>
                  Her türlü hata ve yanılgıdan uzak, <br /> hakiki gerçekleri ortaya koyan,
                  <br /> mucidin keşfettiği değerlerdir.
                </p>
                <div className="cta-four__btn-block">
                  <a href="#" className="cta-four__btn"><i className="fab fa-apple" />Apple Store</a>
                  <a href="#" className="cta-four__btn"><i className="fab fa-windows" />Windows</a>
                </div>{/* /.cta-four__btn-block */}
              </div>{/* /.cta-five__content */}
            </div>{/* /.my-auto */}
          </div>{/* /.col-lg-5 */}
          <div className="col-lg-7">
            <div className="cta-five__image">
              <img src={publicUrl + "assets/images/resources/cta-6-1.png"} alt={imagealt} />
            </div>{/* /.cta-five__image */}
          </div>{/* /.col-lg-7 */}
        </div>{/* /.row */}
      </div>{/* /.container */}
    </section>
  }
}

export default CtaV8
