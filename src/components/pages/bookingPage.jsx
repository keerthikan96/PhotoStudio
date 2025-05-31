import { useState } from "react";
import emailjs from "emailjs-com";
import {
  HiCamera,
  HiClock,
  HiGlobe,
  HiCalendar,
  HiVideoCamera,
  HiQuestionMarkCircle,
  HiChevronDoubleRight,
} from "react-icons/hi";
import { PagesUI } from "../PagesUI";
import TextTransition from "../TextTransition";
import { RevealOnScroll } from "../RevealOnScroll";
// Import wedding image
import weddingImage from "../../assets/Images/image2.jpg";
// Import portfolio images
import portfolioImg1 from "../../assets/Images/pt-1.jpg";
import portfolioImg2 from "../../assets/Images/pt-2.jpg";
import portfolioImg3 from "../../assets/Images/pt-3.jpg";
import portfolioImg4 from "../../assets/Images/pt-4.jpg";
// Import background images
import bg4 from "../../assets/Images/bg-4.jpg";
import bg12 from "../../assets/Images/bg-12.jpg";
import portfolioImg5 from "../../assets/Images/pt-5.jpg";
import portfolioImg6 from "../../assets/Images/pt-6.jpg";
import serviceImg1 from "../../assets/Images/serviceview1.jpg";
import serviceImg2 from "../../assets/Images/serviceview2.jpg";
import serviceImg3 from "../../assets/Images/serviceview3.jpg";

// Get environment variables from import.meta.env (Vite's way of handling env variables)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const BookingPage = () => {
  const [formData, setFormData] = useState({
    coupleName: "",
    phoneNumber: "",
    eventType: "Engagement",
    venue: "",
    date: "",
    guestCount: "Below 100",
    message: "",
    email: "",
    otp: "",
    time: "6:00 AM",
    serviceRequired: "",
    howDidYouKnow: "Website",
    moreEvents: "4:00",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (formData) => {
    const requiredFields = [
      "coupleName",
      "phoneNumber",
      "eventType",
      "venue",
      "date",
      "email",
      "otp",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return `Please fill out the ${field} field.`;
      }
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm(formData);
    if (validationError) {
      alert(validationError);
      return;
    }

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_USER_ID)
      .then(() => {
        alert("Your enquiry has been sent successfully!");
        setFormData({
          coupleName: "",
          phoneNumber: "",
          eventType: "Engagement",
          venue: "",
          date: "",
          guestCount: "Below 100",
          message: "",
          email: "",
          otp: "",
          time: "6:00 AM",
          serviceRequired: "",
          howDidYouKnow: "Website",
          moreEvents: "4:00",
        });
      })
      .catch(() => {
        alert("Failed to send your enquiry. Please try again later.");
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `url(${bg4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Modern Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(${bg12})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
        
        {/* Floating elements for modern touch */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider uppercase">
              Professional Booking
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight mb-6 tracking-tight">
            <TextTransition text="Make Your Enquiry" />
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed opacity-90">
            Start your journey with us - Get a personalized quote in just 15 minutes
          </p>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
          <div className="animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content wrapped in PagesUI */}
      <PagesUI>        <div className="space-y-20">
          {/* Header with Image Section */}
          <RevealOnScroll>
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center mb-6">
                        <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-xl mr-4 shadow-lg">
                          <HiCamera className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-light text-gray-900">
                          Discover Artistic Approach Photography
                        </h2>
                      </div>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        Transform your special moments into timeless memories with our professional photography services.
                      </p>
                      <div className="flex items-center">
                        <span className="text-gray-700 font-medium">Contact us</span>
                        <div className="ml-3 w-10 h-10 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                          <HiChevronDoubleRight className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2">
                      <img
                        src={weddingImage}
                        alt="Wedding Couple"
                        className="w-full h-full object-cover min-h-[400px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Enhanced Features Grid */}
          <RevealOnScroll>
            <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                    <TextTransition text="Why Choose Us?" />
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Experience professional photography services with unmatched quality and creativity
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-gray-600 to-gray-800 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        <HiClock className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Quote in 15min</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Quick and easy enquiry process to get your personalized photography quote
                      </p>
                    </div>
                  </div>

                  <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-gray-600 to-gray-800 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        <HiVideoCamera className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Virtual Meeting</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Schedule online consultations to discuss your photography needs and preferences
                      </p>
                    </div>
                  </div>

                  <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-gray-600 to-gray-800 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        <HiGlobe className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Worldwide Service</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Professional photography services available anywhere to capture your special moments
                      </p>
                    </div>
                  </div>

                  <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-gray-600 to-gray-800 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        <HiCalendar className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Book Yours Now</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Limited slots available - secure your preferred date with our premium photography services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>          {/* Enhanced CTA Section */}
          <RevealOnScroll>
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 p-12 lg:p-16 rounded-3xl shadow-2xl text-center relative overflow-hidden">
                  {/* Background decorative elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl lg:text-4xl font-light text-white mb-6">
                      Get Customized Quote for Your Dream Wedding!
                    </h3>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                      Fill out our enquiry form and receive a personalized quotation based on your specific requirements
                    </p>
                    <button className="group relative px-10 py-4 bg-white text-gray-900 font-semibold tracking-wide rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <span className="relative z-10">Get Your Quote!</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>          {/* Form Section */}
          <RevealOnScroll>
            <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Form Title */}
                <div className="text-center mb-16">
                  <h3 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                    <TextTransition text="FILL This Form & Get Quote in 15min" />
                  </h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Provide us with your details for a personalized quotation. Our team will reach out as soon as possible.
                  </p>
                </div>

                {/* Portfolio Gallery Section */}
                <div className="mb-16">
                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-semibold text-gray-900 mb-4">Our Latest Work</h4>
                    <p className="text-gray-600">Capturing beautiful moments with artistic excellence</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[portfolioImg1, portfolioImg2, portfolioImg3, portfolioImg4, portfolioImg5, portfolioImg6].map((img, index) => (
                      <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                        <img 
                          src={img} 
                          alt={`Portfolio ${index + 1}`}
                          className="w-full h-32 md:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Two Column Layout: Form + Images */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Form Column - Takes 2/3 width */}
                  <div className="lg:col-span-2">
                    {/* Enhanced Booking Form */}
                    <form
                      onSubmit={handleSubmit}
                      className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-gray-100"
                    >                  {/* Personal Information & Event Details - Combined */}
                  <div className="mb-8">
                    <h4 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      Personal & Event Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">
                          Couple Name *
                        </label>
                        <input
                          type="text"
                          name="coupleName"
                          placeholder="E.g. (Kwon & Dryay)"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                          value={formData.coupleName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="E.g. (urnshume@gmail.com)"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          placeholder="E.g. +94 77 123 4567"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">
                          Choose Event *
                        </label>
                        <select
                          name="eventType"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 bg-white"
                          value={formData.eventType}
                          onChange={handleChange}
                        >
                          <option value="Engagement">Engagement</option>
                          <option value="Wedding">Wedding</option>
                          <option value="Anniversary">Anniversary</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Date, Venue & Time - Combined */}
                  <div className="mb-8">
                    <h4 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      Date, Venue & Time
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">
                          Date *
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            name="date"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                            value={formData.date}
                            onChange={handleChange}
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <HiCalendar className="w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">
                          Venue *
                        </label>
                        <input
                          type="text"
                          name="venue"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                          value={formData.venue}
                          onChange={handleChange}
                          placeholder="Enter venue location"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">
                          Time
                        </label>
                        <input
                          type="time"
                          name="time"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                          value={formData.time}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>                  {/* Service Requirements & Verification */}
                  <div className="mb-8">
                    <h4 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      Service Requirements & Verification
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">
                          Number of Guests
                        </label>
                        <select
                          name="guestCount"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 bg-white"
                          value={formData.guestCount}
                          onChange={handleChange}
                        >
                          <option value="Below 100">Below 100</option>
                          <option value="100-200">100-200</option>
                          <option value="200-300">200-300</option>
                          <option value="300+">300+</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">
                          Service Required
                        </label>
                        <select
                          name="serviceRequired"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 bg-white"
                          value={formData.serviceRequired}
                          onChange={handleChange}
                        >
                          <option value="">Select Service</option>
                          <option value="Photography">Photography</option>
                          <option value="Videography">Videography</option>
                          <option value="Both">Both Photography & Videography</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">
                          How Did You Find Us?
                        </label>
                        <select
                          name="howDidYouKnow"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 bg-white"
                          value={formData.howDidYouKnow}
                          onChange={handleChange}
                        >
                          <option value="Website">Website</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Friend">Friend Recommendation</option>
                          <option value="Advertisement">Advertisement</option>
                          <option value="Google Search">Google Search</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">
                          Enter OTP *
                        </label>
                        <div className="flex rounded-xl overflow-hidden">
                          <input
                            type="text"
                            name="otp"
                            className="w-full px-4 py-3 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                            value={formData.otp}
                            onChange={handleChange}
                            placeholder="Enter verification code"
                          />
                          <button
                            type="button"
                            className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white font-medium px-6 py-3 rounded-r-xl transition-all duration-200"
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <h4 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      Additional Message
                    </h4>
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">
                        Tell us about your vision
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-none"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share any special requirements, themes, or ideas you have for your photography session..."
                      ></textarea>
                    </div>
                  </div>                  {/* Submit Button */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-center mb-4">
                      <p className="text-gray-600">
                        Ready to capture your special moments? Submit your enquiry and we&apos;ll get back to you within 15 minutes.
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="group relative w-full bg-gradient-to-r from-gray-800 via-black to-gray-800 hover:from-gray-900 hover:via-gray-800 hover:to-gray-900 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <HiQuestionMarkCircle className="mr-2 h-5 w-5" />
                        Submit Enquiry & Get Quote
                      </span>
                      <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </form>
              </div>

              {/* Images Sidebar - Takes 1/3 width */}
              <div className="lg:col-span-1 space-y-6">
                {/* Service Showcase */}
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Services</h4>
                  <div className="space-y-4">
                    <div className="group relative overflow-hidden rounded-2xl">
                      <img 
                        src={serviceImg1} 
                        alt="Wedding Photography"
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <p className="text-white font-medium p-3">Wedding Photography</p>
                      </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl">
                      <img 
                        src={serviceImg2} 
                        alt="Engagement Sessions"
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <p className="text-white font-medium p-3">Engagement Sessions</p>
                      </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl">
                      <img 
                        src={serviceImg3} 
                        alt="Event Photography"
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <p className="text-white font-medium p-3">Event Photography</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Tips */}
                <div className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-3xl shadow-xl text-white">
                  <h4 className="text-xl font-semibold mb-4">📸 Quick Tips</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Book 6-12 months in advance for wedding dates
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Share your vision and style preferences
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Consider lighting and venue logistics
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Discuss backup plans for outdoor events
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p className="flex items-center">
                      <HiCamera className="w-4 h-4 mr-2 text-gray-400" />
                      Professional Photography Studio
                    </p>
                    <p className="flex items-center">
                      <HiClock className="w-4 h-4 mr-2 text-gray-400" />
                      Response within 15 minutes
                    </p>
                    <p className="flex items-center">
                      <HiGlobe className="w-4 h-4 mr-2 text-gray-400" />
                      Worldwide service available
                    </p>
                  </div>
                </div>
              </div>
            </div>            </div>
          </div>
        </RevealOnScroll>
        </div>
      </PagesUI>
    </div>
  );
};

export default BookingPage;
