import "./Contact.css";

import { useState } from "react";

export default function Contact() {

      const [showDialog, setShowDialog] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // Send data to Formspree
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xrbrborq", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setShowDialog(true); // ✅ Show dialog
      form.reset();        // Clear form
    } else {
      alert("Oops! Something went wrong.");
    }
  }


  return (
    <section id="contact" className="contact">
      <h2>Get in touch</h2>
      <p className="slogan">Let's build something good together :)</p>

      {/* Info Boxes */}
      <div className="contact-info">
        <div className="info-box">📍 Bengaluru</div>
        <div className="info-box">📞 +91-9047356424</div>
        <div className="info-box">✉️ sathishramasundaram@gmail.com</div>
      </div>

      {/* Contact Form */}
      <form 
      className="contact-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Dialog Box */}
      {
        showDialog && (
            <div className="dialog">
                <p>Message sent. Thank you!</p>
                <button onClick={() => setShowDialog(false)}>Close</button>
            </div>
        )
      }
    </section>
  );
}
