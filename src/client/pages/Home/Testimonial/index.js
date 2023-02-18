import React from 'react'
import "./style.css"
import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination} from "swiper"
import "swiper/css"
export default function Testimonial() {
  return (
    <div>
         <div className="dinerTestimonial pt-5">
  <div className="dinerTestimonial__container container py-5 py-3 w-auto">
    <div className="title">
      <h6>Testimonials</h6>
      <h3 className="mb-5">What People Say</h3>
    </div>
    <div className="dinerTestimonial__content">
      <div className="owl-carousel owl-theme owl-loaded testimonial">
        <div className="owl-stage-outer mb-4">
          <Swiper className="owl-stage">
            <SwiperSlide className="owl-item">
              <div className="dinerTestimonial__text">
                <a href="#" className="img__responsive">
                  <img src="./img/team1.jpg" alt="team1" />
                </a>
                <blockquote>
                  <q>
                    OMG! I cannot believe. It's Awesome
                  </q>
                </blockquote>
                <p>
                  My new site is so much faster and easier to work with than my old site. They are
                  here to
                  help the customers to get their success. Nemo sit eos, quod minus eius illo
                  labore.
                  Pellen tesque libero ut justo, ultrices in ligula.
                </p>
                <h3 className="m-0 mt-4">Johnson william</h3>
                <p className="m-0">Customer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="owl-item">
              <div className="dinerTestimonial__text">
                <a href="#" className="img__responsive">
                  <img src="./img/team2.jpg" alt="team1" />
                </a>
                <blockquote>
                  <q>
                    Simply the best. Better than all the rest.
                  </q>
                </blockquote>
                <p>
                  My new site is so much faster and easier to work with than my old site. They are
                  here to
                  help the customers to get their success. Nemo sit eos, quod minus eius illo
                  labore.
                  Pellen tesque libero ut justo, ultrices in ligula.
                </p>
                <h3 className="m-0 mt-4">Alexander sakura</h3>
                <p className="m-0">Customer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="owl-item">
              <div className="dinerTestimonial__text">
                <a href="#" className="img__responsive">
                  <img src="./img/team3.jpg" alt="team1" />
                </a>
                <blockquote>
                  <q>
                    OMG! I cannot believe. It's Awesome
                  </q>
                </blockquote>
                <p>
                  My new site is so much faster and easier to work with than my old site. They are
                  here to
                  help the customers to get their success. Nemo sit eos, quod minus eius illo
                  labore.
                  Pellen tesque libero ut justo, ultrices in ligula.
                </p>
                <h3 className="m-0 mt-4">John wilson</h3>
                <p className="m-0">Customer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="owl-item">
              <div className="dinerTestimonial__text">
                <a href="#" className="img__responsive">
                  <img src="./img/team1.jpg" alt="team1" />
                </a>
                <blockquote>
                  <q>
                    OMG! I cannot believe. It's Awesome
                  </q>
                </blockquote>
                <p>
                  My new site is so much faster and easier to work with than my old site. They are
                  here to
                  help the customers to get their success. Nemo sit eos, quod minus eius illo
                  labore.
                  Pellen tesque libero ut justo, ultrices in ligula.
                </p>
                <h3 className="m-0 mt-4">Johnson william</h3>
                <p className="m-0">Customer</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
