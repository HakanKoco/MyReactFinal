import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV2 extends Component {
  componentDidMount() {
    let publicUrl = process.env.PUBLIC_URL + '/'
    const cssUrl = publicUrl + "assets/css/color-2.css";
    this.addStyle(cssUrl);

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

  addStyle = url => {
    const style = document.createElement("link");
    style.href = url;
    style.rel = "stylesheet";
    style.async = true;

    document.head.appendChild(style);
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'görsel'

    return (
      <section className="banner-two go-top">
        <img src={publicUrl + "assets/images/shapes/banner-shape-1-1.png"} alt="Banner" className="banner-two__moc" />
        <div className="banner-two__image-carousel owl-carousel owl-theme thm__owl-carousel" data-options="{&quot;loop&quot;: true, &quot;items&quot;: 1, &quot;margin&quot;: 0, &quot;dots&quot;: false, &quot;nav&quot;: false, &quot;animateOut&quot;: &quot;slideOutDown&quot;, &quot;animateIn&quot;: &quot;fadeIn&quot;, &quot;active&quot;: true, &quot;smartSpeed&quot;: 1000, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000, &quot;autoplayHoverPause&quot;: false}">
          <div className="item">
            <img src={publicUrl + "assets/images/resources/banner-2-1.jpg"} alt="Banner" />
          </div>
          <div className="item">
            <img src={publicUrl + "assets/images/resources/banner-2-2.jpg"} alt="Banner" />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="banner-two__content">
                <h3><span>Yeni Fikirleri </span><br /> Keşfedin ve <br /> <em>İşinizi</em> Kurun</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna</p>
                <Link to="/about" className="thm-btn banner-two__btn">Hemen Keşfet <i className="fa fa-angle-double-right" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default BannerV2;
