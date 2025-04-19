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
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:px-10 relative bg-[#f8f9fa] top-40">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Discover some of the Artistic Approach Photography</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Contact us</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Get Quote in 15min</h3>
            <p className="text-gray-600">This is just a simple enquiry form click here to fill out.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Virtual Meeting</h3>
            <p className="text-gray-600">Click here to scheduled your online meeting with our sales team.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Worldwide service</h3>
            <p className="text-gray-600">We can pack up anywhere to capture your moments.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Book yours now</h3>
            <p className="text-gray-600">Your slots filling super fast. Book your slot as soon as possible.</p>
          </div>
        </div>

        {/* Premium Services */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Services</h3>
          <p className="text-gray-700 mb-6">
            Get the customized Quote for your Dream Wedding!
          </p>
          <p className="text-gray-600">
            By filling this "Enquiry Form" – quotation will be generated against the accuracy of details given by you.
          </p>
        </div>

        {/* CTA */}
        {/* <div className="mb-12">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Get Quote!
          </button>
        </div> */}

        

        {/* Form Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          FILL this form & Get Quote in 15min
        </h3>
        <p className="text-gray-600 mb-12">
          Give us a few details for your customized quotation, our team will reach out as soon as possible.
        </p>

        {/* Booking Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Couple name</label>
              <input
                type="text"
                name="coupleName"
                placeholder="E.g. (Kwon & Dryay)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                value={formData.coupleName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number*</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="E.g.: 919988776553"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Choose Event</label>
              <select
                name="eventType"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
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
              <label className="block text-gray-700 font-medium mb-2">Venue</label>
              <input
                type="text"
                name="venue"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                value={formData.venue}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Date</label>
              <input
                type="date"
                name="date"
                placeholder="mm / dd / yyyy"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">No. Of Guests</label>
              <select
                name="guestCount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
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

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Write your message below</label>
            <textarea
              name="message"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email address*</label>
              <input
                type="email"
                name="email"
                placeholder="E.g. (urnshume@gmail.com)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Enter OTP*</label>
              <div className="flex">
                <input
                  type="text"
                  name="otp"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  value={formData.otp}
                  onChange={handleChange}
                />
                <button className="bg-black hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-r-md">
                  Verify
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Time</label>
              <select
                name="time"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
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
              <label className="block text-gray-700 font-medium mb-2">More Events</label>
              <select
                name="moreEvents"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                value={formData.moreEvents}
                onChange={handleChange}
              >
                <option value="4:00">4:00</option>
                <option value="6:00">6:00</option>
                <option value="8:00">8:00</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Service Required</label>
              <select
                name="serviceRequired"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
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
              <label className="block text-gray-700 font-medium mb-2">How do you know?</label>
              <select
                name="howDidYouKnow"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
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

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg text-lg"
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