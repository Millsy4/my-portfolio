import React from "react";
import "./style.css";

function Contact() {
  return (
    <div className="container-fluid clearfix pb-5" id="backgroundContainer">
      <div className="container-lg float-left" id="mainContentContainer">
        <section className="row row-bordered pt-2">
          <section className="col-sm-12">
            <h2 id="mainHeader">Contact</h2>
          </section>
        </section>
        <section className="row">
          <section className="col-sm-12 pb-3">
            <form>
              <div className="form-group">
                <label htmlFor="getName" id="nameLabel">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="getName"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="getEmail" id="emailLabel">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="getEmail"
                  placeholder="emailname@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="getMessage" id="messageLabel">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="getMessage"
                  rows="3"
                  defaultValue="Enter message here..."
                ></textarea>
              </div>
              <button type="button" className="btn" id="submitButton">
                Submit
              </button>
            </form>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Contact;
