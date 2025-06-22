import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CtaV9 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
      <section
        className="cta-two cta-two__about-page go-top"
        style={{ backgroundImage: `url(${publicUrl}assets/images/backgrounds/cta-bg-1-1.jpg)` }}
      >
        <div className="container text-center">
          <h3>
            İş Danışmanlarımız <br />
            Her Zaman Yanınızda
          </h3>
          <Link to="/service" className="thm-btn">
            Daha Fazla Bilgi <i className="fa fa-angle-double-right" />
          </Link>
        </div>
      </section>
    );
  }
}

export default CtaV9;
