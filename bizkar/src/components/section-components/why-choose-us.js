import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class WhyChooseUs extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return (
      <section className="service-one go-top">
        <div className="container">
          <div className="block-title text-center">
            <p><span>Neden Bizi Seçmelisiniz</span></p>
            <h3>Başarılı İşler İçin <br />
              Kurumsal Ajansınız</h3>
            <div className="block-title__line" />{/* /.block-title__line */}
          </div>{/* /.block-title */}
          <div className="row high-gutter go-top">
            <div className="col-lg-4">
              <div className="service-one__single">
                <div className="service-one__top">
                  <div className="service-one__icon">
                    <img src={publicUrl + "assets/images/shapes/service-i-1.png"} alt={imagealt} />
                  </div>{/* /.service-one__icon */}
                  <div className="service-one__top-content">
                    <h3><Link to="/service-details">İş Stratejisi ve Pazar Araştırması</Link></h3>
                    <p>İşinizi Geliştirin</p>
                  </div>{/* /.service-one__top-content */}
                </div>{/* /.service-one__top */}
                <p>İşinizi geliştirmeniz için kapsamlı stratejiler ve pazar analizleri sunuyoruz. Başarı için doğru adımları birlikte atıyoruz.</p>
              </div>{/* /.service-one__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="service-one__single">
                <div className="service-one__top">
                  <div className="service-one__icon">
                    <img src={publicUrl + "assets/images/shapes/service-i-2.png"} alt={imagealt} />
                  </div>{/* /.service-one__icon */}
                  <div className="service-one__top-content">
                    <h3><Link to="/service-details">SEO, PPC ve Sosyal Medya Çözümleri</Link></h3>
                    <p>SEO Optimizasyonu</p>
                  </div>{/* /.service-one__top-content */}
                </div>{/* /.service-one__top */}
                <p>Arama motorlarında görünürlüğünüzü artırmak için etkili SEO, PPC kampanyaları ve sosyal medya çözümleri sunuyoruz.</p>
              </div>{/* /.service-one__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="service-one__single">
                <div className="service-one__top">
                  <div className="service-one__icon">
                    <img src={publicUrl + "assets/images/shapes/service-i-3.png"} alt={imagealt} />
                  </div>{/* /.service-one__icon */}
                  <div className="service-one__top-content">
                    <h3><Link to="/service-details">Web Tasarım ve Geliştirme</Link></h3>
                    <p>Web Çözümleri</p>
                  </div>{/* /.service-one__top-content */}
                </div>{/* /.service-one__top */}
                <p>Modern ve kullanıcı dostu web siteleri tasarlayıp geliştirerek, dijital dünyada güçlü bir varlık oluşturmanıza yardımcı oluyoruz.</p>
              </div>{/* /.service-one__single */}
            </div>{/* /.col-lg-4 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>
    )
  }
}

export default WhyChooseUs;
