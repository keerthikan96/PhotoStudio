import { useState } from 'react';
import emailjs from 'emailjs-com';
// Import wedding image
import weddingImage from '../../assets/Images/image2.jpg';

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
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
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
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex flex-col relative bg-[#f8f9fa] mt-12 sm:mt-16 md:mt-20 lg:mt-24">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header with Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h1 className="text-lg font-medium">Discover some of the Artistic Approach Photography</h1>
              </div>
              <div className="flex items-center mt-4">
                <span className="text-sm text-gray-600">Contact us</span>
                <div className="ml-2 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xs">?</span>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
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
            By filling this "Enquiry Form" – quotation will be generated against the accuracy of details given by you.
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
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
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
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

        {/* Chat Widget Indicator */}
        <div className="fixed bottom-6 right-6 bg-white rounded-full shadow-lg p-4 flex items-center justify-center">
          <div className="mr-2 text-sm font-medium">Chat with us</div>
          <div className="bg-gray-800 text-white rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;