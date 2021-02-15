import React from "react";
import "./Footer.css";
import resumePDF from "../../assets/Christian_Resume.pdf";

function Footer() {
  return (
    <div className="page-footer clearfix">
      <section className="footer-copyright text-center py-3" id="footerSection">
        {" "}
        Christian Mills |
        <a href="mailto:chrmills4@gmail.com">chrmills4@gmail.com</a> |
        <a href="tel:+16204308514">620-430-8514</a> |
        <a href={resumePDF} target="_blank">Resume</a>
        <a
          className="btn btn-outline-primary btn-sm"
          href="https://www.linkedin.com/in/christian-mills-7ba9701b0/"
          role="button"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          className="btn btn-outline-success btn-sm"
          href="https://github.com/Millsy4"
          role="button"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
      </section>
    </div>
  );
}

export default Footer;
