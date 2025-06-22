import React, { Component } from 'react';

class MarkaBir extends Component {
  componentDidMount() {
    const $ = window.$;
    if ($('.thm__owl-carousel').length) {
      $('.thm__owl-carousel').each(function () {
        const Kendisi = $(this);
        const carouselAyarları = Kendisi.data('options');
        const carouselOncekiButon = Kendisi.data('carousel-prev-btn');
        const carouselSonrakiButon = Kendisi.data('carousel-next-btn');
        const thmCarousel = Kendisi.owlCarousel(carouselAyarları);

        if (carouselOncekiButon !== undefined) {
          $(carouselOncekiButon).on('click', () => {
            thmCarousel.trigger('prev.owl.carousel');
            return false;
          });
        }
        if (carouselSonrakiButon !== undefined) {
          $(carouselSonrakiButon).on('click', () => {
            thmCarousel.trigger('next.owl.carousel');
            return false;
          });
        }
      });
    }
  }

  render() {
    const publicUrl = process.env.PUBLIC_URL + '/';
    const resimAlt = 'marka logosu';

    const markaResimleri = [
      "brand-1-1.png",
      "brand-1-2.png",
      "brand-1-3.png",
      "brand-1-4.png",
      "brand-1-5.png",
      "brand-1-6.png",
    ];

    const gösterilecekLogolar = [...markaResimleri, ...markaResimleri];

    return (
      <section className="marka-bir">
        <div className="container">
          <div
            className="marka-bir__karusel owl-carousel owl-theme thm__owl-carousel"
            data-options='{"loop": true, "autoplay": true, "autoplayTimeout": 5000, "items": 6, "margin": 150, "smartSpeed": 700, "nav": false, "dots": false, "responsive": { "0": { "items": 2, "margin": 15 }, "575": { "items": 3, "margin": 30 }, "767": { "items": 3, "margin": 30 }, "991": { "items": 4, "margin": 30 }, "1199": { "items": 4, "margin": 75 }, "1200": { "items": 6 } }}'
          >
            {gösterilecekLogolar.map((logo, idx) => (
              <div className="item" key={idx}>
                <img src={`${publicUrl}assets/images/brand/${logo}`} alt={resimAlt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default MarkaBir;
