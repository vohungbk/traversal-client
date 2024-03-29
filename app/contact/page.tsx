import { Breadcrumb } from "@/components/Breadcrumb";
import React from "react";

function Contact() {
  return (
    <>
      <Breadcrumb title="Contact Us" pageName="Contact" />
      <section className="w3l-contact" id="contact">
        <div className="contact-infubd py-5">
          <div className="container py-lg-3">
            <div className="contact-grids row">
              <div className="col-lg-6 contact-left">
                <div className="partners">
                  <div className="cont-details">
                    <h5>Get in touch</h5>
                    <p className="mt-3 mb-4">Hi there, We are available 24/7 by fax, e-mail or by phone. Drop us line so we can talk futher about that.</p>
                  </div>
                  <div className="hours">
                    <h6 className="mt-4">Email:</h6>
                    <p>
                      <a href="mailto:mail@traversal.com">mail@traversal.com</a>
                    </p>
                    <h6 className="mt-4">Visit Us:</h6>
                    <p> 78-80 Upper St Giles St. Norwich NR2 1LT United Kingdom.</p>
                    <h6 className="mt-4">Contact:</h6>
                    <p className="margin-top">
                      <a href="tel:+44-255-366-88">+44-255-366-88</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5 contact-right">
                <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
                  <div className="input-grids">
                    <div className="form-group">
                      <input type="text" name="w3lName" id="w3lName" placeholder="Your Name*" className="contact-input" />
                    </div>
                    <div className="form-group">
                      <input type="email" name="w3lSender" id="w3lSender" placeholder="Your Email*" className="contact-input" required />
                    </div>
                    <div className="form-group">
                      <input type="text" name="w3lSubect" id="w3lSubect" placeholder="Subject*" className="contact-input" />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your message here*" required></textarea>
                  </div>
                  <div className="text-right">
                    <button className="btn btn-style btn-primary">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="map mt-5 pt-md-5">
              <h5>Map</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387145.86654334463!2d-74.25818682528057!3d40.70531100753592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1493028309728"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
