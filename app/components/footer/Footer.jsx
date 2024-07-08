import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary h-full flex flex-col gap-6 xl:flex-row justify-between py-4 px-6 md:px-16 font-light">
      {/* info */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">Info</h1>
        <p>gymfit@contact.com</p>
        <p>+(125) 365 897457 15</p>
        <p>Street studio , 25, Meknes</p>
      </div>
      {/* links */}
      <div className="">
        <h1 className="text-4xl font-semibold mb-6">Communication</h1>
        <p>Carrers</p>
        <p>Contacts</p>
        <p>Privacy & Policy </p>
        <p>Terms & Conditions</p>
      </div>
      {/* input */}
      <div className="flex flex-col gap-4">
        <h1 className="uppercase text-4xl">Subscribe to our news letter</h1>
        <div className="flex">
          <input
            type="text"
            placeholder="contact@gmail.com"
            className="p-4 text-2xl border-black"
          />
          <button className="uppercase bg-black hover:bg-black/90 duration-200 text-white px-8">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
