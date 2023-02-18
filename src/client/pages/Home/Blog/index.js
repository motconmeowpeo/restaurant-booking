import React from 'react'
import "./style.css"
export default function Blog() {
  return (
    <div>
        <div className="dinerPost py-5">
  <div className="dinerPost__container container py-2 py-md-5 w-auto">
    <div className="title">
      <h6>Latest Posts</h6>
      <h3>Blog Posts</h3>
    </div>
    <div className="dinerPost__content row">
      <div className="dinerPost__item col-lg-4 col-md-6 mt-5">
        <div className="dinerPost__img position-relative">
          <a href="#">
            <img src="./img/banner1.jpg" className="card-img-top radius-image" alt="banner1" />
          </a>
          <div className="post-pos">
            <a href="#">
              Reciepe
            </a>
            <span className="ml-2">
              <i className="fa fa-clock" />
              10 Min Cook
            </span>
          </div>
        </div>
        <div className="dinerPost__text">
          <a href="#">
            The Best Cookie Recipes To Bake This Weekend
          </a>
          <p className="m-0">Lorem ipsum dolor sit amet ipsum adipisicing elit. Qui eligendi vitae sit.</p>
          <div className="dinerPost__footer mt-3">
            <div className="dinerPost__info">
              <a href="#">
                <img src="./img/team1.jpg" alt="team1" />
              </a>
              <a href="#">Rashed Kabir</a>
            </div>
            <a href="#" className="read">
              Read More
              <i className="fa fa-chevron-right ml-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="dinerPost__item col-lg-4 col-md-6 mt-5">
        <div className="dinerPost__img position-relative">
          <a href="#">
            <img src="./img/banner3.jpg" className="card-img-top radius-image" alt="banner1" />
          </a>
          <div className="post-pos">
            <a href="#">
              Soup
            </a>
            <span className="ml-2">
              <i className="fa fa-clock" />
              10 Min Cook
            </span>
          </div>
        </div>
        <div className="dinerPost__text">
          <a href="#">
            The Best Cookie Recipes To Bake This Weekend
          </a>
          <p className="m-0">Lorem ipsum dolor sit amet ipsum adipisicing elit. Qui eligendi vitae sit.</p>
          <div className="dinerPost__footer mt-3">
            <div className="dinerPost__info">
              <a href="#">
                <img src="./img/team2.jpg" alt="team1" />
              </a>
              <a href="#">Rashed Kabir</a>
            </div>
            <a href="#" className="read">
              Read More
              <i className="fa fa-chevron-right ml-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="dinerPost__item col-lg-4 col-md-6 mt-5">
        <div className="dinerPost__img position-relative">
          <a href="#">
            <img src="./img/banner1.jpg" className="card-img-top radius-image" alt="banner1" />
          </a>
          <div className="post-pos">
            <a href="#">
              Drinks
            </a>
            <span className="ml-2">
              <i className="fa fa-clock" />
              10 Min Cook
            </span>
          </div>
        </div>
        <div className="dinerPost__text">
          <a href="#">
            The Best Cookie Recipes To Bake This Weekend
          </a>
          <p className="m-0">Lorem ipsum dolor sit amet ipsum adipisicing elit. Qui eligendi vitae sit.</p>
          <div className="dinerPost__footer mt-3">
            <div className="dinerPost__info">
              <a href="#">
                <img src="./img/team3.jpg" alt="team1" />
              </a>
              <a href="#">Rashed Kabir</a>
            </div>
            <a href="#" className="read">
              Read More
              <i className="fa fa-chevron-right ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
