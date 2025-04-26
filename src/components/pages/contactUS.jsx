import React, { useState } from "react";

const ContactUs = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    otp: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVerify = () => {
    // Simulate OTP sent
    setOtpSent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div
      id="contactus"
      className="min-h-screen flex flex-col py-10 sm:py-12 md:py-16 bg-gray-50 mt-16 sm:mt-20 md:mt-24"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14 mx-auto max-w-5xl">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl">📍</span>
            </div>
            <h2 className="text-lg font-semibold mb-2">Address</h2>
            <p className="text-gray-600 text-sm">
              Focuz Studios™
              <br />
              #39, Second Floor, 2nd St,
              <br />
              Thirumalai Nagar, Kolathur,
              <br />
              Chennai, Tamil Nadu 600099
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl">✉️</span>
            </div>
            <h2 className="text-lg font-semibold mb-2">Email</h2>
            <p className="text-gray-600 text-sm">hello@focuzstudios.in</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl">📱</span>
            </div>
            <h2 className="text-lg font-semibold mb-2">Phone</h2>
            <p className="text-gray-600 text-sm">+91 96009 01721</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          <form
            className="bg-white p-6 md:p-8 rounded-2xl shadow-md lg:col-span-2"
            onSubmit={handleSubmit}
          >
            <div className="bg-black text-white inline-block px-4 py-2 rounded-lg mb-4">
              Contact Us
            </div>
            <h3 className="text-2xl font-bold mb-2">Leave a message!</h3>
            <p className="mb-6 text-gray-500">
              Support team will reach out as soon as possible.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name*
                </label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  type="text"
                  placeholder="Eg. Runa Kumar"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  type="email"
                  placeholder="Eg. runakumar@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <div className="flex gap-2">
                  <input
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    type="tel"
                    placeholder="Eg: +919876543210"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="bg-black text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                    onClick={handleVerify}
                  >
                    Verify
                  </button>
                </div>
              </div>

              {otpSent && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Enter OTP*
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    type="text"
                    placeholder="Enter OTP"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message*
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  placeholder="Type Message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Submit form
              </button>
            </div>
          </form>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <button className="flex items-center gap-3 w-full text-left">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📍</span>
                </div>
                <span className="text-sm font-medium">
                  Get directions to our office
                </span>
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <button className="flex items-center gap-3 w-full text-left">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📞</span>
                </div>
                <span className="text-sm font-medium">
                  Contact our support team
                  <br />
                  +91 96009 01721
                </span>
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-medium mb-4">Follow us on</h3>
              <div className="flex justify-between">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16 max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Find us on map</h3>
          {/* <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126664.54338492748!2d79.9430194!3d7.0439914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ff94b9bdb28d%3A0xa84e5e7bdf4b8f3b!2sNo.%204%2F7%2F1%20Suhada%20Mawatha%2C%20Ganemulla%2011020%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1713957112345!5m2!1sen!2slk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-2xl shadow-md"
          /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506827.0521913008!2d79.37596321105961!3d7.057793435205112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f968b92af321%3A0xcf0849422cc21294!2sChamodh%20Delpearachchi%20Photography!5e0!3m2!1sen!2slk!4v1745660507287!5m2!1sen!2slk"
            width="100%"
             title="Google Map"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-2xl shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
