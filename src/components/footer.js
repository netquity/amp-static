import React from 'react'
import LogoWhite from '../assets/logo-white.png'

const Footer = () => (
  <React.Fragment>
    <div class="footer" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <article>
              <div class="footer-title">
                <p>About Us</p>
              </div>
              <p>
                If you are looking for an electrical contracting company that is
                focused on the needs of its clients, then you’ve found it. Our
                team uses cutting edge technology to ensure that your project is
                completed on time and on budget.
              </p>
            </article>
            <article>
              <div class="footer-title">
                <p>Come for a visit!</p>
              </div>
              <p>
                Mill 228 - 270 Sherman Ave. N, Hamilton, Ontario L8N 6N4 -
                1.800.AMP.1780
              </p>
            </article>
          </div>
          <div class="col-sm-4">
            <article>
              <div class="footer-title">
                <p>Connect With Us</p>
              </div>
              <ul class="social-links">
                <li>
                  <a
                    href="https://www.facebook.com/Amplistic-Inc-1154406591257049/"
                    target="_blank"
                  >
                    <i class="fa fa-facebook-official" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/amplisticinc_/"
                    target="_blank"
                  >
                    <i class="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </article>
          </div>
          <div class="col-sm-4" />
        </div>
      </div>
    </div>

    <div class="copywrite">
      <p>© 2017 Amplistic Inc - Electrical Contracting made Simple</p>
    </div>
  </React.Fragment>
)

export default Footer
