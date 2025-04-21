import { useState } from 'react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    coupleName: '',
    phoneNumber: '',
    eventType: '',
    venue: '',
    date: '',
    guestCount: 'Below 100',
    message: '',
    email: '',
    otp: '',
    time: '6:00 AM',
    serviceRequired: '',
    howDidYouKnow: 'Website'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex flex-col relative bg-[#f8f9fa] mt-12 sm:mt-16 md:mt-20 lg:mt-24">
      <div className="max-w-3xl mx-auto text-center w-full">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Discover some of the Artistic Approach Photography</h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 sm:mb-8">Contact us</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Get Quote in 15min</h3>
            <p className="text-gray-600 text-sm sm:text-base">This is just a simple enquiry form click here to fill out.</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Virtual Meeting</h3>
            <p className="text-gray-600 text-sm sm:text-base">Click here to scheduled your online meeting with our sales team.</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Worldwide service</h3>
            <p className="text-gray-600 text-sm sm:text-base">We can pack up anywhere to capture your moments.</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Book yours now</h3>
            <p className="text-gray-600 text-sm sm:text-base">Your slots filling super fast. Book your slot as soon as possible.</p>
          </div>
        </div>

        {/* Premium Services */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Premium Services</h3>
          <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
            Get the customized Quote for your Dream Wedding!
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            By filling this "Enquiry Form" – quotation will be generated against the accuracy of details given by you.
          </p>
        </div>

        {/* Form Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-8">
          FILL this form & Get Quote in 15min
        </h3>
        <p className="text-gray-600 mb-6 sm:mb-12 text-sm sm:text-base">
          Give us a few details for your customized quotation, our team will reach out as soon as possible.
        </p>

        {/* Booking Form */}
        <div className="bg-white p-5 sm:p-8 rounded-lg shadow-lg text-left w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Couple name</label>
              <input
                type="text"
                name="coupleName"
                placeholder="E.g. (Kwon & Dryay)"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm sm:text-base"
                value={formData.coupleName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Phone Number*</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="E.g.: 919988776553"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm sm:text-base"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Choose Event</label>
              <select
                name="eventType"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm sm:text-base"
                value={formData.eventType}
                onChange={handleChange}
              >
                <option value="">Select an event</option>
                <option value="Engagement">Engagement</option>
                <option value="Wedding">Wedding</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Venue</label>
              <input
                type="text"
                name="venue"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm sm:text-base"
                value={formData.venue}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Date</label>
              <input
                type="date"
                name="date"
                placeholder="mm / dd / yyyy"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm sm:text-base"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">No. Of Guests</label>
              <select
                name="guestCount"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm sm:text-base"
                value={formData.guestCount}
                onChange={handleChange}
              >
                <option value="Below 100">Below 100</option>
                <option value="100-200">100-200</option>
                <option value="200-300">200-300</option>
                <option value="300+">300+</option>
              </select>
            </div>
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Write your message below</label>
            <textarea
              name="message"
              rows="3"
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm sm:text-base"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Email address*</label>
              <input
                type="email"
                name="email"
                placeholder="E.g. (urnshume@gmail.com)"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm sm:text-base"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Enter OTP*</label>
              <div className="flex">
                <input
                  type="text"
                  name="otp"
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm sm:text-base"
                  value={formData.otp}
                  onChange={handleChange}
                />
                <button className="bg-black hover:bg-gray-700 text-white font-medium px-3 sm:px-4 py-2 rounded-r-md text-sm sm:text-base">
                  Verify
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Time</label>
              <select
                name="time"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm sm:text-base"
                value={formData.time}
                onChange={handleChange}
              >
                <option value="6:00 AM">6:00 AM</option>
                <option value="8:00 AM">8:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">More Events</label>
              <select
                name="moreEvents"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm sm:text-base"
                value={formData.moreEvents}
                onChange={handleChange}
              >
                <option value="4:00">4:00</option>
                <option value="6:00">6:00</option>
                <option value="8:00">8:00</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Service Required</label>
              <select
                name="serviceRequired"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm sm:text-base"
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
              <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">How do you know?</label>
              <select
                name="howDidYouKnow"
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm sm:text-base"
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

          <div className="mt-6 sm:mt-8">
            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 sm:py-3 px-4 rounded-lg text-sm sm:text-lg"
            >
              Submit Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;