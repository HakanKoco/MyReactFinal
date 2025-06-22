import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class RelatedProject extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <section className="portfolio-three portfolio-three__standard-page portfolio-three__recent-work  go-top">
      <div className="block-title-two text-center">
        <p>projemiz</p>
        <h3>İlgili Projeler</h3>
      </div>
      <div className="container-fluid">
        <div className="row gallery-content filter-layout">
          <div className="col-lg-3 col-md-6 col-sm-12 design masonary-item">
            <div className="portfolio-three__single">
              <div className="portfolio-three__image">
                <img src={publicUrl + "assets/images/portfolio/portfolio-4-1.jpg"} alt={imagealt} />
              </div>
              <div className="portfolio-three__content">
                <div className="portfolio-three__content-inner">
                  <Link to="/portfolio-full" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                  <h3><Link to="/portfolio-full">Yaratıcı Çalışma</Link></h3>
                  <p><Link to="/portfolio-full">Tasarım.</Link> <Link to="/portfolio-full">Markalaşma</Link></p>
                </div>{/* /.portfolio-three__content-inner */}
              </div>
            </div>
          </div>{/* /.col-md-4 col-sm-12 */}
          <div className="col-lg-3 col-md-6 col-sm-12 masonary-item design">
            <div className="portfolio-three__single">
              <div className="portfolio-three__image">
                <img src={publicUrl + "assets/images/portfolio/portfolio-4-2.jpg"} alt={imagealt} />
              </div>{/* /.portfolio-three__image */}
              <div className="portfolio-three__content">
                <div className="portfolio-three__content-inner">
                  <Link to="/portfolio-full" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                  <h3><Link to="/portfolio-full">Yaratıcı Çalışma</Link></h3>
                  <p><Link to="/portfolio-full">Tasarım.</Link> <Link to="/portfolio-full">Markalaşma</Link></p>
                </div>{/* /.portfolio-three__content-inner */}
              </div>
            </div>{/* /.portfolio-three__single */}
          </div>{/* /.col-md-4 col-sm-12 */}
          <div className="col-lg-3 col-md-6 col-sm-12 masonary-item minimal">
            <div className="portfolio-three__single">
              <div className="portfolio-three__image">
                <img src={publicUrl + "assets/images/portfolio/portfolio-4-3.jpg"} alt={imagealt} />
              </div>{/* /.portfolio-three__image */}
              <div className="portfolio-three__content">
                <div className="portfolio-three__content-inner">
                  <Link to="/portfolio-full" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                  <h3><Link to="/portfolio-full">Yaratıcı Çalışma</Link></h3>
                  <p><Link to="/portfolio-full">Tasarım.</Link> <Link to="/portfolio-full">Markalaşma</Link></p>
                </div>{/* /.portfolio-three__content-inner */}
              </div>
            </div>{/* /.portfolio-three__single */}
          </div>{/* /.col-md-4 col-sm-12 */}
          <div className="col-lg-3 col-md-6 col-sm-12 masonary-item branding creative">
            <div className="portfolio-three__single">
              <div className="portfolio-three__image">
                <img src={publicUrl + "assets/images/portfolio/portfolio-4-4.jpg"} alt={imagealt} />
              </div>{/* /.portfolio-three__image */}
              <div className="portfolio-three__content">
                <div className="portfolio-three__content-inner">
                  <Link to="/portfolio-full" className="portfolio-three__link"><i className="fa fa-long-arrow-alt-right" /></Link>
                  <h3><Link to="/portfolio-full">Yaratıcı Çalışma</Link></h3>
                  <p><Link to="/portfolio-full">Tasarım.</Link> <Link to="/portfolio-full">Markalaşma</Link></p>
                </div>{/* /.portfolio-three__content-inner */}
              </div>
            </div>{/* /.portfolio-three__single */}
          </div>{/* /.col-md-4 col-sm-12 */}
        </div>{/* /.row no-gutters */}
      </div>
    </section>

  }
}

export default RelatedProject;
