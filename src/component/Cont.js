import React from 'react';
import './cont.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import home from './images/home-img.png'
import about from './images/about-img.png'
import book from './images/book-img.png'
import doc1 from './images/doc-1.jpg';
import doc2 from './images/doc-2.jpg';
import doc3 from './images/doc-3.jpg';
import doc4 from './images/doc-4.jpg';
import doc5 from './images/doc-5.jpg';
import doc6 from './images/doc-6.jpg';
import blog1 from './images/blog-1.jpg';
import blog2 from './images/blog-2.jpg';
import blog3 from './images/blog-3.jpg';
import pic1 from './images/pic-1.png';
import pic2 from './images/pic-2.png';
import pic3 from './images/pic-3.png';

export default function Content() {

    const handleMenuClick = () => {
        const menu = document.querySelector('#menu-btn');
        const navbar = document.querySelector('.navbar');
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }

    const handleScroll = () => {
        const menu = document.querySelector('#menu-btn');
        const navbar = document.querySelector('.navbar');
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }

    // Adding scroll event listener
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container">
            <header className="header">
                <a href="#" className="logo"><i className="fas fa-heartbeat"></i>medcare.</a>
                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#service">service</a>
                    <a href="#about">about</a>
                    <a href="#doctors">doctors</a>
                    <a href="#book">book</a>
                    <a href="#review">review</a>
                    <a href="#blogs">blogs</a>
                </nav>
                <div id="menu-btn" className="fas fa-bars" onClick={handleMenuClick}></div>
            </header>

            <section className="home" id="home">
                <div className="image">
                <img src={home} alt="Doctor 4" />
                </div>
                <div className="content">
                    <h3>stay safe, stay healthy</h3>
                    <p>We are a leading healthcare provider with a dedicated team of professionals committed to offering the best medical care.</p>
                    <a href="#" className="btn">contact us <span className="fas fa-chevron-right"></span></a>
                </div>
            </section>

            <section className="icons-container">
                <div className="icons">
                    <i className="fas fa-user-md"></i>
                    <h3>140+</h3>
                    <p>doctors at work</p>
                </div>
                <div className="icons">
                    <i className="fas fa-users"></i>
                    <h3>1040+</h3>
                    <p>satisfied patients</p>
                </div>
                <div className="icons">
                    <i className="fas fa-procedures"></i>
                    <h3>500+</h3>
                    <p>bed facility</p>
                </div>
                <div className="icons">
                    <i className="fas fa-hospital"></i>
                    <h3>80+</h3>
                    <p>available hospitals</p>
                </div>
            </section>

            <section className="service" id="service">
                <h1 className="heading">our <span>services</span></h1>
                <div className="box-container">
                    <div className="box">
                        <i className="fas fa-notes-medical"></i>
                        <h3>free checkups</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem?</p>
                        <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span></a>
                    </div>
                    <div className="box">
                        <i className="fas fa-ambulance"></i>
                        <h3>24/7 ambulance</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem?</p>
                        <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span></a>
                    </div>
                    <div className="box">
                        <i className="fas fa-user-md"></i>
                        <h3>expert doctors</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem?</p>
                        <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span></a>
                    </div>
                    <div className="box">
                        <i className="fas fa-pills"></i>
                        <h3>medicines</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem?</p>
                        <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span></a>
                    </div>
                    <div className="box">
                        <i className="fas fa-procedures"></i>
                        <h3>bed facility</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem?</p>
                        <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span></a>
                    </div>
                    <div className="box">
                        <i className="fas fa-heartbeat"></i>
                        <h3>total care</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem?</p>
                        <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span></a>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <h1 className="heading"><span>about</span> us</h1>
                <div className="row">
                    <div className="image">
                    <img src={about} alt="about 4" />
                    </div>
                    <div className="content">
                        <h3>we take care of your healthy life</h3>
                        <p>At MedCare, we take pride in providing dedicated healthcare aimed at improving the quality of life in our community. Combining service dedication with high medical standards, MedCare Hospital ensures the best healthcare for our patients. We are committed to offering a safe and comfortable environment for every patient.</p>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis, voluptates accusamus dicta perferendis facere excepturi in quis modi pariatur!</p> */}
                        <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span></a>
                    </div>
                </div>
            </section>

            <section className="doctors" id="doctors">
                <div className="box-containar">
                    <div className="box">
                        <img src={doc1} alt="Doctor 6" />
                        <h3>rehab mostafa</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={doc2} alt="Doctor 2" />
                        <h3>ali esmail</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={doc4} alt="Doctor 4" />
                        <h3>abdalla abdelsabour</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={doc5} alt="Doctor 5" />
                        <h3>hossam ali</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={doc6} alt="Doctor 6" />
                        <h3>raafat omar</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
          </div>
          <div className="box">
          <img src={doc3} alt="Doctor 3" />
            <h3>osama saad</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
        </div>
      </section>

      <section className="book" id="book">
        <h1 className="heading"><span>book</span> now</h1>
        <div className="row">
          <div className="image">
          <img src={book} alt="book 4" />
          </div>
          <form>
            <h3>book appointment</h3>
            <input type="text" placeholder="your name" className="box" />
            <input type="number" placeholder="your number" className="box" />
            <input type="email" placeholder="your email" className="box" />
            <input type="date" className="box" />
            <input type="submit" value="book now" className="btn" />
          </form>
        </div>
      </section>
      <section class="review" id="review">
        <h1 class="heading"> client's<span>review</span></h1>
        <div class="box-container">
            <div class="box">
            <img src={pic1} alt="pic1" />
            <h3>abdo ismail</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p class="text">MedCare Hospital has exceeded my expectations in every way. From the moment I arrived, I was greeted warmly and treated with utmost care and professionalism. The doctors and nurses here are not only highly skilled but also compassionate, taking the time to explain everything clearly and ensuring I felt comfortable throughout my stay.</p>
             </div>
            <div class="box">
            <img src={pic2} alt="pic1" />
                <h3>nermin ali</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p class="text">MedCare Hospital has exceeded my expectations in every way. From the moment I arrived, I was greeted warmly and treated with utmost care and professionalism. The doctors and nurses here are not only highly skilled but also compassionate, taking the time to explain everything clearly and ensuring I felt comfortable throughout my stay.</p>
             </div>
            <div class="box">
            <img src={pic3} alt="pic1" />
                <h3>taha mohammed </h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <p class="text">MedCare Hospital has exceeded my expectations in every way. From the moment I arrived, I was greeted warmly and treated with utmost care and professionalism. The doctors and nurses here are not only highly skilled but also compassionate, taking the time to explain everything clearly and ensuring I felt comfortable throughout my stay.</p>
             </div>
        </div>

    </section>

      <section className="blogs" id="blogs">
        <h1 className="heading">our <span>blogs</span></h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
            <img src={blog1} alt="blog1" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#"><i className="fas fa-calendar"></i> 21st may, 2021</a>
                <a href="#"><i className="fas fa-user"></i> by admin</a>
              </div>
              <h3>Thank you for being a part of the MedCare family, where your well-being is our priority.</h3>
              <p>At MedCare, we are dedicated to keeping you informed about the latest in healthcare, wellness tips, and medical advancements. Our blog serves as a resource for our community, offering insights into preventive care, patient stories, and updates from our expert medical team.</p>
              <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span></a>
            </div>
          </div>
          <div className="box">
            <div className="image">
            <img src={blog2} alt="blog2" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#"><i className="fas fa-calendar"></i> 21st may, 2021</a>
                <a href="#"><i className="fas fa-user"></i> by admin</a>
              </div>
              <h3>Thank you for being a part of the MedCare family, where your well-being is our priority.</h3>
              <p>At MedCare, we are dedicated to keeping you informed about the latest in healthcare, wellness tips, and medical advancements. Our blog serves as a resource for our community, offering insights into preventive care, patient stories, and updates from our expert medical team.</p>
              <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span></a>
            </div>
          </div>
          <div className="box">
            <div className="image">
            <img src={blog3} alt="blog3" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#"><i className="fas fa-calendar"></i> 21st may, 2021</a>
                <a href="#"><i className="fas fa-user"></i> by admin</a>
              </div>
              <h3>Thank you for being a part of the MedCare family, where your well-being is our priority.</h3>
              <p>At MedCare, we are dedicated to keeping you informed about the latest in healthcare, wellness tips, and medical advancements. Our blog serves as a resource for our community, offering insights into preventive care, patient stories, and updates from our expert medical team.</p>
              <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span></a>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
  <div className="box-container">
    <div className="box">
      <h3>quick links</h3>
      <a href="#"><i className="fas fa-chevron-right"></i> home</a>
      <a href="#"><i className="fas fa-chevron-right"></i> service</a>
      <a href="#"><i className="fas fa-chevron-right"></i> about</a>
      <a href="#"><i className="fas fa-chevron-right"></i> doctors</a>
      <a href="#"><i className="fas fa-chevron-right"></i> book</a>
      <a href="#"><i className="fas fa-chevron-right"></i> review</a>
      <a href="#"><i className="fas fa-chevron-right"></i> blogs</a>
    </div>
    <div className="box">
      <h3>our services</h3>
      <a href="#"><i className="fas fa-chevron-right"></i> dental care</a>
      <a href="#"><i className="fas fa-chevron-right"></i> massage therapy</a>
      <a href="#"><i className="fas fa-chevron-right"></i> cardiology</a>
      <a href="#"><i className="fas fa-chevron-right"></i> diagnosis</a>
      <a href="#"><i className="fas fa-chevron-right"></i> ambulance service</a>
    </div>
    <div className="box">
      <h3>contact info</h3>
      <a href="tel:+201027523303"><i className="fas fa-phone"></i> +2-010-27-523303</a>
      <a href="tel:+201121742287"><i className="fas fa-phone"></i> +2-011-21-742287</a>
      <a href="mailto:abelrhman1562004@gmail.com"><i className="fas fa-envelope"></i> abelrhman1562004@gmail.com</a>
      <a href="skype:abelrhman1562004"><i className="fas fa-envelope"></i> abelrhman1562004@skype.com</a>
      <a href="#"><i className="fas fa-map-marker-alt"></i> el fayuom, elmaedany, 3300123</a>
    </div>
    <div className="box">
      <h3>follow us</h3>
      <a href="#"><i className="fab fa-facebook-f"></i> facebook</a>
      <a href="#"><i className="fab fa-twitter"></i> twitter</a>
      <a href="#"><i className="fab fa-instagram"></i> instagram</a>
      <a href="#"><i className="fab fa-linkedin"></i> linkedin</a>
      <a href="#"><i className="fab fa-pinterest"></i> pinterest</a>
    </div>
  </div>
  <div className="credit">created &copy; by <span>abdelrhman ismail</span> | all rights reserved</div>
</section>
        </div>
    )
}