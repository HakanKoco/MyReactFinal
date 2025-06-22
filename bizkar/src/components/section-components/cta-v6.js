import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CtaV6 extends Component {

  render() {

    return <section className="cta-nine go-top">
      <div className="container-fluid">
        <div className="cta-nine__block">
          <h3>İşi Tamamlamak İçin Kullanılan 4 Adım</h3>
          <p>Her türlü hata ve yanlışlıktan uzak, gerçeği ortaya koyan ve yaşamı yücelten, <br /> mucit tarafından keşfedilen gerçekleri ve neredeyse kutsal sayılan güzellikleri içerir.</p>
        </div>{/* /.cta-nine__block */}
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="cta-nine__single">
              <div className="cta-nine__icon">
                <i className="fal fa-user-alt" />
                <h3>Hesap Oluştur</h3>
                <p>Her türlü hata ve yanlışlıktan uzak, <br /> gerçeği ortaya koyan bir süreç</p>
              </div>{/* /.cta-nine__icon */}
            </div>{/* /.cta-nine__single */}
          </div>{/* /.col-lg-3 col-md-6 */}
          <div className="col-lg-3 col-md-6">
            <div className="cta-nine__single">
              <div className="cta-nine__icon">
                <i className="fal fa-cloud-download" />
                <h3>Sass İndir</h3>
                <p>Her türlü hata ve yanlışlıktan uzak, <br /> gerçeği ortaya koyan bir süreç</p>
              </div>{/* /.cta-nine__icon */}
            </div>{/* /.cta-nine__single */}
          </div>{/* /.col-lg-3 col-md-6 */}
          <div className="col-lg-3 col-md-6">
            <div className="cta-nine__single">
              <div className="cta-nine__icon">
                <i className="fal fa-chart-line" />
                <h3>Çalışma Süreci</h3>
                <p>Her türlü hata ve yanlışlıktan uzak, <br /> gerçeği ortaya koyan bir süreç</p>
              </div>{/* /.cta-nine__icon */}
            </div>{/* /.cta-nine__single */}
          </div>{/* /.col-lg-3 col-md-6 */}
          <div className="col-lg-3 col-md-6">
            <div className="cta-nine__single">
              <div className="cta-nine__icon">
                <i className="fal fa-gift-card" />
                <h3>Hedeflerine Ulaş</h3>
                <p>Her türlü hata ve yanlışlıktan uzak, <br /> gerçeği ortaya koyan bir süreç</p>
              </div>{/* /.cta-nine__icon */}
            </div>{/* /.cta-nine__single */}
          </div>{/* /.col-lg-3 col-md-6 */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </section>

  }
}

export default CtaV6
