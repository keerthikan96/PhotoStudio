import React, { useState } from "react";
import { PagesUI } from '../PagesUI';
import TextTransition from "../TextTransition";
import emailjs from "emailjs-com";
import otpGenerator from "otp-generator";
import { SmsClient } from "@azure/communication-sms";

const ContactUs = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    otp: "",
    message: "",
  });
  const [isVerified, setIsVerified] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendSmsMessage = async (phoneNumber, message) => {
    try {
      // Initialize the SMS client with your connection string
      const smsClient = new SmsClient(import.meta.env.VITE_AZURE_COMMUNICATION_CONNECTION_STRING);
      
      const sendResult = await smsClient.send({
        from: import.meta.env.VITE_AZURE_PHONE_NUMBER, // Your Azure Communication Services phone number
        to: phoneNumber,
        message: message
      });

      // Message sent successfully
      return true;
    } catch (error) {
      console.error("Error sending SMS:", error);
      return false;
    }
  };

  const handleVerify = async () => {
    if (!formData.phone) {
      alert("Please enter your phone number first");
      return;
    }
    const otp = otpGenerator.generate(6, { 
      digits: true, 
      alphabets: false, 
      upperCase: false, 
      specialChars: false 
    });
    setGeneratedOtp(otp);
    
    // Send OTP via SMS
    const smsSent = await sendSmsMessage(
      formData.phone,
      `Your CD Photography verification code is: ${otp}`
    );
    
    if (smsSent) {
      setOtpSent(true);
      alert("OTP sent to your phone number");
    } else {
      alert("Failed to send OTP. Please try again.");
    }
  };

  const verifyOtp = () => {
    if (formData.otp === generatedOtp) {
      setIsVerified(true);
      alert("Phone number verified successfully!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Please verify your phone number first");
      return;
    }

    setIsLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: "keerthikan.invorgsl@gmail.com",
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      alert("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        otp: "",
        message: "",
      });
      setOtpSent(false);
      setIsVerified(false);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
    setIsLoading(false);
  };
  return (
    <div id="contactus" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-black/80 to-black/50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <TextTransition text="Contact Us" />
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Capturing life&apos;s most precious moments with passion and artistry
          </p>        </div>
      </div>

      {/* Main Content wrapped in PagesUI */}
      <PagesUI>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14 mx-auto max-w-5xl">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl">📍</span>
            </div>
            <h2 className="text-lg font-semibold mb-2">Address</h2>
            <p className="text-gray-600 text-sm">
              CD Photography
              <br />
              No. 4/7/1 Suhada Mawatha, 
              <br />
              Ganemulla 11020
              <br />
              Colombo, Sri Lanka
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl">✉️</span>
            </div>
            <h2 className="text-lg font-semibold mb-2">Email</h2>
            <p className="text-gray-600 text-sm">chamodh@gmail.com</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl">📱</span>
            </div>
            <h2 className="text-lg font-semibold mb-2">Phone</h2>
            <p className="text-gray-600 text-sm">+94 76658 1620</p>
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
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                    placeholder="Eg: +94766581620"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isLoading || isVerified}
                  />
                  <button
                    type="button"
                    className={`${
                      isVerified
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-black hover:bg-gray-800"
                    } text-white px-5 py-3 rounded-lg text-sm font-medium transition-colors`}
                    onClick={handleVerify}
                    disabled={isLoading || isVerified}
                  >
                    {isVerified ? "Verified ✓" : "Verify"}
                  </button>
                </div>
              </div>

              {otpSent && !isVerified && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Enter OTP*
                  </label>
                  <div className="flex gap-2">
                    <input
                      className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      type="text"
                      placeholder="Enter OTP"
                      name="otp"
                      value={formData.otp}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      className="bg-black text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                      onClick={verifyOtp}
                      disabled={isLoading}
                    >
                      Verify OTP
                    </button>
                  </div>
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
                  disabled={isLoading}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading || !isVerified}
              >
                {isLoading ? "Sending..." : "Submit form"}
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
                  +94 76658 1620
                </span>
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-medium mb-4">Follow us on</h3>
              <div className="flex justify-between">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-600 hover:text-blue-600"
                >
                  <i className="fa-brands fa-facebook text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-600 hover:text-pink-600"
                >
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-600 hover:text-red-600"
                >
                  <i className="fa-brands fa-pinterest text-xl"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-600 hover:text-red-600"
                >
                  <i className="fa-brands fa-youtube text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16 max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Find us on map</h3>
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

        </div>      </div>
      </PagesUI>
    </div>
  );
};

export default ContactUs;
