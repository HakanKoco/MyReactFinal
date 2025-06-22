import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CtaV7 extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <section
      className="cta-six go-top"
      style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/home-4-bubbled-bg.png)' }}
    >
      <img
        src={publicUrl + "assets/images/resources/home-4-moc-4.png"}
        className="cta-six__moc"
        alt={imagealt}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cta-six__content">
              <div className="cta-six__icon">
                <i className="fas fa-leaf-heart" />
              </div>{/* /.cta-six__icon */}
              <h3>İş Büyümenizi <br /> Hesaplayın</h3>
              <p>
                Her türlü hata ve yanlışlıktan uzak, <br /> gerçeği ortaya koyan ve yaşamı yücelten,
                <br /> mucit tarafından keşfedilen gerçekleri ve <br /> neredeyse kutsal sayılan güzellikleri içerir.
              </p>
              <a href="#" className="thm-btn cta-six__btn">
                Başlayın <i className="fa fa-angle-double-right" />
              </a>{/* /.thm-btn cta-six__btn */}
            </div>{/* /.cta-six__content */}
          </div>{/* /.col-lg-5 */}
        </div>{/* /.row */}
      </div>{/* /.container */}
    </section>
  }
}

export default CtaV7
