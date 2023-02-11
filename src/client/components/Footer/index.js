import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,faTwitter,faInstagram,faLinkedinIn
  } from "@fortawesome/free-brands-svg-icons";
import { faLink } from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  return (
    <div>
         <div>
  <div className="dinerFooter py-5">
    <div className="dinerFooter__top container py-lg-4 w-auto">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-7 col-12 pr-lg-5">
          <div className="dinerFooter__logo mb-3">
            <a href="#" className="text-white">
              <h2>Diner</h2>
            </a>
          </div>
          <p className="mb-0">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.
            Semper at tempufddfel. Lorem ipsum dolor sit amet Semper at elit.</p>
          <div className="dinerFooter__social mt-4">
            <a href="#">
                <FontAwesomeIcon icon={faFacebookF}/>
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn}/>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-5 col-6 mt-md-0 mt-lg-0 mt-5">
          <h6>Usefull Links</h6>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog posts</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-5 col-6 mt-md-5 mt-lg-0 mt-sm-5 mt-5">
          <h6>More Info</h6>
          <ul>
            <li><a href="#">History</a></li>
            <li><a href="#">Vision &amp; Values</a></li>
            <li><a href="#">Awards</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-7 col-12 mt-md-5 mt-lg-0 mt-sm-5 mt-5">
          <h6>Subscribe to our Newsletter</h6>
          <p>Enter your email and receive the latest news, updates and special offers from us.</p>
          <form action="#">
            <input type="email" name="email" placeholder="Your Email Address" required />
            <button className="btn btn-style btn-primary w-100 mt-3">Subscibe Now</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="footer__bot">
    <div className="footer__copyright container">
      <div className="row align-items-center">
        <div className="footer__left col-lg-8 col-md-12">
          <p className="mb-0">
            © 2021 Diner. All rights reserved. Design by
            <a href="#">W3Layouts</a>
          </p>
        </div>
        <div className="footer__right col-lg-4 col-md-12">
          <ul className="d-flex mb-0">
            <li><a href="#">Careers</a></li>
            <li className="mx-5"><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
