import { useState } from "react";

const PricingPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div
    id="pricing"
    className="min-h-screen flex flex-col items-center justify-center relative bg-[#f8f9fa] top-40"
  >
    <div className=" text-gray-900">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-10 text-center">
        <h1 className="text-3xl font-bold">Wedding Photography Pricing and Packages</h1>
        <p className="text-sm mt-2">Home / Pricing</p>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Capturing Genuine, Unscripted, and Unforgettable Moments</h2>
        <p className="text-gray-700">We believe wedding photography is an art that preserves your precious moments beautifully. Our packages are designed to be flexible and tailored to your needs.</p>
      </div>

      {/* Pricing Information */}
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">What influences pricing?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>The size of your event</li>
          <li>The number of events covered</li>
          <li>The number of photographers needed</li>
          <li>Additional services like albums or extra photographers</li>
        </ul>
      </div>

      {/* Pricing Options */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 p-6">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-bold">Small Gathering</h3>
          <p className="text-gray-600">For intimate weddings</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-bold">Complete Celebration</h3>
          <p className="text-gray-600">Perfect for a full wedding experience</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-bold">Grand Affair</h3>
          <p className="text-gray-600">Best for luxurious weddings</p>
        </div>
      </div>

      {/* Booking Terms & Conditions */}
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Booking Terms & Conditions</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>50% advance payment required</li>
          <li>Remaining 50% due before final delivery</li>
          <li>Additional charges for extended hours</li>
        </ul>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Some quick FAQs</h2>
        <div>
          {['Can we negotiate pricing?', 'How do we confirm a booking?', 'What details should we share when inquiring?'].map((faq, index) => (
            <div key={index} className="border-b py-2">
              <button className="w-full text-left font-bold" onClick={() => toggleFAQ(index)}>
                {faq}
              </button>
              {openFAQ === index && <p className="text-gray-700 mt-2">Detailed answer to {faq}.</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default PricingPage;
