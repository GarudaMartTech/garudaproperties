import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qnapxbh",             
        "template_y8s3vp5",            
        form.current,
        "11N95zXujSslz8iGZ"              
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="pt-10 pb-8">
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex-col gap-4 flex-align-center sm:flex-row">
          <div className="flex-1 w-full">
            <p>First Name</p>
            <input
              type="text"
              name="first_name"
              className="w-full input"
              placeholder="First Name.."
              required
            />
          </div>
          <div className="flex-1 w-full">
            <p>Last Name</p>
            <input
              type="text"
              name="last_name"
              className="w-full input"
              placeholder="Last Name.."
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <p>Email Address</p>
          <input
            type="email"
            name="email"
            className="w-full input"
            placeholder="Email Address.."
            required
          />
        </div>
        <div className="mt-4">
          <p>Message</p>
          <textarea
            name="message"
            rows={4}
            className="w-full input"
            placeholder="Message.."
            required
          ></textarea>
        </div>
        <div className="mt-4 flex-center-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
