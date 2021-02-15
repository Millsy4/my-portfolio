import React from "react";
import "./style.css"
import portfolioImage from "../../images/Profile_Picture.jpg"

function Index() {
  return (
    <div className="container-fluid clearfix pb-5" id="backgroundContainer">
      <article
        className="container-lg float-left" id="mainContentContainer"
      >
        <section className="row row-bordered pt-2">
          <section className="col-sm-12">
            <h2 id="aboutMeHeading">About Me</h2>
          </section>
        </section>
        <section className="row">
          <section className="col-sm-12 pb-3 pt-3">
            <img
              className="img img-thumbnail bg-dark float-left mr-4 mb-1"
              src={portfolioImage}
              id="aboutMeImg"
              alt="Picture of Christian Mills"
            />
            <p id="aboutMeParas">
              <strong>
                Hello everyone and welcome to my website! My name is Christian
                Mills, I am 27 years old and currently living in Dodge City, KS.
                I graduated from Kansas State University with a Bachelor's
                degree in Management in May of 2017 and continued to live in
                Manhattan, KS, working as an Assistant Produce Manager for a
                year before moving back to Dodge City to work as a Draftsman and
                IT for a construction company called Building Solutions.
              </strong>
            </p>
            <p id="aboutMeParas">
              <strong>
                Recently I decided to take my life in a new direction and left
                my job to pursue a career in my passion: computers. I've always
                wanted to work with computers in some fashion and decided that
                getting involved in some type of coding would be the best way to
                satisfy that want, thus when I heard about the coding bootcamp
                for Full Stack Web Development being offered from Kansas
                University I quickly jumped at the chance to move in this new
                direction.
              </strong>
            </p>
            <p id="aboutMeParas">
              <strong>
                On this website you will find links to my LinkedIn and my
                GitHub, as well as a portfolio with websites I have created
                throughout my time in this bootcamp. Feel free to look around to
                get a glimpse of what I can do and contact me if you would like
                through the email chrmills4@gmail.com.
              </strong>
            </p>
            <p id="aboutMeParas">
              <strong>
                Thank you for visiting and I hope you like what you see!
              </strong>
            </p>
            <h2 id="aboutMeSig">
              Christian Mills
            </h2>
          </section>
        </section>
      </article>
    </div>
  );
}

export default Index;
