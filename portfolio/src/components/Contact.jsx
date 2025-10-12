import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={24} color="var(--accent-color)" />
              <div>
                <h3>Email</h3>
                <p>iamvasanthraj003@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={24} color="var(--accent-color)" />
              <div>
                <h3>Location</h3>
                <p>Bengaluru India</p>
              </div>
            </div>
          </div>
          <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="78f652f7-5606-4453-b979-c4df10de08a7" />
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <Send size={16} style={{ marginRight: '8px' }} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;