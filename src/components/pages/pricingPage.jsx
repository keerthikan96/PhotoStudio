import { RevealOnScroll } from "../RevealOnScroll";
import { PagesUI } from "../PagesUI";
import TextTransition from "../TextTransition";
import PricingPackage from "../PricingPackage";
import FAQ from "../FAQ"; // Import the new FAQ component

const PricingPage = () => {
  const text = "text-gray-500 font-extralight ";
  
  // Define package data to pass as props
  const pricingPackages = [
    {
      title: "Small Gathering",
      subtitle: "Perfect for intimate weddings",
      headerBgClass: "bg-gray-200",
      headerTextClass: "text-black",
      features: [
        "1 Artist / 7 hour Photography",
        "Traditional Photography album",
        "1 Traditional Videography",
        "Pre-Event family/portrait shots",
        "Online photo gallery"
      ],
      delay: 0
    },
    {
      title: "Complete Celebration",
      subtitle: "Perfect for traditional weddings",
      headerBgClass: "bg-gray-700",
      headerTextClass: "text-white",
      features: [
        "2 Artists / 9 hours Photography",
        "2 Traditional Videography",
        "1 Drone Photographer",
        "100-150 fine wedding album",
        "Highlight processing"
      ],
      delay: 0.2
    },
    {
      title: "Grand Affair",
      subtitle: "For elaborate celebrations",
      headerBgClass: "bg-gray-500",
      headerTextClass: "text-white",
      features: [
        "3 Artists / 2 Lead Photographer",
        "3 Traditional Photographer",
        "3 Traditional Videographer 4K",
        "1 Cinematographer 4K",
        "FPV Drones 4K"
      ],
      delay: 0.4
    }
  ];

  // FAQ data for easier management
  const faqs = [
    {
      question: "Do you offer standard packages like basic or premium?",
      answer: "No, we don't believe in \"Fixed Size\" (like basic or luxury) as it closely mixes the creative approach and quality. Pricing is based purely on event type, location, and coverage of your moments."
    },
    {
      question: "Will your photography style change based on my budget or coverage?",
      answer: "No. Our creative style and quality remain consistent regardless of package size. The only difference is in the number of photographers, hours, and deliverables."
    },
    {
      question: "Can we negotiate your pricing?",
      answer: "Yes, we're happy to work with you to create a custom package that fits your needs and budget. Reach out to discuss your specific requirements."
    },
    {
      question: "How can we confirm a booking?",
      answer: "To secure your date, we require a signed contract and a 50% deposit. This ensures we reserve your date exclusively for you."
    },
    {
      question: "What details should we share when inquiring about a quote?",
      answer: "Please share your wedding date, venue location(s), approximate guest count, and the photography coverage hours you're considering. This helps us provide an accurate quote tailored to your specific needs."
    }
  ];

  return (
    <div
      id="pricing"
      className="min-h-screen bg-[#f0f2f4] mt-10"
    >
      <div className="flex flex-col items-center justify-center w-full mx-auto py-4 sm:py-6 md:py-8 text-gray-900">
        {/* Hero Section */}
        <div className="mx-4 md:mx-auto max-w-7xl md:w-full px-4 sm:px-6 md:px-8 bg-gray-800 text-white py-6 sm:py-8 md:py-10 text-center rounded-lg mb-8">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold">
            <TextTransition
              text={"Wedding Photography Pricing and Packages"}
            />
          </h1>
          <p className="text-xs sm:text-sm mt-2">Home / Wedding Photography Pricing and Packages</p>
        </div>

        <PagesUI>
          {/* Introduction */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <TextTransition
              text={"Wedding Photography Pricing by Focuz Studios"}
            />
                </h2>
              <p className="text-gray-700 font-bold text-lg sm:text-xl mb-4">
                <TextTransition text={"Capturing Genuine, Unscripted, and Unforgettable Moments"} />
              </p>
              <RevealOnScroll>
                <p className={text + "text-sm sm:text-base mb-4"}>
                  Your wedding day is more than just an event — it&apos;s a reflection of love, laughter, and timeless connections. At Focuz Studios, we know that every emotion 
                  deserves to be beautifully preserved through stunning photography. That&apos;s why our wedding photography pricing is crafted to ensure that we capture your day exactly, 
                  safely, and creatively that you can both cherish and rejoice.
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className={text + "text-sm sm:text-base mb-4"}>
                  Unlike others, we don&apos;t have one-size-fits-all for creative wedding photography. If you&apos;re wedding small, heavily staged, or fifteenth portfolio, we may not be 
                  the right studio. If you&apos;re getting married in a venue with complicated lighting, varying backgrounds, and multiple locations, you&apos;ve found the right partner! We 
                  excel only in the right place.
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className={text + "text-sm sm:text-base"}>
                  We know something has to be functional, will truly be there to capture every fleeting second. Our wedding photography pricing packages are designed to give 
                  you clarity, flexibility, and confidence. We are pricing as part of the story — not just numbers, but a reflection of the value we deliver to document every 
                  of the most meaningful events.
                </p>
              </RevealOnScroll>
            </div>
          </RevealOnScroll>

          {/* How Pricing Works */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <TextTransition
              text={"How Our Wedding Photography Pricing Works"}
            />
                </h2>
              <RevealOnScroll>
                <p className={text + "text-sm sm:text-base mb-4"}>
                  At Focuz Studios, we understand that no two weddings are the same. That&apos;s why our pricing structure has been crafted after we researched how real weddings are the same — 
                  whether it&apos;s a cozy backyard ceremony or a five-day destination event across multiple sites. That&apos;s why our wedding photography pricing structure adapts to your unique 
                  celebration, without compromising on quality or creativity.
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className={text + "text-sm sm:text-base mb-4"}>
                  We pride ourselves on transparency — you&apos;ll always know exactly what you&apos;re getting with us. We never upsell or attempt to exploit what we know is a special event for 
                  anyone. Our goal is to make your investment feel confident and worthwhile.
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className={text + "text-sm sm:text-base"}>
                  No matter your code — from an intimate gathering to a grand affair — our artistic approach, attending style, and editing consistency stay the same. We don&apos;t inflate our services by 
                  padding labels like &quot;basic&quot; or &quot;luxury&quot;. Instead, our photography service pricing is based purely on what&apos;s needed to tell your story the best way possible.
                </p>
              </RevealOnScroll>
            </div>
          </RevealOnScroll>

          {/* What Influences Pricing */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                <TextTransition text={"What influences pricing?"} />
              </h2>
              <p className="text-gray-700 text-sm sm:text-base mb-3">Your pricing depends on several important factors:</p>
              <ul className="list-disc list-inside text-gray-500 font-extralight text-sm sm:text-base space-y-2">
                <li>The scale of your event (intimate or grand)</li>
                <li>The number of events covered</li>
                <li>The size of the photography and videography crew required</li>
                <li>Additional services like drone coverage or extra cinematography</li>
                <li>Travel requirements (if any)</li>
              </ul>
              <p className={text + "text-sm sm:text-base mt-4"}>
                Rest assured, whether it&apos;s a outdoor view or an extended hours, the quality, creativity, and storytelling style you love in our portfolio will remain unchanged.
              </p>
            </div>
          </RevealOnScroll>

          {/* Two-column layout for Packages and Text */}
          <RevealOnScroll>
       
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-2 pb-4">
                <p className="text-gray-700 font-bold text-lg sm:text-2xl mb-4">
                  <TextTransition text={"Wedding Photography Coverage Options"} />
                </p>
                <RevealOnScroll>
                  <p className={text + "text-base sm:text-xl mb-6"}>
                    To help you visualize what can be included, here are some flexible structures we offer for your special day. Each package is designed to capture your unique story.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll>
                  <button className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition duration-300">
                    Book Now
                  </button>
                </RevealOnScroll>
              </div>

              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-6 flex flex-col justify-center items-center">
                {/* Pricing Packages */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {pricingPackages.map((pkg, index) => (
                    <PricingPackage key={index} {...pkg} />
                  ))}
                </div>
              </div>
        
          </RevealOnScroll>

          {/* Booking Terms & Conditions */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white my-6 sm:my-8 md:my-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                <TextTransition text={"Booking Terms & Conditions"} />
              </h2>
              <ul className="list-disc list-inside text-gray-500 font-extralight text-sm sm:text-base space-y-2">
                <li>To confirm your booking, a 50% deposit payment of the total quoted amount is required.</li>
                <li>The remaining 50% must be cleared at least one week prior to your final event.</li>
                <li>Any extension of shooting hours will incur additional charges, agreed upon beforehand.</li>
                <li>Always mention your quotation number and include it in payment references.</li>
              </ul>

              {/* Payment and negotiation info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <RevealOnScroll threshold={0.1} delay={0}>
                  <div className="col-span-1 flex flex-col items-center text-center p-4 bg-white shadow-2xl rounded-lg transition-transform duration-700 hover:scale-105">
                    <div className="mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Price Negotiation</h3>
                    <p className="text-sm text-gray-500 font-extralight">
                      We understand the importance of working within your financial considerations. While we provide set pricing packages to fit typical needs, we&apos;re happy to discuss your specific budget requirements.
                    </p>
                  </div>
                </RevealOnScroll>
                
                <RevealOnScroll threshold={0.1} delay={0.2}>
                  <div className="col-span-1 flex flex-col items-center text-center p-4 bg-white shadow-2xl rounded-lg transition-transform duration-700 hover:scale-105">
                    <div className="mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Payment</h3>
                    <p className="text-sm text-gray-500 font-extralight">
                      We accept payment via bank transfer, credit card, or digital payment options. All prices are inclusive of applicable taxes. The remaining 50% must be cleared at least one week prior to your final event.
                    </p>
                  </div>
                </RevealOnScroll>
                
                <RevealOnScroll threshold={0.1} delay={0.4}>
                  <div className="col-span-1 flex flex-col items-center text-center p-4 bg-white shadow-2xl rounded-lg transition-transform duration-700 hover:scale-105">
                    <div className="mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Our Editing & Filmmaking Philosophy</h3>
                    <p className="text-sm text-gray-500 font-extralight">
                      We believe in capturing the raw essence of your special day, resulting in images that tell a genuine story. Our editing style maintains a natural look while enhancing the best aspects of every image.
                    </p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </RevealOnScroll>

          {/* Copyright Policy */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-6 sm:my-8 md:my-10">
              <div className="p-4 sm:p-6 md:p-8 bg-white shadow-2xl rounded-lg flex flex-col items-center text-center">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Copyright Policy</h3>
                <p className={text + "text-sm"}>
                  While you&apos;ll receive the digital rights to all images captured at your event, we retain the copyright and may use selected photos for our portfolio, website, social media platforms, and marketing materials. All images will be properly credited when used.
                </p>
              </div>
              
              <div className="p-4 sm:p-6 md:p-8 bg-white shadow-2xl rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-center">Get Your Custom Quote</h3>
                <p className={text + "text-sm text-center mb-4"}>
                  Every wedding is unique. Contact us for a personalized quote tailored to your specific needs.
                </p>
                <div className="flex justify-center">
                  <button className="bg-black text-white px-6 py-3 rounded text-sm hover:bg-gray-800 transition duration-300">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* FAQs */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto p-4 sm:p-6 md:p-8 bg-white my-6 sm:my-8 md:my-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                <TextTransition text={"Some quick FAQs"} />
              </h2>
              <FAQ faqs={faqs} />
            </div>
          </RevealOnScroll>
          
          {/* Final CTA */}
          <RevealOnScroll>
            <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto my-6 sm:my-8 md:my-10 bg-white overflow-hidden">
              <div className="p-8 text-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Capture Your Wedding Story?</h2>
                <p className={text + "text-sm mb-6"}>
                  Let&apos;s discuss how we can perfectly document your special day with our photography services.
                </p>
                <button className="bg-black text-white px-6 py-3 rounded text-sm hover:bg-gray-800 transition duration-300">
                  Contact Us Now
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </PagesUI>
      </div>
    </div>
  );
};

export default PricingPage;
