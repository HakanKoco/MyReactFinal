import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FaqV3 extends Component {

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <section className="faq-one faq-one__faq-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="faq-one__block">
              <div className="block-title-two text-left">
                <h3>Şirketimiz Hakkında</h3>
                <span>Hakkımızda Bilgi Edinin. Biz Profesyoneliz</span>
              </div>
              <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                <div className="accrodion ">
                  <div className="accrodion-title">
                    <h4>Aylık Web Geliştirme Güncellemesi Tam Zamanında mı?</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Ancak biz dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                    </div>
                  </div>
                </div>
                <div className="accrodion active">
                  <div className="accrodion-title">
                    <h4>Aylık Web Geliştirme Güncellemesi Tasarımı mı?</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Ancak biz dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>HTML'nin DNA’sını CSS Özellik Seçicileriyle Birleştirmek mi?</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Ancak biz dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>Başsız WordPress: Oluşturmanın Artıları ve Eksileri mi?</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Ancak biz dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-one__block">
              <div className="block-title-two text-left">
                <h3>Kariyerimiz Hakkında</h3>
                <span>Hakkımızda Bilgi Edinin. Biz Profesyoneliz</span>
              </div>
              <div className="accrodion-grp" data-grp-name="faq-two-accrodion">
                <div className="accrodion ">
                  <div className="accrodion-title">
                    <h4>Aylık Web Geliştirme Güncellemesi Tam Zamanında mı?</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Ancak biz dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                    </div>
                  </div>
                </div>
                <div className="accrodion active">
                  <div className="accrodion-title">
                    <h4>Aylık Web Geliştirme Güncellemesi Tasarımı mı?</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Ancak biz dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>HTML'nin DNA’sını CSS Özellik Seçicileriyle Birleştirmek mi?</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Ancak biz dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                    </div>
                  </div>
                </div>
                <div className="accrodion">
                  <div className="accrodion-title">
                    <h4>Başsız WordPress: Oluşturmanın Artıları ve Eksileri mi?</h4>
                  </div>
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>Ancak biz dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="faq-one__form-wrap">
              <form action="#" className="contact-one__form">
                <h3>Lütfen Formu Doldurarak Bizimle İletişime Geçin</h3>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="contact-one__input-group">
                      <i className="contact-one__input-icon far fa-user" />
                      <input type="text" placeholder="Ad Soyad" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-one__input-group">
                      <i className="contact-one__input-icon far fa-envelope" />
                      <input type="text" placeholder="E-Posta" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-one__input-group">
                      <select className="selectpicker">
                        <option value>Konu Seçiniz</option>
                        <option value="#">Fiyat Hakkında Soru</option>
                        <option value>İş Hakkında Soru</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-one__input-group">
                      <i className="contact-one__input-icon far fa-phone" />
                      <input type="text" placeholder="Telefon Numaranız" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact-one__input-group">
                      <i className="contact-one__input-icon far fa-pencil-alt" />
                      <textarea placeholder="Mesajınızı Yazın" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="thm-btn contact-one__form-btn">Mesaj Gönder <i className="fa fa-angle-double-right" /></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  }
}

export default FaqV3
