import React from "react";
import "../css/contact.css"

const ContactPage = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-cards justify-evenly pt-[112px] mb-[24px] flex justify-center items-center">
          <ContactCard icon="fa-location-dot" title="Address" description="198 West 21th Street, Suite 721 New York NY 10016" />
          <ContactCard icon="fa-phone" title="Number" description="+ 1235 2355 98" />
          <ContactCard icon="fa-paper-plane" title="Email Address" description="info@yoursite.com" />
          <ContactCard icon="fa-earth-americas" title="Website" description="yoursite.com" />
        </div>
        <div className="map-form flex justify-center items-center mb-[112px]">
          <div className="mr-[35px]">
            <div className="map-div flex justify-center">
              <iframe
                className="map-contact"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4203.429110186904!2d49.86814031567884!3d40.40926217937002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4031f8cddc8f5d29%3A0x80f173ac408fd60d!2z0JjQvdC-0LPQvtC80LjQu9C40L0g0KHQutC-0LLQvtC70L7Qv9C-0L7RhtC10L3QvNC-0L0g0KLQvtC80L7Qug!5e0!3m2!1sru!2saz!4v1683756795922!5m2!1sru!2saz"
                width="550"
                height="560"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="form-contact w-[550px] h-[560px] p-[20px] bg-[#F9FAFB]">
            <form className="p-5 contact-form">
              <div className="form-group">
                <input
                  type="text"
                  style={{ borderRadius: "5px" }}
                  className="form-control py-2 px-3 w-full outline outline-1 outline-gray-300 bg-white my-[10px] h-[52px] text-15px"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  style={{ borderRadius: "5px" }}
                  className="form-control w-full py-2 px-3 outline outline-1 outline-gray-300 bg-white my-[10px] h-[52px] text-15px"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  style={{ borderRadius: "5px" }}
                  className="form-control w-full py-2 px-3 outline outline-1 outline-gray-300 bg-white my-[10px] h-[52px] text-15px"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  style={{ borderRadius: "5px" }}
                  cols="30"
                  rows="7"
                  className="form-control py-2 px-3 w-full my-[10px] text-15px outline outline-1 outline-gray-300"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group">
                <button
                  style={{ borderRadius: "5px" }}
                  className="w-[214px] h-[57px] p-16-48 bg-[#2985CC] text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

const ContactCard = ({ icon, title, description }) => (
  <div className="card2 bg-[#F2F2F2] w-[230px] h-[214px] p-[30px] relative z-[1] text-center bg-white shadow-md">
    <div className="icon2  w-[76px] h-[76px] bg-[#6DA4CD] mx-auto flex justify-center items-center rounded-full text-white">
      <i className={`fa-solid ${icon}`}></i>
    </div>
    <div className="title pt-[15px] text-[18px] font-[600]">{title}</div>
    <div className="description text-[15px]">{description}</div>
  </div>
);

export default ContactPage;

