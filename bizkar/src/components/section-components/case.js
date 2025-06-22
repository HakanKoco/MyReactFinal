import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VakaCalismasi extends Component {

  render() {

    let genelUrl = process.env.PUBLIC_URL + '/'
    let resimAlt = 'resim'
    let ozelSinif = this.props.customclass ? this.props.customclass : ''

    return (
      <section className={"case-one " + ozelSinif}>
        <div className="container go-top">
          <div className="case-one__top">
            <div className="block-title-two text-left">
              <p>projemiz</p>
              <h3>Son Şirket <br /> Vaka Çalışmaları</h3>
            </div>{/* /.block-title-two */}
            <div className="case-one__top-btn-block">
              <Link to="/service" className="thm-btn">Tüm Vakalara Bak <i className="fa fa-angle-double-right" /></Link>
              {/* /.thm-btn */}
            </div>{/* /.case-one__top-btn-block */}
          </div>{/* /.case-one__top */}
          <div className="row">
            <div className="col-lg-4">
              <div className="case-one__single">
                <div className="case-one__image">
                  <img src={genelUrl + "assets/images/case/case-1-1.jpg"} alt={resimAlt} />
                </div>{/* /.case-one__image */}
                <div className="case-one__content">
                  <h3><Link to="/service-details">İşinizi <br /> Nasıl Geliştirirsiniz</Link></h3>
                </div>{/* /.case-one__content */}
              </div>{/* /.case-one__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="case-one__single">
                <div className="case-one__image">
                  <img src={genelUrl + "assets/images/case/case-1-2.jpg"} alt={resimAlt} />
                </div>{/* /.case-one__image */}
                <div className="case-one__content">
                  <h3><Link to="/service-details">İşinizi <br /> Nasıl Geliştirirsiniz</Link></h3>
                </div>{/* /.case-one__content */}
              </div>{/* /.case-one__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="case-one__single">
                <div className="case-one__image">
                  <img src={genelUrl + "assets/images/case/case-1-3.jpg"} alt={resimAlt} />
                </div>{/* /.case-one__image */}
                <div className="case-one__content">
                  <h3><Link to="/service-details">İşinizi <br /> Nasıl Geliştirirsiniz</Link></h3>
                </div>{/* /.case-one__content */}
              </div>{/* /.case-one__single */}
            </div>{/* /.col-lg-4 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>
    )
  }
}

export default VakaCalismasi;
