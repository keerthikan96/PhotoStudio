import React, { useState } from 'react';

const ContactUs = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    otp: '',
    message: '',
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
    console.log('Form Data:', formData);
  };

  return (
    <div id='contactus' className="min-h-screen flex flex-col py-6 sm:py-8 md:py-10 px-4 md:px-8 lg:px-10 relative bg-[#f8f9fa] mt-12 sm:mt-16 md:mt-20 lg:mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
          <h2 className="text-base sm:text-lg font-semibold">Address</h2>
          <p className="mt-2 text-xs sm:text-sm">Focuz Studios™<br/>#39, Second Floor, 2nd St, Thirumalai Nagar, Kolathur, Chennai, Tamil Nadu 600099</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
          <h2 className="text-base sm:text-lg font-semibold">Email</h2>
          <p className="mt-2 text-xs sm:text-sm">hello@focuzstudios.in</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
          <h2 className="text-base sm:text-lg font-semibold">Phone</h2>
          <p className="mt-2 text-xs sm:text-sm">+91 96009 01721</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-start">
        <form className="bg-white p-4 sm:p-6 rounded-xl shadow md:col-span-2" onSubmit={handleSubmit}>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Leave a message!</h3>
          <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500">Support team will reach out as soon as possible.</p>

          <input
            className="w-full border rounded px-3 sm:px-4 py-2 mb-3 sm:mb-4 text-sm"
            type="text"
            placeholder="Eg. Runa Kumar"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            className="w-full border rounded px-3 sm:px-4 py-2 mb-3 sm:mb-4 text-sm"
            type="email"
            placeholder="Eg. runakumar@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="flex gap-2 mb-3 sm:mb-4">
            <input
              className="flex-1 border rounded px-3 sm:px-4 py-2 text-sm"
              type="tel"
              placeholder="Eg: +919876543210"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <button type="button" className="bg-black text-white px-3 sm:px-4 py-2 rounded text-sm" onClick={handleVerify}>
              Verify
            </button>
          </div>

          {otpSent && (
            <input
              className="w-full border rounded px-3 sm:px-4 py-2 mb-3 sm:mb-4 text-sm"
              type="text"
              placeholder="Enter OTP"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
            />
          )}

          <textarea
            className="w-full border rounded px-3 sm:px-4 py-2 mb-3 sm:mb-4 text-sm"
            placeholder="Your Message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="w-full bg-black text-white py-2 rounded text-sm">
            Submit form
          </button>
        </form>

        <div className="space-y-3 sm:space-y-4">
          <button className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 sm:py-3 shadow rounded-xl w-full text-sm">
            📍 Get directions to our office
          </button>
          <button className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 sm:py-3 shadow rounded-xl w-full text-sm">
            📞 Contact our support team +91 96009 01721
          </button>

          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-black">{/* Instagram */}
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-black">{/* Facebook */}
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-black">{/* Pinterest */}
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-black">{/* YouTube */}
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 md:mt-10">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31105.15165023199!2d80.1881878!3d13.1112486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261d2e1fc27fb%3A0x8098ab4ffbb1d5b6!2sFocuz%20Studios%E2%84%A2!5e0!3m2!1sen!2sin!4v1687680735471!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-xl shadow sm:h-[350px] md:h-[400px]"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
