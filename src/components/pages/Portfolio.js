import React from "react";
import "./style.css";
import sportzillaImage from "../../images/sportzilla.png";
import daySchedulerImage from "../../images/daySchedulerSS.png";
import passwordGeneratorSS from "../../images/passwordGeneratorSS.png";
import myStreamSS from "../../images/MyStream.PNG";

function Portfolio() {
  return (
    <div className="container-fluid clearfix pb-5" id="backgroundContainer">
      <article className="container-sm float-left" id="mainContentContainer">
        <section className="row row-bordered pt-2">
          <section className="col-sm-12">
            <h2 id="mainHeader">Portfolio</h2>
          </section>
        </section>
        <section className="row" id="portfolioRow">
          <figure className="col-sm-12 col-lg-6" id="portfolioTopFigure">
            <h3 id="portfolioHeader">
              <u>Sportzilla</u>
            </h3>
            <div className="githubDeployed">
              <a
                className="githubDeployedLink"
                href="https://millsy4.github.io/sportz_project/"
              >
                Deployed Website
              </a>
            </div>
            <div className="githubRepo">
              <a
                className="githubRepoLink"
                href="https://github.com/Millsy4/sportz_project"
              >
                GitHub Repository
              </a>
            </div>
            <img
              className="img img-thumbnail bg-dark"
              src={sportzillaImage}
              alt="Screenshot of sportzilla project website"
            />
          </figure>
          <figure className="col-sm-12 col-lg-6" id="portfolioFigure">
            <h3 id="portfolioHeader">
              <u>Work Day Scheduler</u>
            </h3>
            <div className="githubDeployed">
              <a
                className="githubDeployedLink"
                href="https://millsy4.github.io/05_work_day_scheduler/"
              >
                Deployed Website
              </a>
            </div>
            <div className="githubRepo">
              <a
                className="githubRepoLink"
                href="https://github.com/Millsy4/05_work_day_scheduler"
              >
                GitHub Repository
              </a>
            </div>
            <img
              className="img img-thumbnail bg-dark"
              src={daySchedulerImage}
              alt="Screenshot of work day scheduler website"
            />
          </figure>
          <figure className="col-sm-12 col-lg-6" id="portfolioFigure">
            <h3 id="portfolioHeader">
              <u>Random Password Generator</u>
            </h3>
            <div className="githubDeployed">
              <a
                className="githubDeployedLink"
                href="https://millsy4.github.io/03_password_generator/"
              >
                Deployed Website
              </a>
            </div>
            <div className="githubRepo">
              <a
                className="githubRepoLink"
                href="https://github.com/Millsy4/03_password_generator"
              >
                GitHub Repository
              </a>
            </div>
            <img
              className="img img-thumbnail bg-dark"
              src={passwordGeneratorSS}
              alt="Screenshot of password generator website"
            />
          </figure>
          <figure className="col-sm-12 col-lg-6" id="portfolioFigure">
            <h3 id="portfolioHeader">
              <u>My Stream</u>
            </h3>
            <div className="githubDeployed">
              <a
                className="githubDeployedLink"
                href="https://my-stream-project.herokuapp.com/"
              >
                Deployed Website
              </a>
            </div>
            <div className="githubRepo">
              <a
                className="githubRepoLink"
                href="https://github.com/Millsy4/my_stream"
              >
                GitHub Repository
              </a>
            </div>
            <img
              className="img img-thumbnail bg-dark"
              src={myStreamSS}
              alt="Screenshot of my stream website"
            />
          </figure>
          <p className="portfolioPara">
            Portfolio will be updated as I complete more projects! Thank you for
            your patience!
          </p>
        </section>
      </article>
    </div>
  );
}

export default Portfolio;
