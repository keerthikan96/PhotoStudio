import { useState } from "react";

const PricingPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div
      id="pricing"
      className="min-h-screen flex flex-col items-center justify-center relative bg-[#f8f9fa] mt-12 sm:mt-16 md:mt-20 lg:mt-24"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 text-gray-900">
        {/* Hero Section */}
        <div className="bg-gray-800 text-white py-6 sm:py-8 md:py-10 text-center rounded-lg">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Wedding Photography Pricing and Packages</h1>
          <p className="text-xs sm:text-sm mt-2">Home / Wedding Photography Pricing and Packages</p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto my-6 sm:my-8 md:my-10 p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Wedding Photography Pricing by Focuz Studios</h2>
          <h3 className="text-lg sm:text-xl font-medium mb-3">Capturing Genuine, Unscripted, and Unforgettable Moments</h3>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Your wedding day is more than just an event — it's a reflection of love, laughter, and timeless connections. At Focuz Studios, we know that every emotion 
            deserves to be beautifully preserved through stunning photography. That's why our wedding photography pricing is crafted to ensure that we capture your day exactly, 
            safely, and creatively that you can both cherish and rejoice.
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Unlike others, we don't have one-size-fits-all for creative wedding photography. If you're wedding small, heavily staged, or fifteenth portfolio, we may not be 
            the right studio. If you're getting married in a venue with complicated lighting, varying backgrounds, and multiple locations, you've found the right partner! We 
            excel only in the right place.
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            We know something has to be functional, will truly be there to capture every fleeting second. Our wedding photography pricing packages are designed to give 
            you clarity, flexibility, and confidence. We are pricing as part of the story — not just numbers, but a reflection of the value we deliver to document every 
            of the most meaningful events.
          </p>
        </div>

        {/* How Pricing Works */}
        <div className="max-w-4xl mx-auto my-6 sm:my-8 md:my-10 p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">How Our Wedding Photography Pricing Works</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            At Focuz Studios, we understand that no two weddings are the same. That's why our pricing structure has been crafted after we researched how real weddings are the same — 
            whether it's a cozy backyard ceremony or a five-day destination event across multiple sites. That's why our wedding photography pricing structure adapts to your unique 
            celebration, without compromising on quality or creativity.
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            We pride ourselves on transparency — you'll always know exactly what you're getting with us. We never upsell or attempt to exploit what we know is a special event for 
            anyone. Our goal is to make your investment feel confident and worthwhile.
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            No matter your code — from an intimate gathering to a grand affair — our artistic approach, attending style, and editing consistency stay the same. We don't inflate our services by 
            padding labels like "basic" or "luxury". Instead, our photography service pricing is based purely on what's needed to tell your story the best way possible.
          </p>
        </div>

        {/* What Influences Pricing */}
        <div className="max-w-4xl mx-auto my-6 sm:my-8 md:my-10 p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">What influences pricing?</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-3">Your pricing depends on several important factors:</p>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
            <li>The scale of your event (intimate or grand)</li>
            <li>The number of events covered</li>
            <li>The size of the photography and videography crew required</li>
            <li>Additional services like drone coverage or extra cinematography</li>
            <li>Travel requirements (if any)</li>
          </ul>
          <p className="text-gray-700 text-sm sm:text-base mt-4">
            Rest assured, whether it's a outdoor view or an extended hours, the quality, creativity, and storytelling style you love in our portfolio will remain unchanged.
          </p>
        </div>

        {/* Coverage Options */}
        <div className="max-w-4xl mx-auto my-6 sm:my-8 md:my-10 p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Wedding Photography Coverage Options</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            To help you visualize what can be included, here are some flexible structures we offer:
          </p>

          {/* Pricing Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Small Gathering */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-200 p-3">
                <h3 className="font-bold">Small Gathering</h3>
                <p className="text-sm">Perfect for intimate weddings or smaller events</p>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>1 Artist / 7 hour Photography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>Traditional Photography album</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>1 Traditional Videography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>Pre-Event family/portrait shots</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>Online photo gallery</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm">Interested</button>
                </div>
              </div>
            </div>

            {/* Complete Celebration */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-700 text-white p-3">
                <h3 className="font-bold">Complete Celebration</h3>
                <p className="text-sm">Perfect for traditional weddings with a larger gathering</p>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>2 Artists / 9 hours Photography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>2 Traditional Videography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>1 Drone Photographer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>100-150 fine wedding album (optional)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>Highlight processing of selected images</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>Video photo sharing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>Online Album</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm">Interested</button>
                </div>
              </div>
            </div>

            {/* Grand Affair */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-500 text-white p-3">
                <h3 className="font-bold">Grand Affair</h3>
                <p className="text-sm">Ideal for elaborate wedding celebrations with maximum coverage</p>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>3 Artists / 2 Lead Photographer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>3 Traditional Photographer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>3 Traditional Videographer 4K</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>1 Cinematographer 4K</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>Live-Up to 3K fine wedding shoot</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>FPV Drones 4K</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>USB processing and editing of selected images</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>Digital Album Printing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>Signature Albums</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm">Interested</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Terms & Conditions */}
        <div className="max-w-4xl mx-auto my-6 sm:my-8 md:my-10 p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Booking Terms & Conditions</h2>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
            <li>To confirm your booking, a 50% deposit payment of the total quoted amount is required.</li>
            <li>The remaining 50% must be cleared at least one week prior to your final event.</li>
            <li>Any extension of shooting hours will incur additional charges, agreed upon beforehand.</li>
            <li>Always mention your quotation number and include it in payment references.</li>
          </ul>

          {/* Payment and negotiation info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="col-span-1 flex flex-col items-center text-center p-4">
              <div className="mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Price Negotiation</h3>
              <p className="text-sm">
                We understand the importance of working within your financial considerations. While we provide set pricing packages to fit typical needs, we're happy to discuss your specific budget requirements and find the right options that work for you.
              </p>
            </div>
            <div className="col-span-1 flex flex-col items-center text-center p-4">
              <div className="mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Payment</h3>
              <p className="text-sm">
                We accept payment via bank transfer, credit card, or digital payment options. All prices are inclusive of applicable taxes. The remaining 50% must be cleared at least one week prior to your final event.
              </p>
            </div>
            <div className="col-span-1 flex flex-col items-center text-center p-4">
              <div className="mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Our Editing & Filmmaking Philosophy</h3>
              <p className="text-sm">
                We believe in capturing the raw essence of your special day, resulting in images that tell a genuine story. Our editing style maintains a natural look while enhancing the best aspects of every image, preserving the true colors and real emotions throughout the event.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Policy */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-6 sm:my-8 md:my-10">
          <div className="p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <div className="mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Copyright Policy</h3>
            <p className="text-sm">
              While you'll receive the digital rights to all images captured at your event, we retain the copyright and may use selected photos for our portfolio, website, social media platforms, and marketing materials. All images will be properly credited when used.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto my-6 sm:my-8 md:my-10 p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Some quick FAQs</h2>
          <div className="space-y-3">
            <div className="border-b py-2 sm:py-3">
              <button className="w-full text-left font-bold text-sm sm:text-base" onClick={() => toggleFAQ(0)}>
                1. Do you offer standard packages like basic or premium?
              </button>
              {openFAQ === 0 && (
                <p className="text-gray-700 mt-2 text-xs sm:text-sm">
                  No, we don't believe in "Fixed Size" (like basic or luxury) as it closely mixes the creative approach and quality. Pricing is based purely on event type, location, and coverage of your moments.
                </p>
              )}
            </div>
            <div className="border-b py-2 sm:py-3">
              <button className="w-full text-left font-bold text-sm sm:text-base" onClick={() => toggleFAQ(1)}>
                2. Will your photography style change based on my budget or coverage?
              </button>
              {openFAQ === 1 && (
                <p className="text-gray-700 mt-2 text-xs sm:text-sm">
                  No. Our creative style and quality remain consistent regardless of package size. The only difference is in the number of photographers, hours, and deliverables.
                </p>
              )}
            </div>
            <div className="border-b py-2 sm:py-3">
              <button className="w-full text-left font-bold text-sm sm:text-base" onClick={() => toggleFAQ(2)}>
                3. Can we negotiate your pricing?
              </button>
              {openFAQ === 2 && (
                <p className="text-gray-700 mt-2 text-xs sm:text-sm">
                  Yes, we're happy to work with you to create a custom package that fits your needs and budget. Reach out to discuss your specific requirements.
                </p>
              )}
            </div>
            <div className="border-b py-2 sm:py-3">
              <button className="w-full text-left font-bold text-sm sm:text-base" onClick={() => toggleFAQ(3)}>
                4. How can we confirm a booking?
              </button>
              {openFAQ === 3 && (
                <p className="text-gray-700 mt-2 text-xs sm:text-sm">
                  To secure your date, we require a signed contract and a 50% deposit. This ensures we reserve your date exclusively for you.
                </p>
              )}
            </div>
            <div className="border-b py-2 sm:py-3">
              <button className="w-full text-left font-bold text-sm sm:text-base" onClick={() => toggleFAQ(4)}>
                5. What details should we share when inquiring about a quote?
              </button>
              {openFAQ === 4 && (
                <p className="text-gray-700 mt-2 text-xs sm:text-sm">
                  Please share your wedding date, venue location(s), approximate guest count, and the photography coverage hours you're considering. This helps us provide an accurate quote tailored to your specific needs.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
