import React from "react";
import { MailFilled, PhoneFilled, BankFilled } from "@ant-design/icons";

const ContactSummary = () => {
  return (
    <div className="contact-section lg:px-12 sm:px-6 px-4 text-[#191818]">
      <div className="container-1440 py-16">
        <p className="caption">We value your input and are here to assist</p>
        <h2 className="font-semibold my-2">Contact Us</h2>
        <h5>Feel free to reach out us for any inquiries or feedback</h5>
        <div className="grid grid-cols-3 mt-12 gap-6">
          <div>
            <h1>
              <MailFilled />
            </h1>
            <h5 className="font-semibold mt-4">Email</h5>
            <p className="mt-4 caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              maxime nulla neque
            </p>
            <p className="mt-4">email@gmail.com</p>
          </div>
          <div>
            <h1>
              <PhoneFilled />
            </h1>
            <h5 className="font-semibold mt-4">Phone</h5>
            <p className="mt-4 caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              maxime nulla neque
            </p>
            <p className="mt-4">0812345678</p>
          </div>
          <div>
            <h1>
              <BankFilled />
            </h1>
            <h5 className="font-semibold mt-4">Office</h5>
            <p className="mt-4 caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              maxime nulla neque
            </p>
            <p className="mt-4">Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSummary;
