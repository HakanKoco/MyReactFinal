import React, { Component } from 'react';

class MarkaUc extends Component {

  componentDidMount() {
    const $ = window.$;
    if ($('.thm__owl-carousel').length) {
      $('.thm__owl-carousel').each(function () {
        var Self = $(this);
        var carouselOptions = Self.data('options');
        var carouselPrevSelector = Self.data('carousel-prev-btn');
        var carouselNextSelector = Self.data('carousel-next-btn');
        var thmCarousel = Self.owlCarousel(carouselOptions);
        if (carouselPrevSelector !== undefined) {
          $(carouselPrevSelector).on('click', function () {
            thmCarousel.trigger('prev.owl.carousel');
            return false;
          });
        }
        if (carouselNextSelector !== undefined) {
          $(carouselNextSelector).on('click', function () {
            thmCarousel.trigger('next.owl.carousel');
            return false;
          });
        }
      });
    }
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let resimAlt = 'resim';

    return (
      <section className="marka-bir marka-bir__ev-iki">
        <div className="container">
          <div
            className="marka-bir__karusel owl-carousel owl-theme thm__owl-carousel"
            data-options='{"loop": true, "autoplay": true, "autoplayTimeout": 5000, "items": 6, "margin": 150, "smartSpeed": 700, "nav": false, "dots": false, "responsive": { "0": { "items": 2, "margin": 15 }, "575": { "items": 3, "margin": 30 }, "767": { "items": 3, "margin": 30 }, "991": { "items": 4, "margin": 30 }, "1199": { "items": 4, "margin": 75 }, "1200": { "items": 6 } }}'
          >
            <div className="item">
              <img src={publicUrl + "assets/images/brand/brand-2-1.png"} alt={resimAlt} />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl + "assets/images/brand/brand-2-2.png"} alt={resimAlt} />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl + "assets/images/brand/brand-2-3.png"} alt={resimAlt} />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl + "assets/images/brand/brand-2-4.png"} alt={resimAlt} />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl + "assets/images/brand/brand-2-5.png"} alt={resimAlt} />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl + "assets/images/brand/brand-2-6.png"} alt={resimAlt} />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl + "assets/images/brand/brand-2-1.png"} alt={resimAlt} />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl + "assets/images/brand/brand-2-2.png"} alt={resimAlt} />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl + "assets/images/brand/brand-2-3.png"} alt={resimAlt} />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl + "assets/images/brand/brand-2-4.png"} alt={resimAlt} />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl + "assets/images/brand/brand-2-5.png"} alt={resimAlt} />
            </div>{/* /.item */}
            <div className="item">
              <img src={publicUrl + "assets/images/brand/brand-2-6.png"} alt={resimAlt} />
            </div>{/* /.item */}
          </div>{/* /.marka-bir__karusel owl-carousel owl-theme thm__owl-carousel */}
        </div>{/* /.container */}
      </section>
    );
  }
}

export default MarkaUc;
