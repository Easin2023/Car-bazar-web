import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
const Help = () => {
     const form = useRef();

     const sendEmail = (e) => {
          e.preventDefault();
          
          emailjs.sendForm('service_63huibj', 'template_o8rda0s', form.current, 'TDo_TL9RO7LdCLdcA')
          .then((result) => {
               console.log(result.text);
              Swal.fire({
                  title: "success",
                  text: "Your Additional node send success",
                  icon: "success"
             });
             form.current.reset();
        }, (error) => {
             console.log(error.text);
        });
   
      };

  return (
    <div className="h-screen mx-20">
      <div>
        <div className=" mt-20 font-font-ubuntu">
          <h1 className="text-5xl  my-10 ml-3">Contact Me</h1>
          <div data-aos="fade-left" className="card w-full border ">
            <form ref={form} onSubmit={sendEmail} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="your Name"
                  name="your_name"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="your email"
                  name="your_email"
                  className="input input-bordered bg-gray-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Help Notes</span>
                </label>
                <textarea
                  className="rounded-lg bg-gray-200"
                  name="message"
                  id=""
                  cols="5"
                  rows="5"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary ">Send Me</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
