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
    <div className="min-h-screen bg-gray-100 pt-16 pb-8">
      {/* Header Banner */}
      <div className="w-full bg-gray-600 text-white py-16 mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Make Your Enquiry</h1>
        <div className="flex justify-center items-center">
          <a href="/" className="hover:underline">Home</a>
          <span className="mx-2">›</span>
          <span>Make Your Enquiry</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            {/* Left side content */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Premium Services</h3>
                  <h2 className="text-3xl font-bold mb-4">Get the customized Quote for your Dream Wedding!</h2>
                  <p className="text-gray-600 mb-4">
                    By filling this "Enquiry Form" – quotation will be generated against the accuracy of details given by you.
                  </p>
                  <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg w-full flex items-center justify-center">
                    <span className="mr-2">👑</span> Get Quote!
                  </button>
                </div>
              </div>

              {/* Right side with image and features */}
              <div className="md:col-span-3">
                <div className="relative rounded-xl overflow-hidden mb-8">
                  <div className="flex items-center justify-between bg-white rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <div className="text-3xl mr-4">📸</div>
                      <div>
                        <h3 className="font-bold">Discover some of the Artistic Approach Photography</h3>
                        <p>Contact us</p>
                      </div>
                    </div>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-full flex items-center">
                      <span className="mr-1">Contact us</span>
                      <span className="text-xl">⟩</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="flex items-start">
                        <div className="mr-3 text-2xl">📋</div>
                        <div>
                          <h4 className="font-bold mb-1">Get Quote in 15min</h4>
                          <p className="text-sm text-gray-600">This is just a simple enquiry form click here to fill out.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="flex items-start">
                        <div className="mr-3 text-2xl">👥</div>
                        <div>
                          <h4 className="font-bold mb-1">Virtual Meeting</h4>
                          <p className="text-sm text-gray-600">Click here to scheduled your online meeting with our sales team.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="flex items-start">
                        <div className="mr-3 text-2xl">🌍</div>
                        <div>
                          <h4 className="font-bold mb-1">Worldwide service</h4>
                          <p className="text-sm text-gray-600">We can pack up anywhere to capture your moments.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow">
                      <div className="flex items-start">
                        <div className="mr-3 text-2xl">🔍</div>
                        <div>
                          <h4 className="font-bold mb-1">Book yours now</h4>
                          <p className="text-sm text-gray-600">Your slots filling super fast. Book your slot as soon as possible.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form Section */}
        <div className="max-w-3xl mx-auto">
          {/* Form Title */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              FILL this form & Get Quote in 15min
            </h3>
            <p className="text-gray-600 mb-6">
              Give us a few details for your customized quotation, our team will reach out as soon as possible.
            </p>
          </div>

          {/* Premium Services */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Services</h3>
            <p className="text-gray-700 mb-4">
              Get the customized Quote for your Dream Wedding!
            </p>
            <p className="text-gray-600">
              By filling this "Enquiry Form" – quotation will be generated against the accuracy of details given by you.
            </p>
          </div>

          {/* Booking Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Couple name</label>
                <input
                  type="text"
                  name="coupleName"
                  placeholder="E.g. (Kwon & Dryay)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  value={formData.coupleName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone Number*</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="E.g.: 919988776553"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Choose Event</label>
                <select
                  name="eventType"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
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
                <label className="block text-gray-700 font-medium mb-1">Venue</label>
                <input
                  type="text"
                  name="venue"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  value={formData.venue}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  placeholder="mm / dd / yyyy"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">No. Of Guests</label>
                <select
                  name="guestCount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
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

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Write your message below</label>
              <textarea
                name="message"
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email address*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="E.g. (urnshume@gmail.com)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Enter OTP*</label>
                <div className="flex">
                  <input
                    type="text"
                    name="otp"
                    className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                    value={formData.otp}
                    onChange={handleChange}
                  />
                  <button className="bg-black hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-r-md">
                    Verify
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Time</label>
                <select
                  name="time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
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
                <label className="block text-gray-700 font-medium mb-1">More Events</label>
                <select
                  name="moreEvents"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  value={formData.moreEvents}
                  onChange={handleChange}
                >
                  <option value="4:00">4:00</option>
                  <option value="6:00">6:00</option>
                  <option value="8:00">8:00</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Service Required</label>
                <select
                  name="serviceRequired"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
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
                <label className="block text-gray-700 font-medium mb-1">How do you know?</label>
                <select
                  name="howDidYouKnow"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
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

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-lg text-lg"
              >
                Submit Enquiry
              </button>
            </div>
          </div>
        </div>

        {/* Cookie policy notification */}
        <div className="fixed bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center">
            <span className="text-2xl mr-2">🍪</span>
            <span>By using this website, you agree to our cookie policy.</span>
          </div>
          <button className="text-2xl">×</button>
        </div>
        
       
      </div>
    </div>
  );
};

export default BookingPage;