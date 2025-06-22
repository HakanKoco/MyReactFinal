import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FaqV2 extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <section className="faq-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="faq-two__content">
              <div className="block-title-two text-left">
                <p>neden bizi seçmelisiniz</p>
                <h3>Bize Katılın ve <br /> Profesyonel Hizmetimizi Alın</h3>
              </div>{/* /.block-title-two */}
              <div className="accrodion-grp" data-grp-name="faq-two-accrodion">
                <div className="accrodion ">
                  <div className="accrodion-title">
                    <h4>En İyi Danışmanlık Hizmetini Sunuyoruz</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae </p>
                    </div>{/* /.inner */}
                  </div>
                </div>
                <div className="accrodion active">
                  <div className="accrodion-title">
                    <h4>Üçüncü Parti Scriptlerde Web Performansı</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae </p>
                    </div>{/* /.inner */}
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>Biz Daha Yeni Başlıyoruz: 1.000 Üyeli Smashing Topluluğu</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae </p>
                    </div>{/* /.inner */}
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>Bir Flexbox Konteyner Oluşturduğunuzda Ne Olur?</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae </p>
                    </div>{/* /.inner */}
                  </div>
                </div>
              </div>
              <a href="#" className="thm-btn faq-two__btn">Daha Fazla Oku <i className="fa fa-angle-double-right" /></a>{/* /.thm-btn faq-two__btn */}
            </div>{/* /.faq-two__content */}
          </div>{/* /.col-lg-6 */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="faq-two__image">
              <img src={publicUrl + "assets/images/resources/faq-2-image.png"} alt={imagealt} />
            </div>{/* /.faq-two__image */}
          </div>{/* /.col-lg-6 */}
        </div>{/* /.row */}
      </div>{/* /.container */}
    </section>

  }
}

export default FaqV2
