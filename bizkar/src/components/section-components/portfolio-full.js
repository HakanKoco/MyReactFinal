import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PortFolioFull extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <section className="portfolio-three  go-top">
      <div className="container-fluid">
        <div className="block-title-two text-center">
          <p>son çalışmalar</p>
          <h3>En Yeni <br /> Çalışmalarımızı İnceleyin</h3>
        </div>{/* /.block-title-two */}
        <div className="row no-gutters ">
          <div className="col-md-4 col-sm-12">
            <div className="portfolio-three__single">
              <div className="portfolio-three__image">
                <img src={publicUrl + "assets/images/portfolio/portfolio-3-1.jpg"} alt={imagealt} />
              </div>{/* /.portfolio-three__image */}
              <div className="portfolio-three__content">
                <div className="portfolio-three__content-inner">
                  <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                  <h3><Link to="/portfolio-details">Yaratıcı Çalışma</Link></h3>
                  <p><Link to="/portfolio-details">Tasarım.</Link><Link to="/portfolio-details">Marka</Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="portfolio-three__single">
              <div className="portfolio-three__image">
                <img src={publicUrl + "assets/images/portfolio/portfolio-3-2.jpg"} alt={imagealt} />
              </div>
              <div className="portfolio-three__content">
                <div className="portfolio-three__content-inner">
                  <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                  <h3><Link to="/portfolio-details">Yaratıcı Çalışma</Link></h3>
                  <p><Link to="/portfolio-details">Tasarım.</Link><Link to="/portfolio-details">Marka</Link></p>
                </div>
              </div>
            </div>{/* /.portfolio-three__single */}
          </div>{/* /.col-md-4 col-sm-12 */}
          <div className="col-md-4 col-sm-12">
            <div className="portfolio-three__single">
              <div className="portfolio-three__image">
                <img src={publicUrl + "assets/images/portfolio/portfolio-3-3.jpg"} alt={imagealt} />
              </div>
              <div className="portfolio-three__content">
                <div className="portfolio-three__content-inner">
                  <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                  <h3><Link to="/portfolio-details">Yaratıcı Çalışma</Link></h3>
                  <p><Link to="/portfolio-details">Tasarım.</Link><Link to="/portfolio-details">Marka</Link></p>
                </div>
              </div>
            </div>{/* /.portfolio-three__single */}
          </div>{/* /.col-md-4 col-sm-12 */}
          <div className="col-md-6 col-sm-12">
            <div className="portfolio-three__single">
              <div className="portfolio-three__image">
                <img src={publicUrl + "assets/images/portfolio/portfolio-3-4.jpg"} alt={imagealt} />
              </div>
              <div className="portfolio-three__content">
                <div className="portfolio-three__content-inner">
                  <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                  <h3><Link to="/portfolio-details">Yaratıcı Çalışma</Link></h3>
                  <p><Link to="/portfolio-details">Tasarım.</Link><Link to="/portfolio-details">Marka</Link></p>
                </div>
              </div>
            </div>{/* /.portfolio-three__single */}
          </div>{/* /.col-md-4 col-sm-12 */}
          <div className="col-md-6 col-sm-12">
            <div className="portfolio-three__single">
              <div className="portfolio-three__image">
                <img src={publicUrl + "assets/images/portfolio/portfolio-3-5.jpg"} alt={imagealt} />
              </div>
              <div className="portfolio-three__content">
                <div className="portfolio-three__content-inner">
                  <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                  <h3><Link to="/portfolio-details">Yaratıcı Çalışma</Link></h3>
                  <p><Link to="/portfolio-details">Tasarım.</Link><Link to="/portfolio-details">Marka</Link></p>
                </div>
              </div>
            </div>{/* /.portfolio-three__single */}
          </div>{/* /.col-md-4 col-sm-12 */}
          <div className="col-md-4 col-sm-12">
            <div className="portfolio-three__single">
              <div className="portfolio-three__image">
                <img src={publicUrl + "assets/images/portfolio/portfolio-3-6.jpg"} alt={imagealt} />
              </div>
              <div className="portfolio-three__content">
                <div className="portfolio-three__content-inner">
                  <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                  <h3><Link to="/portfolio-details">Yaratıcı Çalışma</Link></h3>
                  <p><Link to="/portfolio-details">Tasarım.</Link><Link to="/portfolio-details">Marka</Link></p>
                </div>
              </div>
            </div>{/* /.portfolio-three__single */}
          </div>{/* /.col-md-4 col-sm-12 */}
          <div className="col-md-4 col-sm-12">
            <div className="portfolio-three__single">
              <div className="portfolio-three__image">
                <img src={publicUrl + "assets/images/portfolio/portfolio-3-7.jpg"} alt={imagealt} />
              </div>
              <div className="portfolio-three__content">
                <div className="portfolio-three__content-inner">
                  <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                  <h3><Link to="/portfolio-details">Yaratıcı Çalışma</Link></h3>
                  <p><Link to="/portfolio-details">Tasarım.</Link><Link to="/portfolio-details">Marka</Link></p>
                </div>
              </div>
            </div>{/* /.portfolio-three__single */}
          </div>{/* /.col-md-4 col-sm-12 */}
          <div className="col-md-4 col-sm-12">
            <div className="portfolio-three__single">
              <div className="portfolio-three__image">
                <img src={publicUrl + "assets/images/portfolio/portfolio-3-8.jpg"} alt={imagealt} />
              </div>
              <div className="portfolio-three__content">
                <div className="portfolio-three__content-inner">
                  <Link to="/portfolio-details" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                  <h3><Link to="/portfolio-details">Yaratıcı Çalışma</Link></h3>
                  <p><Link to="/portfolio-details">Tasarım.</Link><Link to="/portfolio-details">Marka</Link></p>
                </div>
              </div>
            </div>{/* /.portfolio-three__single */}
          </div>{/* /.col-md-4 col-sm-12 */}
        </div>{/* /.row no-gutters */}
      </div>
    </section>
  }
}

export default PortFolioFull
