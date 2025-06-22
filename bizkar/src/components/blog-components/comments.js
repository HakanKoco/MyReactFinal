import React, { Component } from 'react';

class Comments extends Component {
  render() {
    let anchor = '#'
    let imagealt = 'resim'
    let publicUrl = process.env.PUBLIC_URL + '/'
    return (
      <div>
        <div className="comment-one">
          <h3 className="comment-one__title">
            Müşteri Yorumları
            <span />
          </h3>{/* /.comment-one__title */}
          <div className="comment-one__single">
            <div className="comment-one__image">
              <img src={publicUrl + "assets/images/blog/comment-1-1.jpg"} alt={imagealt} />
            </div>{/* /.comment-one__image */}
            <div className="comment-one__content">
              <div className="comment-one__top">
                <h3>Alexzeder Alex</h3>
                <span>25 Temmuz 2019</span>
              </div>{/* /.comment-one__top */}
              <p>Ancak size tüm bu zevki kötüleme ve acıyı övme fikrinin nasıl ortaya çıktığını açıklamalıyım ve size tam bir açıklama vereceğim</p>
              <a href="#" className="comment-one__link">Yorumu Yanıtla</a>{/* /.comment-one__link */}
            </div>{/* /.comment-one__content */}
          </div>{/* /.comment-one__single */}
          <div className="comment-one__single comment-one__single-second-level">
            <div className="comment-one__image">
              <img src={publicUrl + "assets/images/blog/comment-1-2.jpg"} alt={imagealt} />
            </div>{/* /.comment-one__image */}
            <div className="comment-one__content">
              <div className="comment-one__top">
                <h3>Alexzeder Alex</h3>
                <span>25 Temmuz 2019</span>
              </div>{/* /.comment-one__top */}
              <p>Ancak size tüm bu zevki kötüleme ve acıyı övme fikrinin nasıl ortaya çıktığını açıklamalıyım ve size tam bir açıklama vereceğim</p>
              <a href="#" className="comment-one__link">Yorumu Yanıtla</a>{/* /.comment-one__link */}
            </div>{/* /.comment-one__content */}
          </div>{/* /.comment-one__single */}
          <div className="comment-one__single">
            <div className="comment-one__image">
              <img src={publicUrl + "assets/images/blog/comment-1-3.jpg"} alt={imagealt} />
            </div>{/* /.comment-one__image */}
            <div className="comment-one__content">
              <div className="comment-one__top">
                <h3>Alexzeder Alex</h3>
                <span>25 Temmuz 2019</span>
              </div>{/* /.comment-one__top */}
              <p>Ancak size tüm bu zevki kötüleme ve acıyı övme fikrinin nasıl ortaya çıktığını açıklamalıyım ve size tam bir açıklama vereceğim</p>
              <a href="#" className="comment-one__link">Yorumu Yanıtla</a>{/* /.comment-one__link */}
            </div>{/* /.comment-one__content */}
          </div>{/* /.comment-one__single */}
        </div>{/* /.comment-one */}
        <div className="comment-form">
          <h3 className="comment-one__title">
            Yorum Bırakın
            <span />
          </h3>{/* /.comment-one__title */}
          <form action="#" className="contact-one__form">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-one__input-group">
                  <i className="contact-one__input-icon far fa-user" />
                  <input type="text" placeholder="Adınız Soyadınız" />
                </div>{/* /.contact-one__input-group */}
              </div>{/* /.col-lg-6 */}
              <div className="col-lg-6">
                <div className="contact-one__input-group">
                  <i className="contact-one__input-icon far fa-envelope" />
                  <input type="text" placeholder="E-posta Adresiniz" />
                </div>{/* /.contact-one__input-group */}
              </div>{/* /.col-lg-6 */}
              <div className="col-lg-12">
                <div className="contact-one__input-group">
                  <i className="contact-one__input-icon far fa-pencil-alt" />
                  <textarea placeholder="Mesajınızı Yazın" defaultValue={""} />
                </div>{/* /.contact-one__input-group */}
              </div>{/* /.col-lg-12 */}
              <div className="col-lg-12">
                <button type="submit" className="thm-btn contact-one__form-btn">Mesaj Gönder <i className="fa fa-angle-double-right" /></button>
                {/* /.thm-btn contact-one__form-btn */}
              </div>{/* /.col-lg-12 */}
            </div>{/* /.row */}
          </form>{/* /.contact-one__form */}
        </div>{/* /.comment-form */}
      </div>
    )
  }
}

export default Comments;
