import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PortFolioDetails extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <section className="portfolio-details">
      <div className="container">
        <h3 className="portfolio-details__title">Yaratıcı İllüstrasyon</h3>
        <br />
        <p>Hatalı bir fikir olan, zevki kötülemek ve acıyı yüceltmekle ilgili bu tüm yanlış düşünceyi size açıklamak istiyorum.
          Ve size gerçeklerin büyük kaşifi, insan mutluluğunun usta mimarı olan kişinin gerçek öğretilerini tam olarak anlatacağım.
          Kimse zevki kendisi için reddetmez, sevmez ya da kaçmaz; ama zevki rasyonel şekilde nasıl takip edeceğini bilmeyenler,
          çok acı verici sonuçlarla karşılaşırlar. Ayrıca kimse...</p>
        <br />
        <img src={publicUrl + "assets/images/portfolio/portfolio-d-1.jpg"} alt={imagealt} className="img-fluid" />
        <br />
        <br />
        <p>Ama size zevkin kötülenmesi ve acının yüceltilmesiyle ilgili bu yanlış fikrin nasıl doğduğunu açıklamak zorundayım.
          Size bu sistemin tam bir anlatımını yapacağım ve gerçek öğretilerini ortaya koyacağım.
          Kimse zevki kendisi için reddetmez, çünkü zevktir; ancak zevki rasyonel şekilde takip etmeyi bilmeyenler,
          çok acı veren sonuçlarla karşılaşır. Tekrar, hiç kimse...</p>
        <br />
        <h4>Proje Bilgileri</h4>
        <br />
        <div className="portfolio-details__box">
          <div className="portfolio-details__box-single">
            <h3>Proje Adı</h3>
            <p>Yaratıcı Tasarım</p>
          </div>{/* /.portfolio-details__box-single */}
          <div className="portfolio-details__box-single">
            <h3>Proje Tarihi</h3>
            <p>05 Temmuz 2019</p>
          </div>{/* /.portfolio-details__box-single */}
          <div className="portfolio-details__box-single">
            <h3>Müşterilerimiz</h3>
            <p>Bc Tasarım Stüdyosu</p>
          </div>{/* /.portfolio-details__box-single */}
          <div className="portfolio-details__box-single">
            <h3>Konum</h3>
            <p>850 Sokak, Chicago</p>
          </div>
          <div className="portfolio-details__box-single">
            <h3>Bitiş Tarihi</h3>
            <p>10 Temmuz 2019</p>
          </div>
        </div>
      </div>
    </section>
  }
}

export default PortFolioDetails
