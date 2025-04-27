import { useState } from 'react';
import emailjs from 'emailjs-com';
import { HiCamera, HiClock, HiGlobe, HiCalendar, HiVideoCamera, HiQuestionMarkCircle, HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { PagesUI } from '../PagesUI';
import TextTransition from "../TextTransition"
// Import wedding image
import weddingImage from '../../assets/Images/image2.jpg';

// Get environment variables from import.meta.env (Vite's way of handling env variables)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const BookingPage = () => {
  const [formData, setFormData] = useState({
    coupleName: '',
    phoneNumber: '',
    eventType: 'Engagement',
    venue: '',
    date: '',
    guestCount: 'Below 100',
    message: '',
    email: '',
    otp: '',
    time: '6:00 AM',
    serviceRequired: '',
    howDidYouKnow: 'Website',
    moreEvents: '4:00'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (formData) => {
    const requiredFields = ['coupleName', 'phoneNumber', 'eventType', 'venue', 'date', 'email', 'otp'];
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
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_USER_ID
      )
      .then(() => {
        alert('Your enquiry has been sent successfully!');
        setFormData({
          coupleName: '',
          phoneNumber: '',
          eventType: 'Engagement',
          venue: '',
          date: '',
          guestCount: 'Below 100',
          message: '',
          email: '',
          otp: '',
          time: '6:00 AM',
          serviceRequired: '',
          howDidYouKnow: 'Website',
          moreEvents: '4:00'
        });
      })
      .catch(() => {
        alert('Failed to send your enquiry. Please try again later.');
      });
  };

  return (
    <div id="faq" className="min-h-screen bg-[#f0f2f4] mt-10">
    <div className="flex flex-col items-center justify-center w-full mx-auto py-4 sm:py-6 md:py-8 text-gray-900">
      {/* Hero Section */}
      <div className="mx-4 md:mx-auto max-w-7xl md:w-full px-4 sm:px-6 md:px-8 bg-gray-800 text-white py-6 sm:py-8 md:py-10 text-center rounded-lg mb-8">
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold">
          <TextTransition
            text={"Make Your Enquiry"}
          />
        </h1>
        <p className="text-xs sm:text-sm mt-2">
        Home/Make Your Enquiry 
        </p>
        {/* <p className="text-gray-600 mb-4">
                It is important for me as a professional that every problem
                has a solution,
              </p>
              <p className="text-gray-600">
                you just need to start working for it! Here are answers.
              </p> */}
      </div>
        <PagesUI>
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          {/* Header with Image */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 p-2 rounded-md mr-3">
                    <HiCamera className="h-5 w-5" />
                  </div>
                  <h1 className="text-lg font-medium">Discover some of the Artistic Approach Photography </h1>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-sm text-gray-600">Contact us</span>
                  <div className="ml-2 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                    <HiChevronDoubleRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img src={weddingImage} alt="Wedding Couple" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                <div className="bg-gray-100 p-2 rounded-md mr-3">
                  <HiClock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Get Quote in 15min</h3>
                  <p className="text-sm text-gray-600 mt-2">This is just a simple enquiry form, click here to fill out.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                <div className="bg-gray-100 p-2 rounded-md mr-3">
                  <HiVideoCamera className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Virtual Meeting</h3>
                  <p className="text-sm text-gray-600 mt-2">Click here to schedule your online meeting with our team.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                <div className="bg-gray-100 p-2 rounded-md mr-3">
                  <HiGlobe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Worldwide service</h3>
                  <p className="text-sm text-gray-600 mt-2">We can pack up anywhere to capture your moments.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                <div className="bg-gray-100 p-2 rounded-md mr-3">
                  <HiCalendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Book yours now</h3>
                  <p className="text-sm text-gray-600 mt-2">Your slots filling super fast. Book your slot as soon as possible.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Services */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-10 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get the customized Quote for your Dream Wedding!</h3>
            <p className="text-gray-700 text-sm mb-4">
              By filling this &ldquo;Enquiry Form&rdquo; – quotation will be generated against the accuracy of details given by you.
            </p>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-md">Get Quote!</button>
          </div>

          {/* Form Title */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              FILL this form & Get Quote in 15min
            </h3>
            <p className="text-gray-600 text-sm">
              Give us a few details for your customized quotation, our team will reach out as soon as possible.
            </p>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg text-left w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Couple name</label>
                <input
                  type="text"
                  name="coupleName"
                  placeholder="E.g. (Kwon & Dryay)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  value={formData.coupleName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Email address*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="E.g. (urnshume@gmail.com)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Photo Portfolio*</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-l-md border-r-0 border-gray-300">
                    <HiCamera className="h-4 w-4" />
                  </span>
                  <input
                    type="text"
                    name="photoPortfolio"
                    className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                    placeholder="Sample Photography Link/ID"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Enter OTP*</label>
                <div className="flex">
                  <input
                    type="text"
                    name="otp"
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                    value={formData.otp}
                    onChange={handleChange}
                  />
                  <button type="button" className="bg-black hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-r-md text-sm">
                    Verify
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Choose Event</label>
                <select
                  name="eventType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm bg-white"
                  value={formData.eventType}
                  onChange={handleChange}
                >
                  <option value="Engagement">Engagement</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Date</label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    placeholder="mm / dd / yyyy"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <HiCalendar className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Venue</label>
                <input
                  type="text"
                  name="venue"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  value={formData.venue}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Time</label>
                <input
                  type="time"
                  name="time"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">More Events</label>
                <div className="flex">
                  <select
                    name="moreEvents"
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm bg-white"
                    value={formData.moreEvents}
                    onChange={handleChange}
                  >
                    <option value="4:00">4:00</option>
                    <option value="6:00">6:00</option>
                    <option value="8:00">8:00</option>
                  </select>
                  <button type="button" className="bg-gray-900 hover:bg-gray-700 text-white font-medium px-3 py-2 rounded-r-md text-sm">
                    ADD
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">No. Of Guests</label>
                <select
                  name="guestCount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm bg-white"
                  value={formData.guestCount}
                  onChange={handleChange}
                >
                  <option value="Below 100">Below 100</option>
                  <option value="100-200">100-200</option>
                  <option value="200-300">200-300</option>
                  <option value="300+">300+</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Service Required</label>
                <select
                  name="serviceRequired"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm bg-white"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                >
                  <option value="">Nothing selected</option>
                  <option value="Photography">Photography</option>
                  <option value="Videography">Videography</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">How do you know?</label>
                <select
                  name="howDidYouKnow"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm bg-white"
                  value={formData.howDidYouKnow}
                  onChange={handleChange}
                >
                  <option value="Website">Website</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friend">Friend</option>
                  <option value="Advertisement">Advertisement</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 text-sm">Phone Number*</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="E.g.: 919988776553"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 text-sm">Write your message below</label>
              <textarea
                name="message"
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg text-base transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        </PagesUI>
      </div>
    </div>
  );
};

export default BookingPage;