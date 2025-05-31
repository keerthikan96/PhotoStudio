import { useState } from "react";
import { PagesUI } from "../PagesUI";
import TextTransition from "../TextTransition";
import emailjs from "emailjs-com";
import otpGenerator from "otp-generator";
import { SmsClient } from "@azure/communication-sms";

// Import images
import bg13 from "../../assets/Images/bg-13.jpg";
import bg14 from "../../assets/Images/bg-14.jpg";
import serviceview1 from "../../assets/Images/serviceview1.jpg";
import serviceview2 from "../../assets/Images/serviceview2.jpg";
import serviceview3 from "../../assets/Images/serviceview3.jpg";
import pt1 from "../../assets/Images/pt-1.jpg";
import pt2 from "../../assets/Images/pt-2.jpg";
import pt3 from "../../assets/Images/pt-3.jpg";
import image1 from "../../assets/Images/image1.jpg";
import image2 from "../../assets/Images/image2.jpg";
import image3 from "../../assets/Images/image3.jpg";
import image4 from "../../assets/Images/image4.jpg";
import image5 from "../../assets/Images/image5.jpg";
import image6 from "../../assets/Images/image6.jpg";
import image7 from "../../assets/Images/image7.jpg";
import image8 from "../../assets/Images/image8.jpg";

const ContactUs = () => {
  // Array of portfolio images
  const portfolioImages = [image1, image2, image3, image4, image5, image6, image7, image8];
  
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
      const smsClient = new SmsClient(
        import.meta.env.VITE_AZURE_COMMUNICATION_CONNECTION_STRING
      );
      const sendResult = await smsClient.send({
        from: import.meta.env.VITE_AZURE_PHONE_NUMBER, // Your Azure Communication Services phone number
        to: phoneNumber,
        message: message,
      });

      console.log("SMS sent successfully:", sendResult);
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
      specialChars: false,
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
    <div
      id="contactus"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100"
    >
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Multiple Background Layers for Depth */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-700"
          style={{
            backgroundImage: `url(${bg14})`,
          }}
        ></div>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80"></div>
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/20 rounded-full animate-bounce delay-1000"></div>
        {/* Modern Floating Cards */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-white/5 backdrop-blur-sm rounded-3xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 backdrop-blur-sm rounded-3xl -rotate-12 animate-pulse delay-1000"></div>
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight">
              <TextTransition text="Get in " />
              <span className="font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>{" "}
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed opacity-90">
              Let&apos;s create something extraordinary together. Every great
              project starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 font-medium">
                Schedule a Call
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium">
                View Portfolio
              </button>
            </div>
          </div>
        </div>{" "}
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>{" "}
      {/* Main Content wrapped in PagesUI */}
      <PagesUI>
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl py-16">
          {/* Contact Info Cards with Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img
                  src={serviceview1}
                  alt="Our Location"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>{" "}
              <div className="p-8 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Visit Our Studio
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  CD Photography Studio
                  <br />
                  No. 4/7/1 Suhada Mawatha,
                  <br />
                  Ganemulla 11020
                  <br />
                  Colombo, Sri Lanka
                </p>
                <button className="mt-6 text-gray-700 font-semibold hover:text-gray-900 transition-colors">
                  Get Directions →
                </button>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img
                  src={serviceview2}
                  alt="Email Us"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>{" "}
              <div className="p-8 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Email Us
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ready to discuss your project? Send us an email and we&apos;ll
                  get back to you within 24 hours.
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  chamodh@gmail.com
                </p>
                <button className="mt-6 text-gray-700 font-semibold hover:text-gray-900 transition-colors">
                  Send Email →
                </button>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img
                  src={serviceview3}
                  alt="Call Us"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>{" "}
              <div className="p-8 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Call Us
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Prefer to talk? Give us a call and let&apos;s discuss your
                  photography needs directly.
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  +94 76658 1620
                </p>
                <button className="mt-6 text-gray-700 font-semibold hover:text-gray-900 transition-colors">
                  Call Now →
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Contact Form - Modernized */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Form Header with Image */}
                <div className="relative h-32 bg-gradient-to-r from-gray-900 via-gray-800 to-black overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img
                      src={bg13}
                      alt="Contact Background"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10 p-8 text-white">
                    <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                      <span className="text-sm font-medium">
                        Let&apos;s Connect
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold">Start Your Journey</h2>
                  </div>
                </div>

                <form className="p-8 md:p-12" onSubmit={handleSubmit}>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Tell us about your vision, and let&apos;s create something
                    extraordinary together. Our team will reach out to you as
                    soon as possible.
                  </p>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Full Name*
                        </label>
                        <input
                          className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                          type="text"
                          placeholder="Your full name"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Email Address*
                        </label>
                        <input
                          className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                          type="email"
                          placeholder="your@email.com"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Phone Number*
                      </label>
                      <div className="flex gap-3">
                        <input
                          className="flex-1 border-2 border-gray-200 rounded-2xl px-6 py-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                          type="tel"
                          placeholder="+94 76658 1620"
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
                              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          } text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                          onClick={handleVerify}
                          disabled={isLoading || isVerified}
                        >
                          {isVerified ? "Verified ✓" : "Verify"}
                        </button>
                      </div>
                    </div>

                    {otpSent && !isVerified && (
                      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Enter Verification Code*
                        </label>
                        <div className="flex gap-3">
                          <input
                            className="flex-1 border-2 border-blue-200 rounded-2xl px-6 py-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                            type="text"
                            placeholder="Enter 6-digit code"
                            name="otp"
                            value={formData.otp}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                          />
                          <button
                            type="button"
                            className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                            onClick={verifyOtp}
                            disabled={isLoading}
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Tell us about your project*
                      </label>
                      <textarea
                        className="w-full border-2 border-gray-200 rounded-2xl px-6 py-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none"
                        placeholder="Describe your photography needs, preferred dates, location, and any special requirements..."
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-5 rounded-2xl text-lg font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                      disabled={isLoading || !isVerified}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>{" "}
            {/* Modern Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Why Choose Us Section with Images */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">
                    Why Choose CD Photography?
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                        <img
                          src={pt1}
                          alt="Professional Team"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Professional Team
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Experienced photographers with a passion for capturing
                          perfect moments
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                        <img
                          src={pt2}
                          alt="Modern Equipment"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Modern Equipment
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          State-of-the-art cameras and lighting for stunning
                          results
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                        <img
                          src={pt3}
                          alt="Quick Delivery"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Quick Delivery
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Fast turnaround times without compromising on quality
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}              {/* Quick Actions */}
              <div className="grid grid-cols-1 gap-4">
                <div className="group bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-6 text-white hover:from-gray-900 hover:to-black transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-2">Get Directions</h4>
                      <p className="text-gray-300 text-sm">
                        Navigate to our studio
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <span className="text-xl">🗺️</span>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-r from-gray-700 to-gray-800 rounded-3xl p-6 text-white hover:from-gray-800 hover:to-gray-900 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-2">Quick Call</h4>
                      <p className="text-gray-300 text-sm">+94 76658 1620</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <span className="text-xl">📞</span>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-r from-gray-600 to-gray-700 rounded-3xl p-6 text-white hover:from-gray-700 hover:to-gray-800 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-2">WhatsApp</h4>
                      <p className="text-gray-300 text-sm">Quick message</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <span className="text-xl">💬</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Our Journey Section - Standalone */}
          <div className="mt-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Follow Our Journey
                </h2>
                <div className="w-20 h-1 bg-gray-800 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Stay connected with our latest captures, behind-the-scenes moments, and photography inspiration
                </p>
              </div>

              {/* Social Media Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a
                  href="#"
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl text-center"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <i className="fa-brands fa-facebook text-white text-2xl"></i>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">Facebook</h3>
                    <p className="text-gray-300 text-sm">Latest updates & events</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl text-center"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <i className="fa-brands fa-instagram text-white text-2xl"></i>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">Instagram</h3>
                    <p className="text-gray-300 text-sm">Daily stories & captures</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl text-center"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <i className="fa-brands fa-pinterest text-white text-2xl"></i>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">Pinterest</h3>
                    <p className="text-gray-300 text-sm">Creative inspiration</p>
                  </div>
                </a>

                <a
                  href="#"
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl text-center"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <i className="fa-brands fa-youtube text-white text-2xl"></i>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">YouTube</h3>
                    <p className="text-gray-300 text-sm">Video content & tutorials</p>
                  </div>
                </a>
              </div>

              {/* Call to action */}
              <div className="text-center mt-12">
                <p className="text-gray-500 text-lg mb-6">
                  Join our community of photography enthusiasts
                </p>
                <div className="flex justify-center space-x-4">
                  <span className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-full text-sm">
                    📸 1.2K+ Followers
                  </span>
                  <span className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-full text-sm">
                    ❤️ 500+ Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Map Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Find Our Studio
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Located in the heart of Ganemulla, our modern studio is equipped
                with everything needed for your perfect shoot
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10 pointer-events-none"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506827.0521913008!2d79.37596321105961!3d7.057793435205112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f968b92af321%3A0xcf0849422cc21294!2sChamodh%20Delpearachchi%20Photography!5e0!3m2!1sen!2slk!4v1745660507287!5m2!1sen!2slk"
                width="100%"
                title="Google Map - CD Photography Location"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Portfolio Preview Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Recent Work
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Get inspired by our latest photography projects
              </p>
            </div>            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
                >
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-semibold">View Project</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-gray-900 to-black text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                View Full Portfolio
              </button>
            </div>
          </div>
        </div>
      </PagesUI>
    </div>
  );
};

export default ContactUs;
